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

export const getTag = (isSpan: boolean) => (isSpan ? 'span' : 'input');
export type SwitchProps = React.HTMLProps<HTMLInputElement | HTMLSpanElement> &
  Skin.Role & {
    isSpan?: boolean;
  };
export function BasicSwitch({isSpan, ...props}: SwitchProps) {
  const className = classNames('switch__control', props.className);
  let HTMLProps = {type: 'checkbox', role: 'switch', 'aria-checked': props.checked, ...props, className};
  if (isSpan) {
    HTMLProps = {...HTMLProps, type: undefined, tabIndex: props.disabled ? -1 : 0, 'aria-disabled': props.disabled};
  }
  return (
    <span className="switch">
      {React.createElement(getTag(isSpan), HTMLProps)}
      <span className="switch__button" />
    </span>
  );
}
export default BasicSwitch;
