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
import {BasicSwitch as Switch} from '..';

describe('Switch', () => {
  it('should render a Switch(span) with .switch and custom classNames', () => {
    const component = shallow(<Switch className="custom-class" />);
    expect(component.is('span')).toBe(true);
    expect(component.hasClass('switch')).toBe(true);
  });
  it('should render a Switch(span) with .switch and custom classNames', () => {
    const component = shallow(<Switch className="custom-class" isSpan />);
    expect(component.is('span')).toBe(true);
    expect(component.hasClass('switch')).toBe(true);
  });
});
