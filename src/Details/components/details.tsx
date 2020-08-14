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

export interface DetailsProps<T> extends React.HTMLProps<T> {
  label?: string;
  isCentered?: boolean;
  isSmall?: boolean;
  isRtl?: boolean;
}
export const Details = ({children, isCentered, isSmall, isRtl, label, ...props}: DetailsProps<HTMLDetailsElement>) => {
  const className = classNames('details', props.className);
  const summaryClassName = classNames('details__summary', {
    'details__summary--center': isCentered,
    'details__summary--small': isSmall
  });

  const HTMLProps = getHTMLProps({...props, className, dir: isRtl ? 'rtl' : ''});
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
