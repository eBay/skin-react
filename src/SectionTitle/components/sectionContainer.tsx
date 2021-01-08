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

export interface SectionContainerProps<T> extends Omit<React.HTMLProps<T>, 'title'> {
  title?: ReactNode;
  subtitle?: ReactNode;
  href?: string;
}
export const SectionContainer = ({
  title,
  subtitle,
  href,
  children,
  ...props
}: SectionContainerProps<HTMLDivElement>) => {
  const className = classNames('section-title__title-container', props.className);
  return (
    <div {...props} className={className}>
      <h2 className="section-title__title">{href && <a href={href}>{title}</a>}</h2>
      <span className="section-title__subtitle">{subtitle}</span>
      {children}
    </div>
  );
};
export default SectionContainer;
