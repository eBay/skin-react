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
import {BasicWindowNotice as WindowNotice} from '../components/windowNotice';

describe('notice', () => {
  it('should render a WindowNotice(section) with .notice and custom classNames', () => {
    const component = shallow(<WindowNotice className="custom-class" />);
    expect(component.is('section')).toBe(true);
    expect(component.hasClass('window-notice')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a WindowNotice(section) with params', () => {
    const component = shallow(
      <WindowNotice className="custom-class" a11yText="a11yText" content="Hello" iconName="menu" isFill />
    );
    expect(component.is('section')).toBe(true);
    expect(component.hasClass('window-notice')).toBe(true);
    expect(component.hasClass('window-notice--fill')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
