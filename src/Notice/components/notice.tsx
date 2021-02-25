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
import NoticeBase, {NoticeBaseProps} from '../../components/NoticeBase';
import classNames from 'classnames';

export const InlineNotice = ({status = 'attention', ...props}: NoticeBaseProps) => {
  return (
    <NoticeBase
      {...props}
      status={status}
      className={classNames(`inline-notice--${status}`, props.className)}
      prefixClass="inline-notice"
      root="div"
      headerRoot="span"
      mainRoot="span"
    />
  );
};

export const PageNotice = ({status = 'attention', ...props}: NoticeBaseProps) => {
  return (
    <NoticeBase
      {...props}
      className={classNames({[`page-notice--${status}`]: status}, props.className)}
      status={status}
      role="region"
      prefixClass="page-notice"
    />
  );
};

export const SectionNotice = ({a11yRoleDescription = 'Notice', ...props}: NoticeBaseProps) => {
  return (
    <NoticeBase
      {...props}
      role="region"
      prefixClass="section-notice"
      mainRoot="span"
      a11yRoleDescription={a11yRoleDescription}
      className={classNames({[`section-notice--${props.status}`]: props.status}, props.className)}
    />
  );
};
export const WindowNotice = ({status, window, ...props}: NoticeBaseProps & {window?: 'fullscreen'}) => {
  return (
    <NoticeBase
      status={status || 'confirmation'}
      {...props}
      className={classNames({'window-notice--screen': window === 'fullscreen'}, props.className)}
      role="region"
      prefixClass="window-notice"
    />
  );
};
export default InlineNotice;
