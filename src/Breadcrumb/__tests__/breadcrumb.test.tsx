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
import {shallow} from 'enzyme';
import {Breadcrumb, BreadcrumbItem} from '../index';

describe('Breadcrumb', () => {
  it('should render a Breadcrumb with .breadcrumb', () => {
    const component = shallow(<Breadcrumb />);
    expect(component.hasClass('breadcrumbs')).toBe(true);
  });
});
describe('BreadcrumbItem', () => {
  it('should render a BreadcrumbItem with .breadcrumb', () => {
    const component = shallow(<BreadcrumbItem />);
    expect(component.is('li')).toBe(true);
  });
});
