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

export type SectionTitleProps = Omit<BasicSectionTitleProps, 'title'> &
  Omit<React.HTMLProps<HTMLElement>, 'title'> & {
    title?: ReactNode;
    subtitle?: string;
    href?: string;
    ctaText?: string;
    info?: ReactNode;
    overflow?: ReactNode;
  };
export type Props = React.HTMLProps<HTMLElement> & {};
export const SectionTitle = ({title, subtitle, href, ctaText, info, overflow, ...props}: SectionTitleProps) => {
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
