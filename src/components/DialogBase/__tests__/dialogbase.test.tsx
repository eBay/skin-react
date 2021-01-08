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
import {DialogBaseWithState} from '../index';

describe('DialogBase', () => {
  it('given a closed dialog should return null', () => {
    const component = mount(<DialogBaseWithState classPrefix="drawer-dialog" className="custom-class" />);
    expect(component.html()).toBe(null);
  });
  describe('given a DialogBase', () => {
    let component = mount(<DialogBaseWithState classPrefix="drawer-dialog" className="custom-class" open />);
    it('should render a DialogBase', () => {
      expect(component).toHaveLength(1);
    });
    it('should render a DialogBase with custom classNames', () => {
      expect(component.hasClass('custom-class')).toBe(true);
    });
    describe('click events', () => {
      let spy;
      beforeEach(() => {
        component = mount(
          <DialogBaseWithState
            classPrefix="drawer-dialog"
            header={<h2>Heading</h2>}
            onCloseBtnClick={jest.fn()}
            onBackgroundClick={jest.fn()}
            open
          />
        );
      });
      it('when btn cliked then it should trigger onCloseBtnClick event', () => {
        spy = jest.spyOn(component.props(), 'onCloseBtnClick');
        component.find('.drawer-dialog__close').simulate('click');
        expect(spy).toHaveBeenCalled();
      });
      it('when background clicked then it should trigger onBackgroundClick event', () => {
        spy = jest.spyOn(component.props(), 'onBackgroundClick');
        document.body.click();
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});