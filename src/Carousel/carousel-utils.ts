import * as React from 'react';
import {processHtmlAttributes} from '../skin-utils';

const LEFT = -1;
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
    const {style, transform} = item.props;
    const marginRight = i !== items.length - 1 && `${gap}px`;

    // Account for users providing a style string or object for each item.
    if (typeof style === 'string') {
      item.props.style = `${style};flex-basis:${itemWidth};margin-right:${marginRight};`;
      if (transform) {
        item.props.style += `transform:${transform}`;
      }
    } else {
      item.props.style = {
        ...style,
        width: itemWidth,
        marginRight,
        transform
      };
    }
    item.fullyVisible =
      item.left === undefined || (item.left - offset >= -0.01 && item.right - offset <= slideWidth + 0.01);
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

/**
 * Causes the carousel to move to the provided index.
 *
 * @param {-1|1} delta 1 for right and -1 for left.
 * @return {number} the updated index.
 */
export const move = (delta, state) => {
  const nextIndex = getNextIndex(state, delta);
  return {...state, config: {...state.config, preserveItems: true}, index: nextIndex};
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
    'bothControlsDisabled',
    'offset'
  ]);

export const getBoundaries = (state) => {
  const {width: containerWidth} = state?.containerEl?.current?.getBoundingClientRect() || {};
  const {left: currentLeft} = state?.listEl?.current?.firstElementChild?.getBoundingClientRect() || {};
  return {containerWidth, currentLeft};
};

/**
 * Checks if an element is using native scrolling.
 *
 * @param {HTMLElement} el the element to check
 * @return {boolean}
 */
export const isNativeScrolling = (el) => getComputedStyle(el).overflowX !== 'visible';
