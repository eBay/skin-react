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
import * as Skin from '../../skin';
const getTag = (isFluid: boolean) => (isFluid ? 'div' : 'span');

export interface TextboxWrapperProps<T> extends Skin.Fluid, React.HTMLProps<T> {
  isPostfixIcon?: boolean;
}
export const TextboxWrapper = ({
  isPostfixIcon,
  isFluid,
  ...props
}: TextboxWrapperProps<HTMLDivElement | HTMLSpanElement>) => {
  const cName = classNames(
    'textbox',
    {
      'textbox--icon-end': isPostfixIcon
    },
    props.className
  );
  return React.createElement(getTag(isFluid), {...props, className: cName});
};
export default TextboxWrapper;
