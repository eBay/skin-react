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
import {SectionContainer} from '../index';

describe('SectionContainer', () => {
  it('should render a SectionContainer(div) with default class and custom classNames', () => {
    const component = shallow(<SectionContainer className="custom-class" />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('section-title__title-container')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
