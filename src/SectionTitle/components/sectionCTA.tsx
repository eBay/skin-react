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
import Icon, {IconType} from '../../Icon';

export interface SectionCTAProps<T> extends React.HTMLProps<T> {
  title?: any;
  href?: string;
  iconType?: IconType;
  iconProps?: any;
}
export const SectionCTA = ({title, href, iconType, iconProps = {}, ...props}: SectionCTAProps<HTMLDivElement>) => {
  const className = classNames(
    'section-title__cta',
    {
      'section-title__cta--no-text': !title
    },
    props.className
  );
  return (
    <div {...props} className={className}>
      <a href={href} aria-hidden="true">
        {title && <span className="section-title__cta-text">{title}</span>}
        {iconType && <Icon type={iconType} customClassName="section-title__cta-icon" {...iconProps} />}
      </a>
    </div>
  );
};
export default SectionCTA;
