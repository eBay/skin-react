import * as React from 'react';
import {processHtmlAttributes} from '../skin-utils';

const LEFT = -1;
const RIGHT = 1;
export const getTemplateData = (state) => {
  const {config, autoplayInterval, itemsPerSlide, slideWidth, gap, items} = state;
  const hasOverride = config.offsetOverride !== undefined;
  const isSingleSlide = items.length <= itemsPerSlide;
  state.index = normalizeIndex(state, state.index);
  const offset = getOffset(state);
  const prevControlDisabled = isSingleSlide || (!autoplayInterval && offset === 0);
  const nextControlDisabled = isSingleSlide || (!autoplayInterval && offset === getMaxOffset(state));
  const bothControlsDisabled = prevControlDisabled && nextControlDisabled;
  let slide, itemWidth, totalSlides, a11yStatusText;
  if (itemsPerSlide) {
    const itemsInSlide = itemsPerSlide + state.peek;
    slide = getSlide(state);
    itemWidth = `calc(${100 / itemsInSlide}% - ${((itemsInSlide - 1) * gap) / itemsInSlide}px)`;
    totalSlides = getSlide(state, items.length);
    a11yStatusText = (state.a11yStatusText || '')
      .replace('{currentSlide}', slide + 1)
      .replace('{totalSlides}', totalSlides);
  }

  items.forEach((item, i) => {
    if (!React.isValidElement(item)) {
      // @ts-ignore
      const {style, transform} = item.props;
      const marginRight = i !== items.length - 1 && `${gap}px`;

      // Account for users providing a style string or object for each item.
      if (typeof style === 'string') {
        // @ts-ignore
        item.props.style = `${style};flex-basis:${itemWidth};margin-right:${marginRight};`;
        if (transform) {
          // @ts-ignore
          item.props.style += `transform:${transform}`;
        }
      } else {
        // @ts-ignore
        item.props.style = {
          ...style,
          width: itemWidth,
          marginRight,
          transform
        };
      }

      item.fullyVisible =
        item.left === undefined || (item.left - offset >= -0.01 && item.right - offset <= slideWidth + 0.01);
    }
  });

  return {
    ...state,
    items,
    slide,
    offset: hasOverride ? config.offsetOverride : offset,
    disableTransition: hasOverride,
    totalSlides,
    a11yStatusText,
    prevControlDisabled,
    nextControlDisabled,
    bothControlsDisabled
  };
};

function onRender() {
  const {containerEl, listEl, state} = this;
  const {config, items, autoplayInterval, paused, interacting} = state;

  // Do nothing for empty carousels.
  if (!items.length) {
    return;
  }

  // Force a rerender to start the offset override animation.
  if (config.offsetOverride) {
    config.offsetOverride = undefined;
    this.renderFrame = requestAnimationFrame(() => this.setStateDirty());
    return;
  }

  // Track if we are on a normal render or a render caused by recalculating.
  if (config.preserveItems) {
    config.preserveItems = false;

    // Ensure only visible items within the carousel are focusable.
    // We don't have access to these items in the template so me must update manually.
    this.focusFrame = requestAnimationFrame(() => {
      forEls(listEl, (itemEl) => {
        //TODO:
        // focusables(itemEl).forEach(itemEl.getAttribute('aria-hidden') !== 'true'
        //   ? child => child.removeAttribute('tabindex')
        //   : child => child.setAttribute('tabindex', '-1')
        // );
      });
    });

    if (config.nativeScrolling) {
      if (config.skipScrolling) {
        this.emitUpdate();
        config.skipScrolling = false;
      } else {
        const offset = getOffset(state);
        if (offset !== listEl.scrollLeft) {
          // Animate to the new scrolling position and emit update events afterward.
          config.scrollTransitioning = true;
          //TODO: this.cancelScrollTransition = scrollTransition(listEl, offset, this.emitUpdate);
        } else if (this.isMoving) {
          // Animate to the new scrolling position and emit update events afterward.
          config.scrollTransitioning = true;
          //TODO: this.cancelScrollTransition = scrollTransition(listEl, getOffset(state), this.emitUpdate);
        }
      }
    }

    return;
  }

  // Otherwise recalculates the items / slide sizes.
  this.renderFrame = requestAnimationFrame(() => {
    const {width: containerWidth} = containerEl.getBoundingClientRect();
    const {left: currentLeft} = listEl.firstElementChild.getBoundingClientRect();

    this.setStateDirty('slideWidth', containerWidth);
    config.preserveItems = true;
    config.nativeScrolling = isNativeScrolling(listEl);

    // Update item positions in the dom.
    forEls(listEl, (itemEl, i) => {
      const item = items[i];
      const {left, right} = itemEl.getBoundingClientRect();
      item.left = left - currentLeft;
      item.right = right - currentLeft;
    });
  });
}

