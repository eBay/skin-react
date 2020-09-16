/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Ketul Shah
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {shallow} from 'enzyme';
import CtaButton from '..';

describe('CtaButton', () => {
  it('should render a CTA Button(a) with given href and custom classNames', () => {
    const component = shallow(
      <CtaButton href="https://ebay.com" className="custom-class">
        Text
      </CtaButton>
    );
    expect(component.is('a')).toBe(true);
    expect(component.hasClass('cta-btn')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
    expect(component.hasClass('default')).toBe(true);

    const children = component.children();
    expect(children.is('span')).toBe(true);
    expect(children.hasClass('cta-btn__cell')).toBe(true);
  });

  it('should render a large CTA Button(a) with given href', () => {
    const component = shallow(
      <CtaButton href="https://ebay.com" size="large">
        Text
      </CtaButton>
    );
    expect(component.is('a')).toBe(true);
    expect(component.hasClass('cta-btn')).toBe(true);
    expect(component.hasClass('cta-btn--large')).toBe(true);
  });
});
