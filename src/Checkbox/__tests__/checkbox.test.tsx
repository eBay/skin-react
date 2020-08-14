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
import {Checkbox} from '../index';

describe('Checkbox', () => {
  describe('Checkbox', () => {
    const component = mount(<Checkbox id="checkbox-id" />);
    const inputElm = component.find('input');
    it('should render a Checkbox with .checkbox', () => {
      expect(component.find('.checkbox')).toHaveLength(1);
    });
    it('renders default checkbox', () => {
      expect(inputElm.props().disabled).toBe(undefined);
    });
    it('renders checkbox with id', () => {
      expect(inputElm.props().id).toBe('checkbox-id');
    });
  });

  it('renders disabled checkbox', () => {
    const component = mount(<Checkbox disabled />);
    const inputElm = component.find('input').at(0);
    expect(inputElm.props().disabled).toBe(true);
  });
});
