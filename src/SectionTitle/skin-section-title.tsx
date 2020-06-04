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
import SectionTitle, {SectionTitleProps} from './components/sectionTitle';
import SectionContainer from './components/sectionContainer';
import SectionCTA from './components/sectionCTA';
import SectionInfo, {SectionOverflow} from './components/section';

export interface SkinSectionTitleProps<T> extends SectionTitleProps<T>, React.HTMLProps<T> {
  title?: string;
  subtitle?: string;
}
export const SkinSectionTitle = ({title, subtitle, ...props}: SkinSectionTitleProps<HTMLDivElement>) => {
  return (
    <SectionTitle {...props}>
      <SectionContainer title={title} subtitle={subtitle} />
      {props.children}
    </SectionTitle>
  );
};
export default SkinSectionTitle;
export const SkinSectionOverflow = SectionOverflow;
export const SkinSectionInfo = SectionInfo;
export const SkinSectionCTA = SectionCTA;
