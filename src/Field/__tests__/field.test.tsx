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
import {Field, FieldControl, FieldDescription, FieldLabel} from '../components/field';

describe('Field', () => {
  it('should render a Field(div) with default className and custom classNames', () => {
    const component = shallow(<Field className="custom-class" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
describe('FieldControl', () => {
  it('should render a FieldControl(div) with default className and custom classNames', () => {
    const component = shallow(<FieldControl className="custom-class" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
describe('FieldDescription', () => {
  it('should render a FieldDescription(div) with default className and custom classNames', () => {
    const component = shallow(<FieldDescription className="custom-class" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
describe('FieldLabel', () => {
  it('should render a FieldLabel(div) with default className and custom classNames', () => {
    const component = shallow(<FieldLabel className="custom-class" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
