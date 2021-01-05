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
import {Radio} from '../components/radio';

describe('Radio', () => {
  it('should render a Radio(span) with .radio and custom classNames', () => {
    const component = shallow(<Radio className="custom-class" />);
    expect(component.is('span')).toBe(true);
    expect(component.hasClass('radio')).toBe(true);
  });
  it('should render a Radio(span) with .radio and custom classNames', () => {
    const component = shallow(<Radio className="custom-class" size="large" />);
    expect(component.is('span')).toBe(true);
    expect(component.hasClass('radio')).toBe(true);
  });
});
