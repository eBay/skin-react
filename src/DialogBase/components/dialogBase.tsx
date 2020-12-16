/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya,Steve Doty,Joseph Kim
 *  Use of source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import classNames from 'classnames';
import {Icon} from '../../Icon';
import {ReactNode} from 'react';

export interface DialogBaseProps<T> extends React.HTMLProps<T> {
  baseEl?: 'div' | 'span' | 'aside';
  open?: boolean;
  classPrefix?: 'drawer' | 'toast' | 'dialog';
  windowClass?: string;
  header?: ReactNode;
  footer?: ReactNode;
  isModal?: boolean;
  top?: ReactNode;
  buttonPosition?: 'top' | 'right' | 'bottom' | 'left' | 'hidden';
  ariaLabelledby?: string;
  allyCloseText?: string;
  onCloseBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
  OnBackgroundClick?: React.MouseEventHandler<HTMLElement>;
}
const Container = ({baseEl, ...props}): any => React.createElement(baseEl, props);

export const DialogBase = ({
  baseEl = 'div',
  classPrefix = 'drawer',
  windowClass,
  top,
  header,
  buttonPosition = 'left',
  children,
  ariaLabelledby,
  allyCloseText,
  onCloseBtnClick,
  footer,
  onScroll,
  open = false,
  OnBackgroundClick = () => {},
  ...props
}: DialogBaseProps<HTMLElement>) => {
  const drawerBaseEl = React.useRef(null);
  React.useEffect(() => {
    const handleBackgroundClick = (e) => {
      if (drawerBaseEl && !drawerBaseEl.current.contains(e.target)) {
        OnBackgroundClick(e);
      }
    };
    document.addEventListener('click', handleBackgroundClick, false);
    return () => document.removeEventListener('click', handleBackgroundClick, false);
  }, []);
  const className = classNames(classPrefix, props.className);
  const containerProps = {
    ['aria-labelledby']: ariaLabelledby,
    ['aria-modal']: true,
    role: 'dialog',
    ['hidden:no-update']: (!open).toString(),
    ['aria-live']: !props.isModal && 'polite',
    ...props,
    className,
    baseEl
  };
  const buttonContent = buttonPosition !== 'hidden' && (
    <button
      className={`icon-btn ${classPrefix}__close`}
      type="button"
      aria-label={allyCloseText}
      onClick={onCloseBtnClick}
    >
      <Icon name="close" />
    </button>
  );
  return (
    <Container {...containerProps}>
      <div className={classNames(`${classPrefix}__window`, windowClass)} ref={drawerBaseEl}>
        {top}
        {header && (
          <div className={`${classPrefix}__header`}>
            {buttonPosition === 'right' && header}
            <button
              className={`${classPrefix}__close`}
              type="button"
              aria-label={allyCloseText}
              onClick={onCloseBtnClick}
            >
              <Icon name="close" />
            </button>
            {buttonPosition === 'left' && header}
          </div>
        )}
        <div className={`${classPrefix}__main`} onScroll={onScroll}>
          {children}
        </div>
        {footer && <div className={`${classPrefix}__footer`}>{footer}</div>}
      </div>
    </Container>
  );
};

export default DialogBase;
