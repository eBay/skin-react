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
import {Breadcrumb} from '..';

describe('SkinBreadcrumb', () => {
  it('should render a SkinBreadcrumb(nav) with .breadcrumbs and custom classNames', () => {
    const component = shallow(<Breadcrumb className="custom-class" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
