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
import {SkinButton as Button} from '..';
import {render, fireEvent, cleanup} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom/matchers';
expect.extend({toBeInTheDocument});

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
