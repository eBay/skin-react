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

interface TabItemsProps<T> extends Skin.Fake, Skin.Role, Skin.Large, React.HTMLProps<T> {}
export const TabItems = ({isLarge, isFake, ...props}: TabItemsProps<HTMLDivElement | HTMLUListElement>) => {
  const wrapperClassName = addFakePrefix(isFake, 'tabs__items');
  const role = props.role || (!isFake ? 'tablist' : '');
  const className = classNames(
    wrapperClassName,
    {
      [`${wrapperClassName}--large`]: isLarge
    },
    props.className
  );
  return React.createElement(getFakeTag(isFake, 'ul'), {...props, className, role});
};
export default TabItems;
