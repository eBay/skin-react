/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import {shallow} from 'enzyme';
import {
  removeProp,
  withProps,
  addFakePrefix,
  getFakeTag,
  getDisplayName,
  withOnChangeState,
  withForwardRef
} from '../skin-utils';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

describe('removeProp Func.', () => {
  let props;
  beforeEach(() => {
    props = {hello: 'world', removeThis: 'prop'};
  });
  it('should remove props', () => {
    const rest = removeProp(props, 'removeThis');
    expect(rest['removeThis']).toBe(undefined);
    expect(rest['hello']).toBe(props.hello);
  });
});
describe('addFakePrefix Func.', () => {
  it('should not add fake- prefix', () => {
    expect(addFakePrefix(false, 'class')).toBe('class');
  });
  it('should add fake- prefix', () => {
    expect(addFakePrefix(true, 'class')).toBe('fake-class');
  });
});
describe('getFakeTag Func.', () => {
  it('should return tag when not isFake', () => {
    expect(getFakeTag(false)).toBe('div');
    expect(getFakeTag(false, 'a', 'button')).toBe('button');
  });
  it('should return fake tag when isFake', () => {
    expect(getFakeTag(true)).toBe('a');
    expect(getFakeTag(true, 'a', 'button')).toBe('a');
  });
});
describe('withProps HOC', () => {
  const Component = withProps({displayName: 'component', className: 'injected-class'})();
  it('should render a component with injected Props', () => {
    const component = shallow(<Component />);
    expect(component.hasClass('injected-class')).toBe(true);
  });
  it('should render a component with injected Props', () => {
    const component = shallow(<Component className="custom-class" />);
    expect(component.hasClass('injected-class')).toBe(true);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});

describe('getDisplayName Func.', () => {
  it('should get tag name', () => {
    expect(getDisplayName(<div />)).toBe('Component');
  });
});
describe('withOnChangeState HOC', () => {
  const TestComponent = (props) => <span {...props} />;
  it('should render a component with injected Props', () => {
    const ComponentWithState = withOnChangeState(TestComponent);
    const component = shallow(<ComponentWithState className="custom-class" />);
    const state: any = component.state();
    expect(state.checked).toBe(false);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});

describe('withForwardRef HOC', () => {
  const TestComponent = (props) => <span {...props} />;
  it('should render a component with injected Props', () => {
    const ComponentWithState = withForwardRef(TestComponent);
    const component = shallow(<ComponentWithState className="custom-class" />);
    expect(component.hasClass('custom-class')).toBe(true);
  });
});
