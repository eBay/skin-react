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
import {withOnChangeState} from '../skin-utils';
import {BasicCheckbox} from './components/checkbox';

export {CheckboxProps} from './components/checkbox';
export const Checkbox = withOnChangeState(BasicCheckbox);
export default Checkbox;
