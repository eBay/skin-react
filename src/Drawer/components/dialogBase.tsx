/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya,Steve Doty
 *  Use of source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {FunctionComponent, useEffect} from 'react';
import classNames from 'classnames';
import {Icon} from '../../Icon';
import * as ReactDOM from 'react-dom';

export interface DialogBaseProps<T> extends React.HTMLProps<T> {
  tag?: any; //'div' | 'span'
  open?: boolean;
  classPrefix?: any; //'drawer' | 'toast' | 'dialog'
  windowClass?: string;
  header?: any;
  footer?: string;
  isModal?: boolean;
  top?: any;
  buttonPosition?: any; //'top' | 'right' | 'bottom' | 'left'
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
}: DialogBaseProps<HTMLElement>) => {
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
export class DialogBaseWithState extends React.Component<DialogBaseProps<HTMLElement>> {
  private portalNode: HTMLDivElement;
  constructor(props) {
    super(props);
    this.portalNode = document.createElement('div');
  }
  componentDidMount() {
    document.body.appendChild(this.portalNode);
  }
  componentWillUnmount() {
    document.body.removeChild(this.portalNode);
  }

  renderOverLay() {
    return <DialogBase {...this.props} />;
  }
  render() {
    return this.props.open ? ReactDOM.createPortal(this.renderOverLay(), this.portalNode) : null;
  }
};

export default DialogBaseWithState;
