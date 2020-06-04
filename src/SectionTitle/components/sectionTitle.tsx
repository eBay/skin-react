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

export const addClassNamePrefix = (prefix: string) => (className?: string) => `${prefix}${className || ''}`;
const getClassName = addClassNamePrefix('section-title');
export interface SectionTitleProps<T> extends React.HTMLProps<T> {
  sectionSize?: 'small' | 'large' | 'giant';
}

export const SectionTitle = ({sectionSize, ...props}: SectionTitleProps<HTMLDivElement>) => {
  const className = classNames(
    getClassName(),
    {
      [getClassName(sectionSize ? `-${sectionSize}` : '')]: sectionSize
    },
    props.className
  );
  return <div {...props} className={className} />;
};
export default SectionTitle;
