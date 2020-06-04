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
import {Badge, BadgeProps} from './index';
export const SkinBadge = ({children, ...props}: BadgeProps<HTMLSpanElement>) => {
  let modifiedChildren = children;
  if (typeof children === 'number') {
    const number = Math.round(children);
    modifiedChildren = number > 0 ? (number > 99 ? '99+' : number) : number;
  }
  return <Badge {...props} children={modifiedChildren} />;
};
export default SkinBadge;
