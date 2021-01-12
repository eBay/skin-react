/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import {addFakePrefix} from '../../skin-utils';
import * as Skin from '../../skin';
import * as React from 'react';
import classNames from 'classnames';
export type TabContentProps = React.HTMLProps<HTMLDivElement> & Skin.Fake & {};

export const TabContent = ({isFake, ...props}: TabContentProps) => {
  const className = classNames(addFakePrefix(isFake, 'tabs__content'), props.className);
  const tabProps = {...props, className};
  return <div {...tabProps} />;
};
export default TabContent;
