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
import {SectionInfo, SectionOverflow} from '..';

describe('SectionInfo', () => {
  it('should render a SectionInfo(div) with default class and custom classNames', () => {
    const component = shallow(<SectionInfo className="custom-class" />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('section-title__info')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});

describe('SectionOverflow', () => {
  it('should render a SectionOverflow(div) with default class and custom classNames', () => {
    const component = shallow(<SectionOverflow className="custom-class" />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('section-title__overflow')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
