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
import {ReactNode} from 'react';
import {SectionCTA, SectionOverflow, SectionContainer, SectionInfo} from '../index';

export type SectionTitleProps = Omit<React.HTMLProps<HTMLDivElement>, 'title'> &
  Omit<React.HTMLProps<HTMLElement>, 'size'> & {
    size?: 'small' | 'large' | 'giant';
    title?: ReactNode;
    subtitle?: string;
    href?: string;
    ctaText?: string;
    info?: ReactNode;
    overflow?: ReactNode;
  };
export const SectionTitle = ({title, subtitle, href, ctaText, info, overflow, size, ...props}: SectionTitleProps) => {
  const className = classNames(
    'section-title',
    {
      [`section-title--${size}`]: size
    },
    props.className
  );
  return (
    <div {...props} className={className}>
      {title && <SectionContainer title={title} subtitle={subtitle} href={href} />}
      {href && <SectionCTA href={href} ctaText={ctaText} />}
      {props.children}
      {info && <SectionInfo>{info}</SectionInfo>}
      {overflow && <SectionOverflow>{overflow}</SectionOverflow>}
    </div>
  );
};
export default SectionTitle;
