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
import {Icon} from '../../Icon';

const getBreadcrumbItemTag = (isLink: boolean) => (isLink ? 'a' : 'button');
export interface BreadcrumbItemProps<T> extends React.HTMLProps<T> {
  isLast?: boolean;
}
export const BreadcrumbItem = ({isLast, ...props}: BreadcrumbItemProps<HTMLButtonElement | HTMLAnchorElement>) => {
  const passedProps = isLast && props.href ? {['aria-current']: 'location'} : {};
  return (
    <li>
      {React.createElement(getBreadcrumbItemTag(!!props.href), {...passedProps, ...props})}
      {!isLast && <Icon className="icon--breadcrumb" type="breadcrumb" />}
    </li>
  );
};
export default BreadcrumbItem;
