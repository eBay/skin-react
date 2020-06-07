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
import {Icon} from '../../Icon';

export interface DialogBase<T> extends React.HTMLProps<T> {
  tag?: any;
  open?: any;
  type?: any;
  classPrefix?: any;
  focus?: any;
  a11yCloseText?: any;
  windowClass?: any;
  baseEl?: any;
  header?: any;
  footer?: any;
  transitionEl?: any;
  isModal?: any;
  top?: any;
  buttonPosition?: any;
  allyCloseText?: string;
  onCloseBtnClick?: any;
}
const Container = ({tag, ...props}): any => React.createElement(tag, props);

export const DialogBase = ({
  tag = 'div',
  classPrefix,
  windowClass,
  top,
  header,
  buttonPosition = 'left',
  children,
  allyCloseText,
  onCloseBtnClick,
  footer,
  onScroll,
  ...props
}: DialogBase<HTMLElement>) => {
  const className = classNames(classPrefix, props.className);
  const containerProps = {
    ['aria-modal']: true,
    role: 'dialog',
    ['hidden:no-update']: (!props.open).toString(),
    ['aria-live']: !props.isModal && 'polite',
    ...props,
    className,
    tag
  };
  return (
    <Container {...containerProps}>
      <div key="window" className={`${classPrefix}__window ${windowClass || ''}`}>
        {top}
        {header && (
          <div className={`${classPrefix}__header`}>
            {buttonPosition === 'right' && header}
            <button
              key="close"
              className={`${classPrefix}__close`}
              type="button"
              aria-label={allyCloseText}
              onClick={onCloseBtnClick}
            >
              <Icon type="close" />
            </button>
            {buttonPosition === 'left' && header}
          </div>
        )}
        <div key="body" className={`${classPrefix}__main`} onScroll={onScroll}>
          {children}
        </div>
        {footer && <div className={`${classPrefix}__footer`}>{footer}</div>}
      </div>
    </Container>
  );
};

export const DialogBaseWithState = ({onCollapsed, onExpanded, onCloseBtnClick, ...props}: any) => {
  let startEl = React.createRef();
  const [open, setOpen] = React.useState(props.open || false);
  const handleStartClick = ({target}) => (startEl = target);
  const handleCloseBtnClick = (e) => {
    setOpen(false);
    onCloseBtnClick && onCloseBtnClick(e);
  };

  return <DialogBase {...props} onMouseDown={handleStartClick} onCloseBtnClick={handleCloseBtnClick} open={open} />;
};

export default DialogBaseWithState;
