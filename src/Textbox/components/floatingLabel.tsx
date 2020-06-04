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
export const getTag = (is: boolean) => (is ? 'div' : 'span');

export interface FloatingLabelProps<T> extends React.HTMLProps<T> {
  isDiv?: boolean;
  isInline?: boolean;
  isAnimated?: boolean;
}
export const FloatingLabel = ({
  children,
  disabled,
  isAnimated,
  isInline,
  isDiv,
  label,
  ...props
}: FloatingLabelProps<HTMLLabelElement>) => {
  const className = classNames(
    'floating-label__label',
    {
      'floating-label__label--disabled': disabled,
      'floating-label__label--inline': isInline,
      'floating-label__label--animate': isAnimated
    },
    props.className
  );
  const passedChildren = (
    <>
      <label className={className} {...props}>
        {label}
      </label>
      {children}
    </>
  );
  return React.createElement(getTag(isDiv), {className: 'floating-label', children: passedChildren});
};
// @ts-ignore
export default FloatingLabel;
// @ts-ignore
