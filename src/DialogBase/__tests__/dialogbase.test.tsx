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
import {DialogBase} from '..';

describe('DialogBase', () => {
  it('should render a DialogBase with .drawer', () => {
    const component = shallow(<DialogBase classPrefix="drawer" />);
    expect(component.hasClass('drawer')).toBe(true);
  });
});
