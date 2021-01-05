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
import TextboxLabeled from '../skin-textbox-labeled';

describe('LabelTextbox', () => {
  it('should render a SkinLabelTextbox(input|textbox) with .textbox and custom classNames', () => {
    const component = mount(<TextboxLabeled className="custom-class" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
