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
import {mount, shallow} from 'enzyme';
import {DialogBase} from '..';

describe('DialogBase', () => {
  describe('given a DialogBase', () => {
    let component = mount(<DialogBase classPrefix="drawer" className="custom-class" />);
    it('should render a DialogBase', () => {
      expect(component).toHaveLength(1);
    });
    it('should render a DialogBase with custom classNames', () => {
      expect(component.hasClass('custom-class')).toBe(true);
    });
    describe('when the close button is clicked', () => {
      let spy;
      beforeEach(() => {
        component = mount(<DialogBase classPrefix="drawer" header={<h2>Heading</h2>} onCloseBtnClick={jest.fn()} />);
      });
      it('then it should trigger close event', () => {
        spy = jest.spyOn(component.props(), 'onCloseBtnClick');
        component.find('.drawer__close').simulate('click');
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
