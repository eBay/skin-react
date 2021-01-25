/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */
import * as React from 'react';
import classNames from 'classnames';
import {Carousel as CarouselComponent, CarouselProps} from './components/carousel';
// Used for carousel slide direction.

export const Carousel = ({...props}: CarouselProps & any) => {
  const gap = parseInt(props.gap, 10);
  const [state, setState] = React.useState({
    ...props,
    config: {}, // A place to store values that should not trigger an update by themselves.
    gap: isNaN(gap) ? 16 : gap,
    index: parseInt(props.index, 10) || 0,
    itemsPerSlide: parseInt(props.itemsPerSlide, 10) || undefined,
    a11yPreviousText: props.a11yPreviousText || 'Previous Slide',
    a11yNextText: props.a11yNextText || 'Next Slide',
    a11yStatusText: props.a11yStatusText, // || `Showing Slide ${currentSlide} of ${totalSlides}`,
    a11yStatusTag: props.a11yStatusTag || 'span',
    a11yHeadingText: props.a11yHeadingText,
    a11yHeadingTag: props.a11yHeadingTag || 'h2',
    a11yPauseText: props.a11yPauseText || 'Pause',
    a11yPlayText: props.a11yPlayText || 'Play'
  });
  React.useEffect(() => {
    //onMount
  });

  const {itemsPerSlide} = state;
  if (itemsPerSlide) {
    state.peek = itemsPerSlide % 1;
    state.itemsPerSlide = itemsPerSlide - state.peek;
    state.className = state.className + 'carousel--slides';

    if (!state.peek && !props.autoplay) {
      state.peek = 0.1;
    }

    if (state.peek) {
      state.className = state.className + 'carousel--peek';
    }

    // Only allow autoplay option for discrete carousels.
    if (props.autoplay) {
      const isSingleSlide = props.items.length <= itemsPerSlide;
      state.autoplayInterval = parseInt(props.autoplay, 10) || 4000;
      state.className = state.className + 'carousel__autoplay';
      state.paused = isSingleSlide || props.paused; // Force paused state if not enough slides provided;
      state.interacting = false;
    }
  }

  state.children = React.Children.map(props.children, (item, i) => {
    const isStartOfSlide = state.itemsPerSlide ? i % state.itemsPerSlide === 0 : true;
    return React.cloneElement(item, {
      ...item.props,
      className: isStartOfSlide ? ['carousel__snap-point', item.props.className] : item.props.className
    });
  });

  const data = {...state, ...props};
  return <CarouselComponent {...data} />;
};

export {CarouselProps} from './components/carousel';
export default Carousel;
