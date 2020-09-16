/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Aaron Nance
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Checkbox} from '../index';

let component;
let checkbox;
let changeHandler;
let focusHandler;

beforeEach(() => {
  changeHandler = jest.fn();
  focusHandler = jest.fn();
});

afterEach(cleanup);

describe('Given an enabled and unchecked checkbox', () => {
  beforeEach(async () => {
    component = await render(<Checkbox onChange={changeHandler} onFocus={focusHandler} />);
    checkbox = component.getByRole('checkbox');
  });

  describe('when checkbox is clicked', () => {
    beforeEach(async () => {
      await userEvent.click(checkbox);
    });

    it('should call the change handler', () => {
      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('should be checked', () => {
      expect(checkbox).toBeChecked();
    });
  });

  describe('when the checkbox gets focus', () => {
    beforeEach(async () => {
      await fireEvent.focus(checkbox);
    });

    it('should call the focus handler', () => {
      expect(focusHandler).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Given a disabled and unchecked checkbox', () => {
  beforeEach(async () => {
    component = await render(<Checkbox onChange={changeHandler} disabled={true} />);
    checkbox = component.getByRole('checkbox');
  });

  it('should be disabled', () => {
    expect(checkbox).toBeDisabled();
  });

  describe('when checkbox is clicked', () => {
    beforeEach(async () => {
      await userEvent.click(checkbox);
    });

    it('should not call the change handler', () => {
      expect(changeHandler).not.toHaveBeenCalled();
    });

    it('should not be checked', () => {
      expect(checkbox).not.toBeChecked();
    });
  });
});
