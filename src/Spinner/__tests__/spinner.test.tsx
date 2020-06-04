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
import Spinner from '../index';

describe('Spinner', () => {
  it('should render a Spinner(span) with .spinner and custom classNames', () => {
    const component = shallow(<Spinner className="custom-class" />);
    expect(component.is('span')).toBe(true);
    expect(component.hasClass('spinner')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
