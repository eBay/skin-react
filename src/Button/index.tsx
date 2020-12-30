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
import {KeyboardEventHandler} from 'react';
export interface V1ButtonProps<T> extends Omit<React.HTMLProps<T>, 'size'> {
  size?: ButtonSizes;
  type?: ButtonTypes;
  variant?: ButtonColors;
  isBorderless?: boolean;
}
export type ButtonSizes = 'truncated' | 'large' | 'large-truncated';
export type ButtonTypes = 'btn' | 'expand-btn' | 'fake-btn' | 'cta-btn' | 'filter-button' | 'filter-link';
export type ButtonColors = 'primary' | 'delete' | 'secondary';

export const getSize = (type: ButtonTypes, size: ButtonSizes) =>
  type && size && !['filter-button', 'filter-link'].includes(type) ? {[`${type}--${size}`]: true} : {};
export const getColor = (type: ButtonTypes, color: ButtonColors) =>
  type && color && !['filter-button', 'filter-link'].includes(type) ? {[`${type}--${color}`]: true} : {};
export const getTag = (type: ButtonTypes) => (['fake-btn', 'cta-btn', 'filter-link'].includes(type) ? 'a' : 'button');

export const BtnCell = withProps({displayName: 'BtnCell', className: 'btn__cell', tag: 'span'})();
export const CTABtnCell = withProps({displayName: 'CTABtnCell', className: 'cta-btn__cell', tag: 'span'})();
export const FilterBtnCell = withProps({displayName: 'FilterBtnCell', className: 'filter-button__cell', tag: 'span'})();
export const ExpandBtnCell = withProps({displayName: 'ExpandBtnCell', className: 'expand-btn__cell', tag: 'span'})();

export const SkinButton = ({
  onClick = () => {},
  onEscape = () => {},
  ...props
}: ButtonProps<HTMLButtonElement | HTMLAnchorElement> & {
  onEscape?: KeyboardEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}) => {
  const handleClick = (event) => !props.disabled && onClick(event);
  const handleKeyDown = (event) => {
    !props.disabled && event.key === 'Escape' && onEscape(event);
  };
  return <Button {...props} onClick={handleClick} onKeyDown={handleKeyDown} />;
};
export {Button, ButtonProps} from './components/button';
export default Button;
