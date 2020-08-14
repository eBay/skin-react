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
import {Textbox} from '..';

describe('Textbox', () => {
  it('should render a Textbox(input) with .textbox and custom classNames', () => {
    const component = shallow(<Textbox className="custom-class" />);
    const inputComponent = component.children();
    expect(inputComponent.is('input')).toBe(true);
    expect(inputComponent.hasClass('textbox__control')).toBe(true);
    expect(inputComponent.hasClass('custom-class')).toBe(true);
  });
  it('should render a Textbox(textbox) with .textbox and custom classNames', () => {
    const component = shallow(<Textbox className="custom-class" isMultiline />);
    const textareaComponent = component.children();
    expect(textareaComponent.is('textarea')).toBe(true);
    expect(textareaComponent.hasClass('textbox__control')).toBe(true);
    expect(textareaComponent.hasClass('custom-class')).toBe(true);
  });
  it('should render a Textbox(input) with .textbox and custom classNames', () => {
    const component = shallow(
      <Textbox className="custom-class" isFluid isUnderlined isPostfixIcon isInvalid iconType="menu" />
    );
    const inputComponent = component.find('input');
    expect(inputComponent.is('input')).toBe(true);
    expect(inputComponent.hasClass('textbox__control')).toBe(true);
    expect(inputComponent.hasClass('custom-class')).toBe(true);
  });
});
