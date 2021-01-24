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
import {LightBoxDialog} from '..';

describe('given an closed dialog', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LightBoxDialog className="custom-class" />);
  });
  it('then it is hidden in the DOM', () => {
    expect(wrapper.find('.lightbox-dialog').at(0)).toHaveLength(0);
  });
  it('then it is visible in the DOM', () => {
    wrapper.setProps({open: true});
    expect(wrapper.find('.lightbox-dialog').at(0)).toHaveLength(1);
  });
});
describe('given a open dialog', () => {
  let wrapper = mount(<LightBoxDialog className="custom-class" open />);
  const component = wrapper.find('.lightbox-dialog').at(0);
  it('should render a dialog', () => {
    expect(component).toHaveLength(1);
  });
  it('should render a dialog tag with .lightbox-dialog', () => {
    expect(component.hasClass('lightbox-dialog')).toBe(true);
  });
  it('should render a dialog with custom classNames', () => {
    expect(component.hasClass('custom-class')).toBe(true);
  });
  describe('when the close button is clicked', () => {
    let spy;
    beforeEach(() => {
      wrapper = mount(<LightBoxDialog className="custom-class" open header={<h2>Heading</h2>} onClose={jest.fn()} />);
    });
    it('then it should trigger close event', () => {
      spy = jest.spyOn(wrapper.props(), 'onClose');
      wrapper.find('.lightbox-dialog__close').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
