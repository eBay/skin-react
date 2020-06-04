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

interface TabItemProps<T> extends Skin.Fake, Skin.Selected, React.HTMLProps<T> {
  listClassName?: string;
  forwardedRef?: any;
}

export const TabItem = ({
  listClassName,
  className,
  selected,
  forwardedRef,
  ...props
}: TabItemProps<HTMLDivElement | HTMLAnchorElement>) => {
  const isFake = !!props.href;
  const tag = getFakeTag(isFake, 'li');
  const wrapperClassName = addFakePrefix(isFake, 'tabs__item');
  if (isFake) {
    const fakeClassName = classNames(
      wrapperClassName,
      {
        [`${wrapperClassName}--current`]: selected
      },
      listClassName
    );
    const fakeChildren = React.createElement('a', {
      'aria-current': selected ? 'page' : '',
      ...props,
      className,
      ref: forwardedRef
    });
    return React.createElement(tag, {className: fakeClassName, children: fakeChildren});
  }
  const children = <span>{props.children}</span>;
  const cName = classNames(addFakePrefix(isFake, 'tabs__item'), className);
  return React.createElement(tag, {
    'aria-selected': selected,
    role: 'tab',
    ...props,
    children,
    className: cName,
    ref: forwardedRef
  });
};
export default TabItem;
