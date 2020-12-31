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
import {SkinButton as Button} from '..';
import {render, fireEvent, cleanup} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom/matchers';
expect.extend({toBeInTheDocument});

describe('Button', () => {
  it('should render a Button with .btn', () => {
    const component = mount(<Button>Button</Button>);
    console.log(component.html());
    expect(component.find('button').hasClass('btn')).toBe(true);
  });
  it('should render a Button with .btn:disabled', () => {
    const component = mount(<Button disabled>Button</Button>);
    expect(component.props().disabled).toBe(true);
  });
  it('should render a button with .expand-btn and custom classNames', () => {
    const component = mount(
      <Button className="custom-class" variant="expand">
        Button
      </Button>
    );
    console.log(component.html());
    expect(component.find('button').hasClass('expand-btn')).toBe(true);
    expect(component.find('button').hasClass('custom-class')).toBe(true);
  });
});

let component;
let handleClick = jest.fn();
let handleEscape = jest.fn();

describe('given button is enabled', () => {
  beforeEach(async () => {
    handleClick = jest.fn();
    handleEscape = jest.fn();
    component = await render(<Button onClick={handleClick} onEscape={handleEscape} />);
  });

  describe('when button is clicked', () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByRole('button'));
    });

    it('then it emits the event with correct data', () => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when escape key is pressed', () => {
    beforeEach(async () => {
      fireEvent.keyDown(component.getByRole('button'), {key: 'Escape', code: 27});
    });

    it('then it emits the event with correct data', () => {
      expect(handleEscape).toHaveBeenCalledTimes(1);
    });
  });
});

describe('given button is disabled', () => {
  beforeEach(async () => {
    handleClick = jest.fn();
    handleEscape = jest.fn();
    component = await render(<Button onClick={handleClick} onEscape={handleEscape} disabled />);
  });

  describe('when button is clicked', () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByRole('button'));
    });

    it('then it does not emit the event', () => {
      expect(handleClick).toHaveBeenCalledTimes(0);
    });
  });

  describe('when escape key is pressed', () => {
    beforeEach(async () => {
      fireEvent.keyDown(component.getByRole('button'), {key: 'Escape', code: 27});
    });

    it('then it does not emit the event', () => {
      expect(handleEscape).toHaveBeenCalledTimes(0);
    });
  });
});
