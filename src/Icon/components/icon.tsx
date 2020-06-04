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
import {IconType} from '../index';

export interface IconProps<T> extends React.HTMLProps<T> {
  type: IconType | string;
  isButton?: boolean;
  customClassName?: string;
  focusable?: string | boolean;
  a11yText?: string;
}

export const Icon = ({a11yText, customClassName, type, isButton, ...props}: IconProps<SVGElement>) => {
  const iconClass = 'icon--' + type;
  const className = customClassName
    ? customClassName
    : classNames(
        'icon',
        {
          btn__icon: isButton
        },
        iconClass,
        props.className
      );
  const id = a11yText && `${iconClass}-${props.id || '1'}`;
  const a11yProps = id
    ? {
        'aria-labelledby': id,
        role: 'img'
      }
    : {
        'aria-hidden': true
      };
  const iconProps = {...props, className, ...a11yProps};
  return (
    // @ts-ignore
    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" {...iconProps}>
      {id && <title id={id}>{a11yText}</title>}
      <use xlinkHref={'#icon-' + type} />
    </svg>
  );
};
export default Icon;
