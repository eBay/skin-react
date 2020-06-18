/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {useEffect} from 'react';
import classNames from 'classnames';
import {Icon} from '../../Icon';
import * as ReactDOM from 'react-dom';

export interface DialogBase<T> extends React.HTMLProps<T> {
  tag?: 'div' | 'span' ;
  open?: boolean;
  classPrefix: 'drawer';
  windowClass?: string;
  header?: string;
  footer?: string;
  isModal?: boolean;
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
  open = false,
  ...props
}: DialogBase<HTMLElement>) => {
  const className = classNames(classPrefix, props.className);
  const containerProps = {
    ['aria-modal']: true,
    role: 'dialog',
    ['hidden:no-update']: (!open).toString(),
    ['aria-live']: !props.isModal && 'polite',
    ...props,
    className,
    tag
  };
  return (
    <Container {...containerProps}>
      <div key="window" className={classNames(`${classPrefix}__window`, windowClass)}>
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
export const DialogBaseWithState = (props: any) => {
  const portalNode: HTMLDivElement = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {document.body.removeChild(portalNode);}
  }, []);

  const renderOverLay = () => {return <DialogBase {...props} open={props.open}/>};
  return props.open ? ReactDOM.createPortal(renderOverLay(), portalNode) : null;
}
export default DialogBaseWithState;
