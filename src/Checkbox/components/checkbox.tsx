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
import {Icon} from '../../Icon';
import {addPostfix} from '../../skin-utils';
import * as Skin from '../../skin';

const addLargePostFix = addPostfix('-large');
export interface CheckboxProps<T> extends Skin.Large, React.HTMLProps<T> {
  iconStyle?: React.CSSProperties;
}
export function Checkbox({isLarge, iconStyle, children, ...props}: CheckboxProps<HTMLInputElement>) {
  const className = classNames('checkbox__control', props.className);
  const HTMLProps = {type: 'checkbox', ...props, className};
  const iconSize = isLarge ? '24' : '18';
  return (
    <span className="checkbox">
      <input {...HTMLProps} />
      <span className="checkbox__icon" hidden style={iconStyle}>
        <Icon
          className="checkbox__unchecked"
          type={addLargePostFix('checkbox-unchecked', isLarge)}
          height={iconSize}
          width={iconSize}
        />
        <Icon
          className="checkbox__checked"
          type={addLargePostFix('checkbox-checked', isLarge)}
          height={iconSize}
          width={iconSize}
        />
      </span>
      {children}
    </span>
  );
}
export default Checkbox;
