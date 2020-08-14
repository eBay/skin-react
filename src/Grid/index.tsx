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
import {withProps, isBetween} from '../skin-utils';

export const Grid = withProps({displayName: 'Grid', className: 'grid'})();

export default Grid;

export interface GridGroupProps<T> extends React.HTMLProps<T> {
  isMultiline?: boolean;
}
export function GridGroup({isMultiline, ...props}: GridGroupProps<HTMLDivElement>) {
  const className = classNames(
    'grid__group',
    {
      'grid__group--wrap': isMultiline
    },
    props.className
  );
  const gridGroupProps = {...props, className};
  return <div {...gridGroupProps} />;
}
export type ColumnNum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
type Platform = 'sm' | 'md' | 'lg' | '';
type ColumnStr =
  | 'one-half'
  | 'one-third'
  | 'two-third'
  | 'one-fourth'
  | 'three-fourth'
  | 'one-fifth'
  | 'two-fifth'
  | 'three-fifth'
  | 'four-fifth';
type CellSize = ColumnNum | ColumnStr;
const isBetweenColumnNum = isBetween(0, 16);
const getCellClassName = (size: CellSize, platform: Platform = '') => {
  const prefix = 'grid__cell--';
  if (typeof size === 'string') {
    return `${prefix}${size}`;
  }
  if (isBetweenColumnNum(size)) {
    if (0 === size) {
      return `${prefix}--${platform ? platform + '-' : ''}hidden`;
    }
    return `${prefix}${size}of16${platform ? '-' + platform : ''}`;
  }
};
export interface GridCellProps<T> extends Omit<React.HTMLProps<T>, 'size'> {
  size?: CellSize | object;
}
const getSize = (size: CellSize | object) => {
  if (typeof size === 'object') {
    return Object.keys(size).reduce((acc, curr) => {
      if (['sm', 'md', 'lg'].includes(curr)) {
        const platformClassName = getCellClassName(size[curr], curr as Platform);
        if (platformClassName) {
          acc[platformClassName] = true;
        }
      }
      return acc;
    }, {});
  }
  const cellClassName = getCellClassName(size);
  return cellClassName ? {[cellClassName]: true} : {};
};
export function GridCell({size, ...props}: GridCellProps<HTMLDivElement>) {
  const className = classNames('grid__cell', getSize(size), props.className);
  const gridCellProps = {...props, className};
  return <div {...gridCellProps} />;
}
