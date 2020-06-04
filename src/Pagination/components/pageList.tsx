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

export interface PageListProps<T> extends React.HTMLProps<T> {}
export const PageList = ({...props}: PageListProps<HTMLOListElement>) => {
  const className = classNames('pagination__items', props.className);
  const HTMLProps = {...props, className};
  // @ts-ignore
  return <ol {...HTMLProps} />;
};
