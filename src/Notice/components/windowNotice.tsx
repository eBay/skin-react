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

export interface WindowNoticeProps<T> extends Skin.Role, React.HTMLProps<T> {
  a11yText?: string;
  content?: any;
  iconName?: IconName;
  iconProps?: any;
  isFill?: boolean;
}
export const WindowNotice = ({
  children,
  isFill,
  iconName,
  iconProps = {},
  a11yText,
  content,
  id,
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
    <section aria-labelledby={id} {...HTMLProps}>
      <h2 id={id}>
        {iconName && <Icon name={iconName} {...iconProps} />}
        {a11yText && <span className="window-notice__title">{a11yText}</span>}
      </h2>
      {content && <p className="window-notice__content">{content}</p>}
      {children}
    </section>
  );
};
export default WindowNotice;
