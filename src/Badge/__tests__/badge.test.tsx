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
import {Badge} from '../index';

describe('Badge', () => {
  it('should render a Badge with .badge', () => {
    const component = shallow(<Badge />);
    expect(component.hasClass('badge')).toBe(true);
  });
});
