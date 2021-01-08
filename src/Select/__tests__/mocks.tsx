import Select from '../index';
import * as React from 'react';
import {times} from '../../test-utils';
export const Basic_0OptionsProps = {
  children: null
};
export const Basic_0Options = (props) => (
  <Select {...Basic_0OptionsProps} {...props}>
    {props.children || Basic_0OptionsProps.children}
  </Select>
);

export const Basic_3OptionsProps = {
  children: times(3, (item, i) => <option key={i} value={String(i)}>{`option ${i}`}</option>)
};
export const Basic_3Options = (props) => (
  <Select {...Basic_3OptionsProps} {...props}>
    {props.children || Basic_3OptionsProps.children}
  </Select>
);

export const Borderless_3OptionsProps = {
  ...Basic_3OptionsProps,
  borderless: true
};
export const Borderless_3Options = (props) => (
  <Select {...Borderless_3OptionsProps} {...props}>
    {props.children || Borderless_3OptionsProps.children}
  </Select>
);

export const Basic_3Options_1SelectedProps = {
  children: times(3, (item, i) => <option key={i} value={String(i)} selected={i === 1}>{`option ${i}`}</option>)
};
export const Basic_3Options_1Selected = (props) => (
  <Select {...Basic_3Options_1SelectedProps} {...props}>
    {props.children || Basic_3Options_1SelectedProps.children}
  </Select>
);
