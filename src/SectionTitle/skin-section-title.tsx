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

export interface SectionTitleProps<T> extends BasicSectionTitleProps<T>, React.HTMLProps<T> {
  title?: string;
  subtitle?: string;
}
export const SectionTitle = ({title, subtitle, ...props}: SectionTitleProps<HTMLDivElement>) => {
  return (
    <BasicSectionTitle {...props}>
      <SectionContainer title={title} subtitle={subtitle} />
      {props.children}
    </BasicSectionTitle>
  );
};
export default SectionTitle;
