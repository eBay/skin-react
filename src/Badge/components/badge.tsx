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
import {
  combineModifiers,
  getBgColorModifiers,
  getColorModifiers,
  getHTMLProps,
  removeBgColorProps,
  removeColorProps
} from '../../skin-utils';
import * as Skin from '../../skin';

export type BadgeProps = React.HTMLProps<HTMLSpanElement> & {
  type?: 'menu' | 'icon';
  number: string | number;
};
export const Badge = ({number, type, ...props}: BadgeProps) => {
  const parsedNumber = Math.round(parseInt(number as string, 10));
  if (parsedNumber > 0) {
    const children = parsedNumber > 99 ? '99+' : parsedNumber;
    const className = classNames(
      'badge',
      combineModifiers(props, getColorModifiers, getBgColorModifiers),
      props.className
    );
    const role = type !== 'menu' && type !== 'icon' && 'img';
    const HTMLProps = getHTMLProps({...props, className, children, role}, removeColorProps, removeBgColorProps);
    return <span {...HTMLProps} />;
  }
  return null;
};

export default Badge;
