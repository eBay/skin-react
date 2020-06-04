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
import {Breadcrumb} from './index';
export const SkinBreadcrumb = ({children, onClick, ...props}: any) => {
  const length = children && children.length;
  const modifiedChildren =
    length > 0
      ? React.Children.map(children, (item: any, index) => {
          const isLast = index === length - 1;
          const current = !item.props.href && isLast;
          const passedProps = current ? {['aria-current']: 'location'} : {};
          return React.cloneElement(item, {
            ...item.props,
            ...passedProps,
            isLast,
            onClick
          });
        })
      : children;
  return <Breadcrumb {...props} children={modifiedChildren} />;
};
export default SkinBreadcrumb;
