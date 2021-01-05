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
import {mount} from 'enzyme';
import {Badge} from '..';

describe('<Badge>', () => {
  it('should not exist', () => {
    const component = mount(<Badge number={0} />);
    expect(component.html()).toBe(null);
  });
  it('renders defaults', () => {
    const component = mount(<Badge number={5} />);
    expect(component.text()).toBe('5');
  });

  it('renders number with rounded-up value', () => {
    const component = mount(<Badge number={5.6} />);
    expect(component.text()).toBe('5');
  });

  it('does not render with negative value', () => {
    const component = mount(<Badge number={-5} />);
    expect(component.html()).toBe(null);
  });

  describe('given number is a string', () => {
    it('renders number with coerced string', () => {
      const component = mount(<Badge number="5" />);
      expect(component.text()).toBe('5');
    });

    it('renders number with rounded-up string', () => {
      const component = mount(<Badge number="5.4" />);
      expect(component.text()).toBe('5');
    });

    it('does not renders with an invalid string', () => {
      const component = mount(<Badge number="five" />);
      expect(component.html()).toBe(null);
    });

    it('does not renders with a negative string', () => {
      const component = mount(<Badge number="-5" />);
      expect(component.html()).toBe(null);
    });
  });

  it('truncates when the value is greater than 99', () => {
    const component = mount(<Badge number={150} />);
    expect(component.text()).toBe('99+');
  });
});
