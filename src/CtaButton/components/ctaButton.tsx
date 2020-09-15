/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Ketul Shah
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';

export interface CtaButtonProps<T> extends Omit<React.HTMLProps<T>, 'size'> {
  size?: 'large';
}
export function CtaButton({size, ...props}: CtaButtonProps<HTMLAnchorElement>) {
  const className = classNames('cta-btn', size === 'large' ? `cta-btn--${size}` : 'default', props.className);
  const HTMLProps = {...props, className};
  return (
    <a {...HTMLProps}>
      <span className="cta-btn__cell">
        <span>{props.children}</span>
        <Icon name="cta" />
      </span>
    </a>
  );
}

export default CtaButton;
