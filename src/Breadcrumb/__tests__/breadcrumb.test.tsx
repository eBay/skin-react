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
import {Breadcrumb, BreadcrumbItem} from '../index';
import {times} from '../../test-utils';
const getMountComponent = (props = {}, breadcrumbItemCount = 3, breadcrumbItemProps = {}) =>
  mount(
    <Breadcrumb {...props}>
      {times(breadcrumbItemCount, (x) => (
        <BreadcrumbItem key={x} {...breadcrumbItemProps}>
          {x}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );

describe('breadcrumbs', () => {
  describe('given a breadcrumbs with 3 item', () => {
    const component = getMountComponent();
    const breadcrumbItems = component.find(BreadcrumbItem);
    it('should render wrapper', () => {
      expect(component.find('.breadcrumbs')).toHaveLength(1);
    });
    it('should render 3 items', () => {
      expect(breadcrumbItems.length).toEqual(3);
    });
    it('should render  buttons', () => {
      expect(breadcrumbItems.at(0).find('button')).toHaveLength(1);
    });
    it('should render first item with "1"', () => {
      expect(breadcrumbItems.at(0).text()).toEqual('1');
    });
  });
  describe('given a breadcrumbs with 3 item and href attr', () => {
    const component = getMountComponent({}, 3, {href: '#'});
    const breadcrumbItems = component.find(BreadcrumbItem);
    it('should render wrapper', () => {
      expect(component.find('.breadcrumbs')).toHaveLength(1);
    });
    it('should render 3 items', () => {
      expect(breadcrumbItems.length).toEqual(3);
    });
    it('should render a when href is passed', () => {
      expect(breadcrumbItems.at(0).find('a')).toHaveLength(1);
    });
    it('should render first item with "1"', () => {
      expect(breadcrumbItems.at(0).text()).toEqual('1');
    });
  });
});
