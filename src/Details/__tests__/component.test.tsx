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
import Details from '..';

describe('Details', () => {
  describe('given the details is in the default state', () => {
    const component = shallow(<Details className="custom-class" />);
    it('should render a details tag', () => {
      expect(component.is('details')).toBe(true);
    });
    it('should render a details tag with .details', () => {
      expect(component.hasClass('details')).toBe(true);
    });
    it('should render a details with custom classNames', () => {
      expect(component.hasClass('custom-class')).toBe(true);
    });
  });
});
