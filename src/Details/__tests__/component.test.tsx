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
import Details from '../index';

describe('Details', () => {
  it('should render a details tag with .details and custom classNames', () => {
    const component = shallow(<Details className="custom-class" />);
    expect(component.is('details')).toBe(true);
    expect(component.hasClass('details')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
