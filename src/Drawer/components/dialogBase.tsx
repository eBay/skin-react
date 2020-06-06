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

const DialogBaseBody = ({
  classPrefix,
  windowClass,
  top,
  header,
  buttonPosition = 'left',
  allyCloseText,
  onButtonClick,
  footer,
  ...props
}: any) => (
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
          onClick={onButtonClick}
        >
          <Icon type="close" />
        </button>
        {buttonPosition === 'left' && header}
      </div>
    )}
    <div className={`${classPrefix}__main`} key="body" {...props} />
    {footer && <div className={`${classPrefix}__footer`}>{footer}</div>}
  </div>
);

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
}
export const DialogBase = ({tag = 'div', ...props}: DialogBase<HTMLElement>) => {
  const defaultProps = {
    ['aria-modal']: true,
    role: 'dialog',
    ['hidden:no-update']: !props.open,
    ['aria-live']: !props.isModal && 'polite'
  };
  const className = classNames(props.classPrefix, props.className);
  const children = <DialogBaseBody {...props}>{props.children}</DialogBaseBody>;
  return React.createElement(tag, {...defaultProps, ...props, className, children});
};

export default DialogBase;
