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

export interface SpinnerProps<T> extends React.HTMLProps<T> {
  isLarge?: boolean;
}
export const Spinner = ({isLarge, ...props}: SpinnerProps<HTMLSpanElement>) => {
  const className = classNames(
    'spinner',
    {
      'spinner--large': isLarge
    },
    props.className
  );
  const HTMLProps = {'aria-label': 'Busy', role: 'img', ...props, className};
  return <span {...HTMLProps} />;
};
export default Spinner;
