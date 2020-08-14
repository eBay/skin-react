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
import Actionable from '..';

describe('actionable', () => {
  it('should render a Actionable(a) with .actionable and custom classNames', () => {
    const component = shallow(<Actionable className="custom-class" />);
    expect(component.is('button')).toBe(true);
    expect(component.hasClass('icon-btn')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a Actionable(a) with .actionable and custom classNames', () => {
    const component = shallow(<Actionable className="custom-class" isImg />);
    expect(component.is('button')).toBe(true);
    expect(component.hasClass('img-btn')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a Actionable(a) with .actionable and custom classNames', () => {
    const component = shallow(<Actionable className="custom-class" href="#" />);
    expect(component.is('a')).toBe(true);
    expect(component.hasClass('icon-link')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
