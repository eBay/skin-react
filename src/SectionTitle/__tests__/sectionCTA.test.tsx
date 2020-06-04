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
import {SectionCTA} from '../index';

describe('SectionCTA', () => {
  it('should render a SectionCTA(div) with default class and custom classNames', () => {
    const component = shallow(<SectionCTA className="custom-class" />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('section-title__cta')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