/**
 * Called before updates and before the widget is destroyed to remove any pending async timers / actions.
 */
function cleanupAsync() {
  clearTimeout(this.autoplayTimeout);
  cancelAnimationFrame(this.renderFrame);
  cancelAnimationFrame(this.focusFrame);

  if (this.cancelScrollTransition) {
    this.cancelScrollTransition();
    this.cancelScrollTransition = undefined;
  }
}

function emitUpdate() {
  const {
    state: {config, items}
  } = this;
  config.scrollTransitioning = false;
  this.emit('move', {
    visibleIndexes: items.filter(({fullyVisible}) => fullyVisible).map((item) => items.indexOf(item))
  });
}

/**
 * Moves the carousel in the `data-direction` of the clicked element if possible.
 *
 * @param {MouseEvent} originalEvent
 * @param {HTMLElement} target
 */
function handleMove(direction, originalEvent) {
  if (this.isMoving) {
    return;
  }
  const {state} = this;
  const nextIndex = this.move(direction);
  const slide = getSlide(state, nextIndex);
  this.emit('slide', {slide: slide + 1, originalEvent});
  this.emit(`${direction === 1 ? 'next' : 'previous'}`, {originalEvent});
}

/**
 * Toggles the play state of an autoplay carousel.
 *
 * @param {MouseEvent} originalEvent
 */
function togglePlay(originalEvent) {
  const {
    state: {config, paused}
  } = this;
  config.preserveItems = true;
  this.setState('paused', !paused);
  if (paused && !this.isMoving) {
    this.move(RIGHT);
  }
  this.emit(`${paused ? 'play' : 'pause'}`, {originalEvent});
}

/**
 * Find the closest item index to the scroll offset and triggers an update.
 *
 * @param {number} scrollLeft The current scroll position of the carousel.
 */
function handleScroll(scrollLeft) {
  const {state} = this;
  const {config, items, gap} = state;
  let closest;

  if (scrollLeft >= getMaxOffset(state) - gap) {
    closest = items.length - 1;
  } else {
    // Find the closest item using a binary search on each carousel slide.
    const itemsPerSlide = state.itemsPerSlide || 1;
    const totalItems = items.length;
    let low = 0;
    let high = Math.ceil(totalItems / itemsPerSlide) - 1;

    while (high - low > 1) {
      const mid = Math.floor((low + high) / 2);
      if (scrollLeft > items[mid * itemsPerSlide].left) {
        low = mid;
      } else {
        high = mid;
      }
    }

    const deltaLow = Math.abs(scrollLeft - items[low * itemsPerSlide].left);
    const deltaHigh = Math.abs(scrollLeft - items[high * itemsPerSlide].left);
    closest = normalizeIndex(state, (deltaLow > deltaHigh ? high : low) * itemsPerSlide);
  }

  if (state.index !== closest) {
    config.skipScrolling = true;
    config.preserveItems = true;
    this.setState('index', closest);
    this.emit('scroll', {index: closest});
  }
}

/**
 * Causes the carousel to move to the provided index.
 *
 * @param {-1|1} delta 1 for right and -1 for left.
 * @return {number} the updated index. //TODO : return newState object
 */
