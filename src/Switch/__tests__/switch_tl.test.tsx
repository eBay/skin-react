/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Aaron Nance
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import {Switch} from '../index';
import * as React from 'react';
import {render, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let component;
let mySwitch;
let changeHandler;

beforeEach(() => {
  changeHandler = jest.fn();
});

afterEach(cleanup);

describe('Given an enabled switch in the off position', () => {
  beforeEach(async () => {
    component = await render(<Switch onChange={changeHandler} />);
    mySwitch = component.getByRole('switch');
  });

  describe('when the switch is clicked', () => {
    beforeEach(async () => {
      await userEvent.click(mySwitch);
    });

    it('should call the change handler', () => {
      expect(changeHandler).toHaveBeenCalledTimes(1);
    });

    it('should be on (checked)', () => {
      expect(mySwitch).toBeChecked();
    });

    describe('when the switch is clicked again', () => {
      beforeEach(async () => {
        await userEvent.click(mySwitch);
      });

      it('should call the change handler', () => {
        expect(changeHandler).toHaveBeenCalledTimes(2);
      });

      it('should be off (unchecked)', () => {
        expect(mySwitch).not.toBeChecked();
      });
    });
  });
});

describe('Given a disabled switch in the off position', () => {
  beforeEach(async () => {
    component = await render(<Switch onChange={changeHandler} disabled={true} />);
    mySwitch = component.getByRole('switch');
  });

  describe('when the switch is clicked', () => {
    beforeEach(async () => {
      await userEvent.click(mySwitch);
    });

    it('should not call the event handler', () => {
      expect(changeHandler).not.toHaveBeenCalled();
    });

    it('should not be on (checked)', () => {
      expect(mySwitch).not.toBeChecked();
    });
  });
});
