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
import {FloatingLabel} from '../index';

describe('FloatingLabel', () => {
  it('should render a FloatingLabel(span) with .textbox and custom classNames', () => {
    const component = shallow(<FloatingLabel className="custom-class" />);
    expect(component.is('span')).toBe(true);
    expect(component.hasClass('floating-label')).toBe(true);
  });
});
