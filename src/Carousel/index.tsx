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
import {getBoundaries, getNextIndex, getTemplateData, move} from './carousel-utils';
import {debounce} from '../skin-utils';

export const Carousel = ({...props}: CarouselProps & any) => {
  const listEl = React.createRef();
  const nextEl = React.createRef();
  const containerEl = React.createRef();
  const gap = parseInt(props.gap, 10);
  const [state, setState] = React.useState({
    ...props,
    className: classNames('carousel', props.className),
    config: {}, // A place to store values that should not trigger an update by themselves.
    gap: isNaN(gap) ? 16 : gap,
    index: parseInt(props.index, 10) || 0,
    itemsPerSlide: parseInt(props.itemsPerSlide, 10) || undefined,
    a11yPreviousText: props.a11yPreviousText || 'Previous Slide',
    a11yNextText: props.a11yNextText || 'Next Slide',
    a11yStatusText: props.a11yStatusText || `Showing Slide {currentSlide} of {totalSlides}`,
    a11yStatusTag: props.a11yStatusTag || 'span',
    a11yHeadingText: props.a11yHeadingText,
    a11yHeadingTag: props.a11yHeadingTag || 'h2',
    a11yPauseText: props.a11yPauseText || 'Pause',
    a11yPlayText: props.a11yPlayText || 'Play',
    listEl,
    nextEl,
    containerEl,
    items: React.Children.toArray(props.children) || []
  });
  React.useEffect(() =>{
    const debouncedHandleResize = debounce(()=>{
      const {containerWidth } = getBoundaries(state)
      setState({...state, slideWidth: containerWidth, config: {...state.config, preserveItems: false}})
    }, 1000)
    const {containerWidth, currentLeft } = getBoundaries(state)
    // Update item positions in the dom.
    const children = state.listEl?.current?.children || [];
    const prevItems = React.Children.toArray(props.children) || [];
    if (!state.config.preserveItems) {
      const items = prevItems.map((item: object, i) => {
        const itemEl = children[i];
        const {left, right} = itemEl?.getBoundingClientRect() || {};
        return {
          ...item,
          left: left - currentLeft,
          right: right - currentLeft
        };
      });
      setState({...state, items, config: {...state.config, preserveItems: true}, slideWidth: containerWidth});
    }
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  });

  const {itemsPerSlide} = state;
  if (itemsPerSlide) {
    state.peek = itemsPerSlide % 1;
    state.itemsPerSlide = itemsPerSlide - state.peek;
    state.className = state.className + ' carousel--slides';

    if (!state.peek && !props.autoplay) {
      state.peek = 0.1;
    }

    if (state.peek) {
      state.className = state.className + ' carousel--peek';
    }
  }
  const data = getTemplateData({...state, ...props});
  const handleStartInteraction = () => data.autoplayInterval && setState({interacting: true});
  const handleEndInteraction = () => data.autoplayInterval && setState({interacting: false});
  const handleMove = (direction) => {
    const newState = move(direction, state);
    setState(newState);
  };
  return (
    <CarouselComponent
      {...data}
      onStartInteraction={handleStartInteraction}
      onEndInteraction={handleEndInteraction}
      onMove={handleMove}
    >
      {React.Children.map(data.items, (item, i) => {
        const isStartOfSlide = state.itemsPerSlide ? i % state.itemsPerSlide === 0 : true;
        return React.cloneElement(item, {
          ...item.props,
          className: classNames({'carousel__snap-point': isStartOfSlide}, item.props.className)
        });
      })}
    </CarouselComponent>
  );
};

export {CarouselProps} from './components/carousel';
export default Carousel;
