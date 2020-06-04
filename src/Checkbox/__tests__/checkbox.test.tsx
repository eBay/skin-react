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
import {Checkbox} from '../index';

describe('Checkbox', () => {
  it('should render a Checkbox with .checkbox', () => {
    const component = shallow(<Checkbox />);
    expect(component.hasClass('checkbox')).toBe(true);
  });
});
