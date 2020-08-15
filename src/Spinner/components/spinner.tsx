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

export interface SpinnerProps<T> extends Omit<React.HTMLProps<T>, 'size'> {
  size?: 'large' | 'regular';
}
export const Spinner = ({size, ...props}: SpinnerProps<HTMLSpanElement>) => {
  const className = classNames(
    'spinner',
    {
      'spinner--large': size === 'large'
    },
    props.className
  );
  const HTMLProps = {'aria-label': 'Busy', role: 'img', ...props, className};
  return <span {...HTMLProps} />;
};
export default Spinner;
