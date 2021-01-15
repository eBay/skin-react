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
import {Icon} from '../../../Icon';
import {ReactNode} from 'react';

export interface DialogBaseProps<T> extends React.HTMLProps<T> {
  baseEl?: 'div' | 'span' | 'aside';
  open?: boolean;
  classPrefix?: 'toast' | 'fullscreen-dialog' | 'lightbox-dialog' | 'panel-dialog' | 'drawer-dialog' | 'toast-dialog';
  windowClass?: string;
  windowType?: string;
  header?: ReactNode;
  footer?: ReactNode;
  isModal?: boolean;
  top?: ReactNode;
  buttonPosition?: 'top' | 'right' | 'bottom' | 'left' | 'hidden';
  ariaLabelledby?: string;
  a11yCloseText?: string;
  onCloseBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBackgroundClick?: React.MouseEventHandler<HTMLElement>;
  mainId?: string;
  ignoreEscape?: boolean;
  closeButton?: ReactNode;
}
const Container = ({baseEl, ...props}) => React.createElement(baseEl, props);

export const DialogBase = ({
  baseEl = 'div',
  classPrefix = 'drawer-dialog',
  windowClass,
  windowType,
  top,
  header,
  buttonPosition = 'left',
  children,
  ariaLabelledby,
  a11yCloseText,
  onCloseBtnClick = () => {},
  footer,
  onScroll,
  open = false,
  onBackgroundClick = () => {},
  ignoreEscape,
  closeButton,
  isModal,
  ...props
}: DialogBaseProps<HTMLElement>) => {
  const drawerBaseEl = React.useRef(null);
  React.useEffect(() => {
    const handleBackgroundClick = (e) => {
      if (drawerBaseEl && !drawerBaseEl.current.contains(e.target)) {
        onBackgroundClick(e);
      }
    };
    document.addEventListener('click', handleBackgroundClick, false);
    return () => document.removeEventListener('click', handleBackgroundClick, false);
  }, []);
  const containerProps = {
    ...props,
    'aria-labelledby': ariaLabelledby,
    'aria-modal': true,
    role: props.role || 'dialog',
    className: classNames(classPrefix, props.className),
    'hidden:no-update': (!open).toString(),
    'aria-live': !isModal && 'polite',
    baseEl,
    onKeyDown: (event) => {
      if (!ignoreEscape && event.key === 'Escape') {
        event.stopPropagation();
        onCloseBtnClick(event);
      }
    }
  };
  const buttonContent = buttonPosition !== 'hidden' && (
    <button
      className={`icon-btn ${classPrefix}__close`}
      type="button"
      aria-label={a11yCloseText}
      onClick={onCloseBtnClick}
    >
      {closeButton || <Icon name="close" />}
    </button>
  );
  const windowClassName = windowType ? `${classPrefix}__${windowType}-window` : `${classPrefix}__window`;
  return (
    <Container {...containerProps}>
      <div className={classNames(windowClassName, windowClass)} ref={drawerBaseEl}>
        {top}
        {header && (
          <div className={`${classPrefix}__header`}>
            {buttonPosition === 'right' && header}
            {buttonPosition !== 'bottom' && buttonContent}
            {(buttonPosition === 'left' || buttonPosition === 'hidden') && header}
          </div>
        )}
        <div className={`${classPrefix}__main`} onScroll={onScroll}>
          {children}
        </div>
        {footer || buttonPosition === 'bottom' ? (
          <div className={`${classPrefix}__footer`}>
            {footer}
            {buttonPosition === 'bottom' && buttonContent}
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default DialogBase;
