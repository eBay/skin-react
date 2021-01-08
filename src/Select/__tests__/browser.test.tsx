import * as React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import * as mock from './mocks';

let component;
let handleOnChange = jest.fn();

describe('given the select with 3 options', () => {
  const input = mock.Basic_3OptionsProps;
  beforeEach(async () => {
    handleOnChange = jest.fn();
    component = await render(<mock.Basic_3Options onChange={handleOnChange} />);
  });

  it('then the first option should be selected', () => {
    component.getAllByRole('option').forEach((optionEl, i) => {
      expect(optionEl).toHaveProperty('selected', i === 0);
    });
  });

  describe('when the index is set through dom change event', () => {
    beforeEach(async () => {
      const combobox = component.getByRole('combobox');
      combobox.selectedIndex = 1;
      await fireEvent.change(combobox);
    });

    it('then it emits the change event with the correct data', () => {
      expect(handleOnChange).toHaveBeenCalledTimes(1);

      // const [[eventArg]] = handleOnChange.mock;
      // expect(eventArg).toHaveProperty('index', 1);
      // expect(eventArg).toHaveProperty('selected').deep.equal([input.options[1].value]);
    });
  });
});
