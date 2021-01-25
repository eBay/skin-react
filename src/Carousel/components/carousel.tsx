/*
 * ************************************************************
 *  Copyright 2021 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import classNames from 'classnames';
import {Icon} from '../../Icon';
import {DefaultElement} from '../../skin-utils';
export type CarouselProps = React.HTMLProps<HTMLDivElement> & {
  config?: any;
  offset?: any;
  disableTransition?: any;
  totalSlides?: any;
  bothControlsDisabled?: any;
  autoplayInterval?: any;
  prevControlDisabled?: any;
  nextControlDisabled?: any;
  itemsPerSlide?: any;
  paused?: any;
  a11yPlayText?: any;
  a11yPauseText?: any;
  a11yPreviousText?: any;
  a11yNextText?: any;
  a11yStatusTag?: any;
  a11yHeadingTag?: any;
  a11yStatusText?: any;
  a11yHeadingText?: any;
  handleStartInteraction?: any;
  handleEndInteraction?: any;
  handleMove?: any;
  togglePlay?: any;
};

export const Carousel = ({a11yStatusTag, a11yHeadingTag, children, config = {}, ...props}: CarouselProps) => {
  const discrete = props.totalSlides >= 1;
  const statusId =
    (discrete && 'carousel-status-' + props.id) || props.a11yStatusText || (props.a11yHeadingText && props.id);
  const carouselListStyle = !config.nativeScrolling &&
    (props.offset) && {
      transform: 'translate3d(' + props.offset * -1 + 'px,0,0)',
      transition: props.disableTransition ? 'none' : undefined
    }||undefined;
  const containerClassName = classNames('carousel__container', {
    'carousel__container--controls-disabled': props.bothControlsDisabled
  });
  const handleStartEvent = (e) => {
    if (props.autoplayInterval) {
      console.log('handleStartInteraction');
    }
  };
  const handleEndInteraction = (e) => {
    if (props.autoplayInterval) {
      console.log('handleEndInteraction');
    }
  };
  const handlePrevClick = (e) => {
    if (!props.prevControlDisabled) {
      console.log('handleMove', -1);
    }
  };
  const handleNextClick = (e) => {
    if (!props.nextControlDisabled) {
      console.log('handleMove', 1);
    }
  };
  const handleOnFocus = (e) => {
    if (props.autoplayInterval) {
      console.log('handleStartInteraction');
    } else if ('') {
      if (props.autoplayInterval) {
        console.log('handleEndInteraction');
      }
    }
  };
  return (
    <div
      aria-labelledby={statusId}
      role="group"
      aria-roledescription="carousel"
      {...props}
      className={classNames('carousel__viewport', props.className)}
    >
      <div
        className={containerClassName}
        onFocus={handleStartEvent}
        onTouchStart={handleStartEvent}
        onMouseOver={handleStartEvent}
        onMouseOut={handleEndInteraction}
        onTouchEnd={handleEndInteraction}
      >
        {(props.a11yStatusText || props.a11yHeadingText) && (
          <DefaultElement
            tag={discrete ? a11yStatusTag : a11yHeadingTag}
            id={statusId}
            class="clipped"
            aria-live={discrete ? (props.autoplayInterval && !props.paused ? 'off' : 'polite') : false}
          >
            <span>{discrete ? props.a11yStatusText : props.a11yHeadingText}</span>
          </DefaultElement>
        )}
        <button
          className="carousel__control carousel__control--prev"
          type="button"
          onClick={handlePrevClick}
          aria-describedby={statusId}
          aria-label={props.a11yPreviousText}
          aria-disabled={props.prevControlDisabled && true}
        >
          <Icon name="carousel-prev" />
        </button>
        <div
          className={classNames('carousel__viewport', {
            'carousel__viewport--mask': !props.itemsPerSlide && !props.nextControlDisabled && !props.autoplayInterval
          })}
        >
          <ul
            className={classNames('carousel__list', {'carousel__list--image-treatment': props === 'matte'})}
            style={carouselListStyle}
          >
            {children}
          </ul>
        </div>
        <button
          className="carousel__control carousel__control--next"
          type="button"
          onClick={handleNextClick}
          aria-describedby={statusId}
          aria-label={props.a11yNextText}
          aria-disabled={props.nextControlDisabled && true}
        >
          <Icon name="carousel-next" />
        </button>
        {props.autoplayInterval && !props.bothControlsDisabled && (
          <button
            className="carousel__playback"
            type="button"
            aria-label={props.paused ? props.a11yPlayText : props.a11yPauseText}
            onClick={props.togglePlay}
          >
            <Icon name={props.paused ? 'play' : 'pause'} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
