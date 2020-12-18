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
import * as Skin from '../../skin';
import Icon, {IconName} from '../../Icon';
import {ReactNode} from 'react';

export interface WindowNoticeProps<T> extends Skin.Role, React.HTMLProps<T> {
  title?: string;
  a11yText?: string;
  footer?: ReactNode;
  iconName?: IconName;
  iconProps?: any;
  isFill?: boolean;
}
export const WindowNotice = ({
  title,
  children,
  isFill,
  iconName,
  iconProps = {},
  a11yText,
  footer,
  role = 'region',
  ...props
}: WindowNoticeProps<HTMLElement>) => {
  const className = classNames(
    'window-notice',
    {
      'window-notice--fill': isFill
    },
    props.className
  );
  const HTMLProps = {...props, className, role};
  return (
    <section aria-label={a11yText} {...HTMLProps}>
      <div className="window-notice__header">{iconName && <Icon name={iconName} {...iconProps} />}</div>
      {(children || title) && (
        <div className="window-notice__main">
          {' '}
          {title && <h2 className="window-notice__title">{title}</h2>}
          {children}
        </div>
      )}
      {footer && <div className="window-notice__footer"> {footer} </div>}
    </section>
  );
};
export default WindowNotice;
