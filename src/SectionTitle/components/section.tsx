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
type DivProps = React.HTMLProps<HTMLDivElement>;
export const SectionInfo = (props: DivProps) => {
  const className = classNames('section-title__info', props.className);
  return <div {...props} className={className} />;
};
export const SectionOverflow = (props: DivProps) => {
  const className = classNames('section-title__overflow', props.className);
  return <div {...props} className={className} />;
};
export default SectionInfo;
