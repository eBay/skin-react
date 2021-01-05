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

export const getClass = (isLink: boolean, isImg: boolean) => `${isImg ? 'img' : 'icon'}-${isLink ? 'link' : 'btn'}`;
export const getTag = (isLink: boolean) => (isLink ? 'a' : 'button');

export interface ActionableProps<T> extends React.HTMLProps<T> {
  isImg?: boolean;
}
export const Actionable = ({isImg, ...props}: ActionableProps<HTMLButtonElement | HTMLAnchorElement>) => {
  const isLink = !!props.href;
  const defaultProps = isLink ? {} : {type: 'button'};
  const className = classNames(getClass(isLink, isImg), props.className);
  return React.createElement(getTag(isLink), {...defaultProps, ...props, className});
};

export default Actionable;
