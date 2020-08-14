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
  ButtonColors,
  ButtonSizes,
  ButtonTypes,
  ExpandBtnCell,
  FilterBtnCell,
  CTABtnCell,
  getSize,
  getColor,
  getTag
} from '..';
import Icon from '../../Icon';

// @ts-ignore
export interface ButtonProps<T> extends React.HTMLProps<T> {
  size?: ButtonSizes;
  type?: ButtonTypes;
  variant?: ButtonColors;
  isBorderless?: boolean;
}
export function Button({
  variant,
  size,
  type = 'btn',
  isBorderless,
  ...props
}: ButtonProps<HTMLButtonElement | HTMLAnchorElement>) {
  const className = classNames(
    type,
    {
      'expand-btn--borderless': isBorderless && 'expand-btn' === type
    },
    getSize(type, size),
    getColor(type, variant),
    props.className
  );
  let children = props.children;
  if ('expand-btn' === type) {
    children = <ExpandBtnCell>{children}</ExpandBtnCell>;
  } else if ('filter-button' === type) {
    children = <FilterBtnCell>{children}</FilterBtnCell>;
  } else if ('cta-btn' === type) {
    children = (
      <CTABtnCell>
        {children} <Icon type="cta" />
      </CTABtnCell>
    );
  }
  return React.createElement(getTag(type), {
    href: getTag(type) == 'a' ? '#' : '',
    ...props,
    className,
    children
  });
}
