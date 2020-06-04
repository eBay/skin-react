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
import {FloatingLabel, FloatingLabelProps} from './components/floatingLabel';
import {hasValue, withForwardRef} from '../skin-utils';
import {SkinTextbox} from './index';
const TextBoxWithRef = withForwardRef(SkinTextbox);
const defaultStateProps = {isAnimated: false, isInline: false};
export const SkinTextboxLabeled = ({
  label,
  onBlur,
  onFocus,
  ...props
}: FloatingLabelProps<HTMLInputElement | HTMLTextAreaElement>) => {
  const textBoxEl = React.useRef();
  const [state, setState] = React.useState(defaultStateProps);
  React.useEffect(() => {
    const {current} = textBoxEl;
    if (current && !hasValue(current)) {
      setState({...defaultStateProps, isInline: true});
    }
  }, []);
  const HTMLProps = {
    ...props,
    isUnderlined: true,
    isMultiline: false,
    onBlur: (e) => {
      if (!hasValue(e.target)) {
        setState({...defaultStateProps, isInline: true});
      }
      onBlur && onBlur(e);
    },
    onFocus: (e) => {
      setState({...defaultStateProps, isAnimated: true});
      onFocus && onFocus(e);
    }
  };

  const labelProps = {
    ...state,
    label,
    disabled: props.disabled
  };

  return (
    <FloatingLabel htmlFor={props.id} {...labelProps}>
      <TextBoxWithRef {...HTMLProps} ref={textBoxEl} />
    </FloatingLabel>
  );
};
export default SkinTextboxLabeled;
