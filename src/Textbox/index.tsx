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
import {Textbox, TextboxProps} from './components/textbox';

// @ts-ignore
export const SkinTextbox = ({onChange, ...rest}: TextboxProps<HTMLTextAreaElement | HTMLInputElement>) => {
  const [val, setVal] = React.useState(rest.defaultValue || rest.value || '');
  const props = isControlled(rest.value) ? {...rest, value: val} : rest;
  const handleChange = (e) => {
    onChange && onChange(e);
    isControlled(props.value) && setVal(e.target.value);
  };
  return <Textbox {...props} onChange={handleChange} />;
};

// @ts-ignore
export {Textbox, TextboxProps} from './components/textbox';
export {FloatingLabel, FloatingLabelProps} from './components/floatingLabel';
// @ts-ignore
export {SkinTextboxLabeled} from './skin-textbox-labeled';
// @ts-ignore
export default SkinTextbox;
