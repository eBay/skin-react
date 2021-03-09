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

export type SectionTitleProps = Omit<React.HTMLProps<HTMLDivElement>, 'title'|'size'> & {
    size?: 'small' | 'large' | 'giant';
    title?: ReactNode;
    subtitle?: ReactNode;
    href?: string;
    ctaText?: ReactNode;
    info?: ReactNode;
    overflow?: ReactNode;
  };
export const SectionTitle = ({
  title,
  children,
  subtitle,
  href,
  ctaText,
  info,
  overflow,
  size,
  ...props
}: SectionTitleProps) => {
  const className = classNames(
    'section-title',
    {
      [`section-title--${size}`]: size
    },
    props.className
  );
  return (
    <div {...props} className={className}>
      {(title || children) && <SectionContainer title={title || children} subtitle={subtitle} href={href} />}
      {href && <SectionCTA href={href} ctaText={ctaText} />}
      {info && <SectionInfo>{info}</SectionInfo>}
      {overflow && <SectionOverflow>{overflow}</SectionOverflow>}
    </div>
  );
};
export default SectionTitle;
