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
import Button from '..';

describe('Button', () => {
  it('should render a Button with .btn', () => {
    const component = shallow(<Button>Button</Button>);
    expect(component.hasClass('btn')).toBe(true);
  });
  it('should render a Button with .btn:disabled', () => {
    const component = shallow(<Button disabled>Button</Button>);
    expect(component.props().disabled).toBe(true);
  });
  it('should render a button with .expand-btn and custom classNames', () => {
    const component = shallow(
      <Button className="custom-class" type="expand-btn">
        Button
      </Button>
    );
    expect(component.hasClass('expand-btn')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });

  it('should render an anchor with .fake-btn with color class', () => {
    const component = shallow(
      <Button type="fake-btn" variant="primary">
        Button
      </Button>
    );
    expect(component.is('a')).toBe(true);
    expect(component.hasClass('fake-btn')).toBe(true);
    expect(component.hasClass('fake-btn--primary')).toBe(true);
  });
  it('should render an anchor with .cta-btn', () => {
    const component = shallow(<Button type="cta-btn">Button</Button>);
    expect(component.is('a')).toBe(true);
    expect(component.hasClass('cta-btn')).toBe(true);
  });
});
