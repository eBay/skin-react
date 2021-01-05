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
import {isControlled} from '../skin-utils';

// @ts-ignore
import {BasicTextBox, TextboxProps} from './components/textbox';

// @ts-ignore
export const Textbox = ({onChange, ...rest}: TextboxProps<HTMLTextAreaElement | HTMLInputElement>) => {
  const [val, setVal] = React.useState(rest.defaultValue || rest.value || '');
  const props = isControlled(rest.value) ? {...rest, value: val} : rest;
  const handleChange = (e) => {
    onChange && onChange(e);
    isControlled(props.value) && setVal(e.target.value);
  };
  return <BasicTextBox {...props} onChange={handleChange} />;
};

export {FloatingLabel, FloatingLabelProps} from './components/floatingLabel';
// @ts-ignore
export {TextboxLabeled} from './skin-textbox-labeled';
// @ts-ignore
export default Textbox;
