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
import {BasicSectionTitle, BasicSectionTitleProps} from './components/sectionTitle';
import SectionContainer from './components/sectionContainer';
import {SectionCTA} from './components/sectionCTA';
import SectionInfo, {SectionOverflow} from './components/section';
import {ReactNode} from 'react';

export interface SectionTitleProps<T>
  extends Omit<BasicSectionTitleProps<T>, 'title'>,
    Omit<React.HTMLProps<T>, 'title'> {
  title?: ReactNode;
  subtitle?: string;
  href?: string;
  ctaText?: string;
  info?: ReactNode;
  overflow?: ReactNode;
}
export const SectionTitle = ({
  title,
  subtitle,
  href,
  ctaText,
  info,
  overflow,
  ...props
}: SectionTitleProps<HTMLDivElement>) => {
  return (
    <BasicSectionTitle {...props}>
      {title && <SectionContainer title={title} subtitle={subtitle} href={href} />}
      {href && <SectionCTA href={href} ctaText={ctaText} />}
      {props.children}
      {info && <SectionInfo>{info}</SectionInfo>}
      {overflow && <SectionOverflow>{overflow}</SectionOverflow>}
    </BasicSectionTitle>
  );
};
export default SectionTitle;
