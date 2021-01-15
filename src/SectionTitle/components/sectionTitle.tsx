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
export type BasicSectionTitleProps = React.HTMLProps<HTMLDivElement> & {
  sectionSize?: 'small' | 'large' | 'giant';
};

export const BasicSectionTitle = ({sectionSize, ...props}: BasicSectionTitleProps) => {
  const className = classNames(
    'section-title',
    {
      [`section-title--${sectionSize}`]: sectionSize
    },
    props.className
  );
  return <div {...props} className={className} />;
};
export default BasicSectionTitle;
