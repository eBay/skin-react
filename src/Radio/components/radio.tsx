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
const getUncheckedIconName = addPrefix('radio-unchecked');
const getCheckedIconName = addPrefix('radio-checked');

export type RadioProps = Skin.Role &
  Omit<React.HTMLProps<HTMLInputElement>, 'size'> & {
    size?: 'large' | 'small';
  };

export function Radio({size, ...props}: RadioProps) {
  const className = classNames('radio__control', props.className);
  const HTMLProps = {type: 'radio', ...props, className};
  return (
    <span className="radio">
      <input {...HTMLProps} />
      <span className="radio__icon" hidden>
        <Icon className="radio__unchecked" name={getUncheckedIconName(size ? `-${size}` : '', true)} />
        <Icon className="radio__checked" name={getCheckedIconName(size ? `-${size}` : '', true)} />
      </span>
    </span>
  );
}
export default Radio;
