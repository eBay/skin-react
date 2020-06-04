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
import Icon from '../index';

describe('Icon', () => {
  it('should render a Icon with .icon', () => {
    const component = shallow(<Icon type="add" a11yText="a11yText" />);
    expect(component.hasClass('icon')).toBe(true);
  });

  it('should render a Icon(span) with .icon--arrow-left and custom classNames', () => {
    const component = shallow(<Icon type="arrow-left" className="custom-class" />);
    expect(component.is('svg')).toBe(true);
    expect(component.hasClass('icon--arrow-left')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a Icon(span) with customClassNames', () => {
    const component = shallow(<Icon type="arrow-left" customClassName="custom-class-name" className="custom-class" />);
    expect(component.is('svg')).toBe(true);
    expect(component.hasClass('custom-class-name')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(false);
  });
});
