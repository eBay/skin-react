import * as React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import * as mock from './mocks';

describe('select', () => {
  it('renders basic version', async () => {
    const input = mock.Basic_3OptionsProps;
    const {getByRole, getAllByRole} = await render(<mock.Basic_3Options />);
    const rootElement = getByRole('combobox').parentElement;
    const optionEls = getAllByRole('option');

    expect(rootElement).toHaveClass('select');
    expect(rootElement).not.toHaveClass('select--borderless');

    expect(optionEls).toHaveLength(3);
    input.children.forEach((option, i) => {
      const optionEl = optionEls[i];
      expect(optionEl).toHaveTextContent(option.props.children);
      expect(optionEl).toHaveValue(option.props.value);
      expect(optionEl).toHaveProperty('selected', i === 0);
    });
  });

  it('renders empty', async () => {
    const input = mock.Basic_0OptionsProps;
    const {queryAllByRole} = await render(<mock.Basic_0Options />);
    expect(queryAllByRole('combobox')).toHaveLength(1);
    expect(queryAllByRole('option')).toHaveLength(0);
  });

  it('renders with second item selected', async () => {
    const input = mock.Basic_3Options_1SelectedProps;
    const {getAllByRole} = await render(<mock.Basic_3Options_1Selected />);
    getAllByRole('option').forEach((optionEl, i) => {
      expect(optionEl).toHaveProperty('selected', i === 1);
    });
  });

  it('renders with borderless=true', async () => {
    const input = mock.Borderless_3OptionsProps;
    const {getByRole} = await render(<mock.Borderless_3Options />);
    expect(getByRole('combobox')).toHaveProperty('parentElement');
    expect(getByRole('combobox').parentElement).toHaveClass('select--borderless');
  });
});
