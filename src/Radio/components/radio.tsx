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
import {addPrefix} from '../../skin-utils';
import * as Skin from '../../skin';

import Icon from '../../Icon';
const getUncheckedIconType = addPrefix('radio-unchecked');
const getCheckedIconType = addPrefix('radio-checked');

// @ts-ignore
export interface RadioProps<T> extends Skin.Role, React.HTMLProps<T> {
  size?: 'large' | 'small';
}
export function Radio({size, ...props}: RadioProps<HTMLInputElement>) {
  const className = classNames('radio__control', props.className);
  const HTMLProps = {type: 'radio', ...props, className};
  return (
    <span className="radio">
      <input {...HTMLProps} />
      <span className="radio__icon" hidden>
        <Icon className="radio__unchecked" type={getUncheckedIconType(size ? `-${size}` : '', true)} />
        <Icon className="radio__checked" type={getCheckedIconType(size ? `-${size}` : '', true)} />
      </span>
    </span>
  );
}
export default Radio;
