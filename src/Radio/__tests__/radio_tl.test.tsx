/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Aaron Nance
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import {Radio} from '../index';
import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let component;
let radio;
let changeHandler;
let focusHandler;

beforeEach(() => {
  changeHandler = jest.fn();
  focusHandler = jest.fn();
});

afterEach(cleanup);

describe('Given an enabled and unchecked radio button', () => {
  beforeEach(async () => {
    component = await render(<Radio onChange={changeHandler} onFocus={focusHandler} />);
    radio = component.getByRole('radio');
  });

  describe('when the radio button is clicked', () => {
    beforeEach(async () => {
      await userEvent.click(radio);
    });

    it('should call the change handler', () => {
      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('should be checked', () => {
      expect(radio).toBeChecked();
    });
  });

  describe('when the radio button receives focus', () => {
    beforeEach(async () => {
      await fireEvent.focus(radio);
    });

    it('should call the focus handler', () => {
      expect(focusHandler).toHaveBeenCalledTimes(1);
    });
  });
});

describe('given a disabled and unchecked radio button', () => {
  beforeEach(async () => {
    component = await render(<Radio onChange={changeHandler} disabled={true} />);
    radio = component.getByRole('radio');
  });

  it('should be disabled', () => {
    expect(radio).toBeDisabled();
  });

  describe('when the radio button is clicked', () => {
    beforeEach(async () => {
      await userEvent.click(radio);
    });

    it('should not call the event handler', () => {
      expect(changeHandler).not.toHaveBeenCalled();
    });

    it('should not be checked', () => {
      expect(radio).not.toBeChecked();
    });
  });
});
