/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Erik Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {mount} from 'enzyme';
import Toast from '../components/toast';

describe('Toast', () => {
  it('should render a Toast with tag aside', () => {
    const component = mount(<Toast open />);
    expect(component.find('aside')).toBeTruthy();
  });
});
