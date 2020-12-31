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
import Badge from '../../Badge';

export interface ButtonProps<T> extends Omit<React.HTMLProps<T>, 'size'> {
  priority?: 'primary' | 'secondary' | 'delete' | string; //	String	No	No	"primary" / "secondary" (default) / "delete" / "none"
  size?: 'large' | string; //	String	No	No	"large" (default:"none")
  iconOnly?: boolean; // Boolean	No	No	used to adjust padding for "expand" variant without text
  href?: string; //	String	No	No	for link that looks like a button
  fluid?: boolean; // Boolean	No	No
  disabled?: boolean; // Boolean	Yes	No
  partiallyDisabled?: boolean; // Boolean	No	No
  transparent?: boolean; // Boolean	Yes	No	optional, to add Skin classes "transparent"
  variant?: 'expand' | 'fake-link' | 'icon' | string; //	String	No	No	optional, to alter Skin classes:"expand" / "fake-link" / "icon" (for icon button)
  fixedHeight?: boolean; // Boolean	No	No	fixes the height based on size
  truncate?: boolean; // Boolean	No	No	will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows
  badgeNumber?: number; //Number	No	No	used as the number to be placed in the badge
  badgeAriaLabel?: string; //	String	No	Yes (only if badge number is provided)	passed as the aria-label directly to the badge
}
export function Button({
  partiallyDisabled,
  priority,
  size,
  iconOnly,
  fluid,
  variant,
  fixedHeight,
  truncate,
  transparent,
  badgeNumber,
  badgeAriaLabel,
  ...props
}: ButtonProps<HTMLButtonElement | HTMLAnchorElement>) {
  const priorityType = priority || 'secondary';
  const variantType = !variant && props.href ? 'fake' : variant;
  const isIconVariant = variantType === 'icon';
  const isExpandVariant = variantType === 'expand';
  const isBadged = Boolean(badgeNumber && isIconVariant);
  const isIconOnly = isIconVariant || isBadged || (isExpandVariant && iconOnly);
  const baseClass = variantType ? (variantType === 'fake-link' ? variantType : variantType + '-btn') : 'btn';
  const sizeClass = (size && baseClass + '--' + size) || '';
  const truncateClass = truncate && (sizeClass ? sizeClass + '-truncated' : baseClass + '--truncated');
  const transparentClass = transparent ? baseClass + '--transparent' : '';
  const fixedHeightClass = fixedHeight && (sizeClass ? sizeClass + '-fixed-height' : baseClass + '--fixed-height');
  const tag = props.href ? 'a' : 'button';
  const hasAriaLabel = Boolean(props['aria-label']);
  const Btn = (btnProps) => React.createElement(tag, btnProps);
  console.log(props.className, baseClass, truncateClass, fixedHeightClass, transparentClass, {
    [`${baseClass}--icon-only`]: isIconOnly,
    [`${baseClass}--badged`]: isBadged,
    [`${baseClass}--fluid`]: fluid,
    [sizeClass]: sizeClass && !truncateClass && !fixedHeightClass,
    [`${baseClass}--${priorityType}`]:
      priorityType === 'secondary' || priorityType === 'primary' || priorityType === 'delete'
  });
  return (
    <Btn
      {...props}
      className={classNames(props.className, baseClass, truncateClass, fixedHeightClass, transparentClass, {
        [`${baseClass}--icon-only`]: isIconOnly,
        [`${baseClass}--badged`]: isBadged,
        [`${baseClass}--fluid`]: fluid,
        [sizeClass]: !truncateClass && !fixedHeightClass,
        [`${baseClass}--${priorityType}`]:
          priorityType === 'secondary' || priorityType === 'primary' || priorityType === 'delete'
      })}
      data-ebayui={true}
      type={(tag === 'button' && props.type) || 'button'}
      ariaDisabled={partiallyDisabled && 'true'}
    >
      {hasAriaLabel && !isBadged && <span aria-hidden="true">{props.children}</span>}
      {isBadged && (
        <Badge
          number={badgeNumber}
          type="icon"
          aria-label={hasAriaLabel && badgeAriaLabel}
          aria-hidden={hasAriaLabel}
        />
      )}
    </Btn>
  );
}