export const move = (delta, state) => {
  const nextIndex = getNextIndex(state, delta);
  return {...state, config: {...state.config, preserveItems: false}, index: nextIndex};
};
/**
 * Given the current widget state, finds the active offset left of the selected item.
 * Also automatically caps the offset at the max offset.
 *
 * @param {object} state The widget state.
 * @return {number}
 */
export const getOffset = (state) => {
  const {items, index} = state;
  if (!items.length) {
    return 0;
  }
  return Math.min(items[index].left, getMaxOffset(state)) || 0;
};

/**
 * Given the current widget state, finds the last valid offset.
 *
 * @param {object} state The widget state.
 * @return {number}
 */
function getMaxOffset({items, slideWidth}) {
  if (!items.length) {
    return 0;
  }
  return Math.max(items[items.length - 1].right - slideWidth, 0) || 0;
}

/**
 * Gets the slide for a given index.
 * Defaults to the current index if none provided.
 *
 * @param {object} state The widget state.
 * @param {number?} i the index to get the slide for.
 * @return {number}
 */
const getSlide = ({index, itemsPerSlide}, i = index) => {
  if (!itemsPerSlide) {
    return;
  }

  return Math.ceil(i / itemsPerSlide);
};

/**
 * Ensures that an index is valid.
 *
 * @param {object} state The widget state.
 * @param {number} index the index to normalize.
 */
function normalizeIndex({items, itemsPerSlide}, index) {
  if (index > 0) {
    let result = index;
    result %= items.length || 1; // Ensure index is within bounds.
    result -= result % (itemsPerSlide || 1); // Round index to the nearest valid slide index.
    result = Math.abs(result); // Ensure positive value.
    return result;
  }

  return 0;
}

/**
 * Calculates the next valid index in a direction.
 *
 * @param {object} state The widget state.
 * @param {-1|1} delta 1 for right and -1 for left.
 * @return {number}
 */
export const getNextIndex = (state, delta) => {
  const {index, items, slideWidth, itemsPerSlide} = state;
  let i = index;
  let item;
  // If going backward from 0, we go to the end.
  if (delta === LEFT && i === 0) {
    i = items.length - 1;
  } else {
    // Find the index of the next item that is not fully in view.
    do {
      item = items[(i += delta)];
    } while (item && item.fullyVisible);

    if (delta === LEFT && !itemsPerSlide) {
      // If going left without items per slide, go as far left as possible while keeping this item fully in view.
      const targetOffset = item.right - slideWidth;
      do {
        item = items[--i];
      } while (item && item.left >= targetOffset);
      i += 1;
    }
  }

  return normalizeIndex(state, i);
};

/**
 * Calls a function on each element within a parent element.
 *
 * @param {HTMLElement} parent The parent to walk through.
 * @param {(el: HTMLElement, i: number) => any} fn The function to call.
 */
export const forEls = (parent, fn) => {
  let i = 0;
  let child = parent?.current?.firstElementChild;
  while (child) {
    fn(child, i++);
    child = child.nextElementSibling;
  }
};

/**
 * Checks if an element is using native scrolling.
 *
 * @param {HTMLElement} el the element to check
 * @return {boolean}
 */
function isNativeScrolling(el) {
  return getComputedStyle(el).overflowX !== 'visible';
}

export const getHTMLProps = (props) =>
  processHtmlAttributes(props, [
    'index',
    'type',
    'slide',
    'gap',
    'autoplay',
    'paused',
    'itemsPerSlide',
    'a11yPreviousText',
    'a11yNextText',
    'a11yStatusText',
    'a11yStatusTag',
    'a11yHeadingText',
    'a11yHeadingTag',
    'a11yPlayText',
    'a11yPauseText',
    'items',
    'slideWidth',
    'disableTransition',
    'totalSlides',
    'prevControlDisabled',
    'nextControlDisabled',
    'bothControlsDisabled'
  ]);
