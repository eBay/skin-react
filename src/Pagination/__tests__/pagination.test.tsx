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
import {PageItem} from '..';
import {PaginationBasic} from '../components/pagination';
import {PageControl} from '../components/pageControl';
import {PageList} from '../components/pageList';

describe('Pagination', () => {
  it('should render a Pagination with .pagination', () => {
    const component = shallow(<PaginationBasic />);
    expect(component.hasClass('pagination')).toBe(true);
  });
  it('should render a PageItem with .pagination__item', () => {
    const component = shallow(<PageItem />);
    expect(component.is('li')).toBe(true);
  });
  it('should render a PageControl with .pagination__next', () => {
    const component = shallow(<PageControl />);
    expect(component.hasClass('pagination__previous')).toBe(true);
  });
  it('should render a PageList with .pagination__items', () => {
    const component = shallow(<PageList />);
    expect(component.hasClass('pagination__items')).toBe(true);
  });
});
