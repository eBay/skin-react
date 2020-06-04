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
import {Tab, TabCell, TabContent, TabItem, TabItems, TabPanel} from '../index';

describe('Tab', () => {
  it('should render a Tab(div) with .tabs', () => {
    const component = shallow(<Tab />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('tabs')).toBe(true);
  });
  it('should render a Tab(div) with .tabs and custom classNames', () => {
    const component = shallow(<Tab className="custom-class" />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('tabs')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a Tab(div) with .fake-tabs', () => {
    const component = shallow(<Tab isFake />);
    expect(component.hasClass('fake-tabs')).toBe(true);
  });
  it('should render a Tab(div) with .fake-tabs and custom classNames', () => {
    const component = shallow(<Tab isFake className="custom-class" />);
    expect(component.hasClass('fake-tabs')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});

describe('TabItems', () => {
  it('should render a TabItems(div) with .tabs__items', () => {
    const component = shallow(<TabItems />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('tabs__items')).toBe(true);
  });
  it('should render a TabItems(div) with .tabs__items and custom classNames', () => {
    const component = shallow(<TabItems className="custom-class" />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('tabs__items')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a TabItems(div) with .fake-tabs__items', () => {
    const component = shallow(<TabItems isFake />);
    expect(component.is('ul')).toBe(true);
    expect(component.hasClass('fake-tabs__items')).toBe(true);
  });
  it('should render a TabItems(div) with .fake-tabs__items and custom classNames', () => {
    const component = shallow(<TabItems isFake className="custom-class" />);
    expect(component.is('ul')).toBe(true);
    expect(component.hasClass('fake-tabs__items')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});

describe('TabItem', () => {
  it('should render a TabItem(div) with .tabs__item', () => {
    const component = shallow(<TabItem />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('tabs__item')).toBe(true);
  });
  it('should render a TabItem(div) with .tabs__item and custom classNames', () => {
    const component = shallow(<TabItem className="custom-class" />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('tabs__item')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a TabItem(li) with .fake-tabs__item', () => {
    const component = shallow(<TabItem href="#" />);
    expect(component.is('li')).toBe(true);
    expect(component.hasClass('fake-tabs__item')).toBe(true);
  });
  it('should render a TabItem(li) with .fake-tabs__item and custom classNames', () => {
    const component = shallow(<TabItem href="#" className="custom-class" />);
    expect(component.is('li')).toBe(true);
    expect(component.hasClass('fake-tabs__item')).toBe(true);
    expect(component.children().hasClass('custom-class')).toBe(true);
    expect(component.children().is('a')).toBe(true);
  });
});

describe('TabContent', () => {
  it('should render a TabContent(div) with .tabs__content', () => {
    const component = shallow(<TabContent />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('tabs__content')).toBe(true);
  });
  it('should render a TabContent(div) with .tabs__content and custom classNames', () => {
    const component = shallow(<TabContent className="custom-class" />);
    expect(component.is('div')).toBe(true);
    expect(component.hasClass('tabs__content')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a TabContent(div) with .fake-tabs__content', () => {
    const component = shallow(<TabContent isFake />);
    expect(component.hasClass('fake-tabs__content')).toBe(true);
  });
  it('should render a TabContent(div) with .fake-tabs__content and custom classNames', () => {
    const component = shallow(<TabContent isFake className="custom-class" />);
    expect(component.hasClass('fake-tabs__content')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
describe('TabPanel', () => {
  it('should render a TabPanel(div) with .tabs__panel', () => {
    const component = shallow(<TabPanel />);
    expect(component.hasClass('tabs__panel')).toBe(true);
  });
});
describe('TabCell', () => {
  it('should render a TabCell(div) with .tabs__cell', () => {
    const component = shallow(<TabCell />);
    expect(component.html()).toBe('<div class="tabs__cell"></div>');
    expect(component.hasClass('tabs__cell')).toBe(true);
  });
});
