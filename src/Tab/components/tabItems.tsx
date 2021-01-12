/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */
import * as Skin from '../../skin';
import {addFakePrefix, getFakeTag} from '../../skin-utils';
import * as React from 'react';
import classNames from 'classnames';
export type TabItemsProps = Omit<React.HTMLProps<HTMLDivElement | HTMLUListElement>, 'size'> &
  Skin.Fake &
  Skin.Role & {
    size?: 'large' | 'regular';
  };
export const TabItems = ({size, isFake, ...props}: TabItemsProps) => {
  const wrapperClassName = addFakePrefix(isFake, 'tabs__items');
  const role = props.role || (!isFake ? 'tablist' : '');
  const className = classNames(
    wrapperClassName,
    {
      [`${wrapperClassName}--large`]: size === 'large'
    },
    props.className
  );
  return React.createElement(getFakeTag(isFake, 'ul'), {...props, className, role});
};
export default TabItems;
