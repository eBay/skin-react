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
import {getHTMLProps} from '../../skin-utils';

export interface DetailsProps<T> extends Omit<React.HTMLProps<T>, 'size'> {
  label?: string;
  type?: 'center' | 'rtl' | 'regular';
  size?: 'small' | 'regular';
}
export const Details = ({children, label, type, size, ...props}: DetailsProps<HTMLDetailsElement>) => {
  const className = classNames('details', props.className);
  const summaryClassName = classNames('details__summary', {
    'details__summary--center': type === 'center',
    'details__summary--small': size === 'small'
  });

  const HTMLProps = getHTMLProps({...props, className, dir: type === 'rtl' ? 'rtl' : ''});
  return (
    <details {...HTMLProps}>
      <summary className={summaryClassName}>
        <span className="details__label">{label}</span>
        <span className="details__icon" hidden>
          <Icon type="dropdown" aria-hidden="true" />
        </span>
      </summary>
      <p>{children}</p>
    </details>
  );
};
export default Details;
