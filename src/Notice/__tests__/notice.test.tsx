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
import {Notice, NoticeStatus, NoticeContent} from '../components/notice';

describe('notice', () => {
  it('should render a Notice(a) with .notice and custom classNames', () => {
    const component = shallow(<Notice className="custom-class" />);
    expect(component.hasClass('page-notice')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a Notice(a) with .section and custom classNames', () => {
    const component = shallow(<Notice className="custom-class" type="section" title="Hello" />);
    expect(component.hasClass('section-notice')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a Notice(a) with .inline and custom classNames', () => {
    const component = shallow(<Notice className="custom-class" type="inline" />);
    expect(component.hasClass('inline-notice')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});

describe('NoticeStatus', () => {
  it('should render a NoticeStatus(a) with .notice__status and custom classNames', () => {
    const component = shallow(<NoticeStatus className="custom-class" iconName="menu" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a NoticeStatus(a) with .notice__status and custom classNames', () => {
    const component = shallow(<NoticeStatus className="custom-class" iconName="menu" type="inline" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
describe('NoticeContent', () => {
  it('should render a NoticeContent(a) with .notice__content and custom classNames', () => {
    const component = shallow(<NoticeContent className="custom-class" title="Hello" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
  it('should render a NoticeContent(a) with .notice__content and custom classNames', () => {
    const component = shallow(<NoticeContent className="custom-class" type="inline" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
