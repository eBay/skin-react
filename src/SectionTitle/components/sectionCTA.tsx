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
import Icon, {IconName} from '../../Icon';
import {ReactNode} from 'react';
export type SectionCTAProps = React.HTMLProps<HTMLDivElement> & {
  ctaText?: ReactNode;
  href?: string;
  iconName?: IconName;
  iconProps?: object;
};
export const SectionCTA = ({
  ctaText,
  href,
  iconName = 'arrow-right-bold',
  iconProps = {},
  ...props
}: SectionCTAProps) => {
  const className = classNames(
    'section-title__cta',
    {
      'section-title__cta--no-text': !ctaText
    },
    props.className
  );
  return (
    <div {...props} className={className}>
      <a href={href} tabIndex={-1} aria-hidden="true">
        {ctaText && <span className="section-title__cta-text">{ctaText}</span>}
        {iconName && (
          <Icon
            name={iconName}
            customClassName="section-title__cta-icon"
            height="24"
            width="24"
            aria-hidden="true"
            {...iconProps}
          />
        )}
      </a>
    </div>
  );
};
export default SectionCTA;
