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
import {withProps} from '../skin-utils';
import Tab from './components/tab';
export const validDisplayNames = ['TabItems', 'TabItem', 'TabContent', 'TabCell'];
export {default as Tab} from './components/tab';
export {default as TabContent} from './components/tabContent';
export {default as TabItem} from './components/tabItem';
export {default as TabItems} from './components/tabItems';
export const TabPanel = withProps({displayName: 'TabPanel', className: 'tabs__panel', role: 'tab'})();
export const TabCell = withProps({displayName: 'TabCell', className: 'tabs__cell'})();
export default Tab;
