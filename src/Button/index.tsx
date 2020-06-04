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
import {withProps} from '../skin-utils';
import {Button, ButtonProps} from './components/button';

export type ButtonSizes = 'truncated' | 'large' | 'large-truncated';
export type ButtonTypes = 'btn' | 'expand-btn' | 'fake-btn' | 'cta-btn' | 'filter-button' | 'filter-link';
export type ButtonColors = 'primary' | 'delete' | 'secondary';

export const BtnCell = withProps({displayName: 'BtnCell', className: 'btn__cell', tag: 'span'})();
export const CTABtnCell = withProps({displayName: 'CTABtnCell', className: 'cta-btn__cell', tag: 'span'})();
export const FilterBtnCell = withProps({displayName: 'FilterBtnCell', className: 'filter-button__cell', tag: 'span'})();
export const ExpandBtnCell = withProps({displayName: 'ExpandBtnCell', className: 'expand-btn__cell', tag: 'span'})();
export const getSize = (type: ButtonTypes, size: ButtonSizes) =>
  type && size && !['filter-button', 'filter-link'].includes(type) ? {[`${type}--${size}`]: true} : {};
export const getColor = (type: ButtonTypes, color: ButtonColors) =>
  type && color && !['filter-button', 'filter-link'].includes(type) ? {[`${type}--${color}`]: true} : {};
export const getTag = (type: ButtonTypes) => (['fake-btn', 'cta-btn', 'filter-link'].includes(type) ? 'a' : 'button');

export const SkinButton = ({onClick, onKeyDown, ...props}: ButtonProps<HTMLButtonElement | HTMLAnchorElement>) => {
  const handleClick = (args) => !props.disabled && onClick && onClick(args);
  const handleKeyDown = (args) => !props.disabled && onKeyDown && onKeyDown(args);
  return <Button {...props} onClick={handleClick} onKeyDown={handleKeyDown} />;
};
export const SkinFilterButton = ({
  onClick,
  onKeyDown,
  type = 'filter-button',
  ...rest
}: ButtonProps<HTMLButtonElement | HTMLAnchorElement>) => {
  const [selected, setSelected] = React.useState(rest.selected);
  const handleClick = (args) => {
    if (!rest.disabled) {
      setSelected(!selected);
      onClick && onClick(args);
    }
  };
  const handleKeyDown = (args) => !rest.disabled && onKeyDown && onKeyDown(args);
  let props = {...rest};
  if (type == 'filter-button') {
    props = {...props, ['aria-pressed']: selected};
  } else if (type == 'filter-link') {
    props = {...props, className: `${props.className || ''} ${selected ? 'filter-link--selected' : ''}`};
  }
  return <Button {...props} type={type} onClick={handleClick} onKeyDown={handleKeyDown} />;
};
export {Button, ButtonProps} from './components/button';
export default Button;
