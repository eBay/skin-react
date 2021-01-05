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
import {PageItem, Pagination} from '..';
const PageItems = (num) =>
  Array(num)
    .fill(1)
    .map((x, i) => <PageItem key={i}>{i + 1}</PageItem>);
const onChangePage = jest.fn(() => true);
const defaultProps = {
  pageSize: 3,
  onChangePage
};
const getMountComponent = (props = {}, pageItems: number = 5) => {
  const mergeProps = {...defaultProps, ...props};
  return mount(<Pagination className="custom-class" {...mergeProps} children={PageItems(pageItems)} />);
};
describe('Pagination', () => {
  let spy: any;
  it('should render null', () => {
    const component = shallow(<Pagination className="custom-class" />);
    expect(component.html()).toBe(null);
  });
  it('should render a Pagination(nav) with .pagination and custom classNames', () => {
    const component = mount(<Pagination className="custom-class">{PageItems}</Pagination>);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  describe('Render', () => {
    afterEach(() => spy && spy.mockClear());
    it('should exist', () => {
      spy = jest.spyOn(Pagination.prototype, 'componentDidMount');
      const wrapper = getMountComponent({}, 0);
      const state: any = wrapper.state();
      expect(state.pager.totalItems).toBeFalsy();
      expect(spy).toBeCalledTimes(1);
      expect(wrapper.html()).toBe(null);
    });
  });
  describe('Render with items', () => {
    it('should exist', () => {
      const wrapper = getMountComponent({});
      const {pager}: any = wrapper.state();
      expect(pager.totalItems).toEqual(5);
      expect(pager.currentPage).toBe(1);
      expect(wrapper.text()).toBe('123');
      expect(wrapper.find('button').length).toEqual(5);
    });
    it('should hide when pageSize is greater than item count', () => {
      const wrapper = getMountComponent({pageSize: 4});
      const state: any = wrapper.state();
      expect(state.pager.totalItems).toEqual(5);
      expect(wrapper.text()).toBe('1234');
      expect(wrapper.find('button').length).toEqual(6);
    });
  });
  describe('handles navigation click events', () => {
    const wrapper = getMountComponent({onChangePage: jest.fn()});
    const btnNodes = wrapper.find('button');
    it('should handle li click on last', () => {
      const props = wrapper.props();
      spy = jest.spyOn(props, 'onChangePage');
      btnNodes.last().simulate('click');
      const {pager}: any = wrapper.state();
      expect(spy).toHaveBeenCalled();
      expect(pager.currentPage).toBe(2);
      spy.mockRestore();
    });
    it('should handle li click on first', () => {
      const props = wrapper.props();
      spy = jest.spyOn(props, 'onChangePage');
      let state: any = wrapper.state();
      expect(state.pager.currentPage).toBe(2);
      btnNodes.first().simulate('click');
      state = wrapper.state();
      expect(spy).toHaveBeenCalled();
      expect(state.pager.currentPage).toBe(1);
      spy.mockRestore();
    });
    it('should handle li click on 2', () => {
      const props = wrapper.props();
      spy = jest.spyOn(props, 'onChangePage');
      let state: any = wrapper.state();
      expect(state.pager.currentPage).toBe(1);
      btnNodes.last().simulate('click');
      state = wrapper.state();
      expect(spy).toHaveBeenCalled();
      expect(state.pager.currentPage).toBe(2);
      spy.mockRestore();
    });
    it('should handle li click on prev', () => {
      const props = wrapper.props();
      spy = jest.spyOn(props, 'onChangePage');
      btnNodes.last().simulate('click');
      btnNodes.first().simulate('click');
      const state: any = wrapper.state();
      expect(spy).toHaveBeenCalled();
      expect(state.pager.currentPage).toBe(2);
      spy.mockRestore();
    });
    it('should handle li click on next', () => {
      const props = wrapper.props();
      spy = jest.spyOn(props, 'onChangePage');
      btnNodes.last().simulate('click');
      btnNodes.last().simulate('click');
      const state: any = wrapper.state();
      expect(spy).toHaveBeenCalled();
      expect(state.pager.currentPage).toBe(4);
      spy.mockRestore();
    });
  });
});
