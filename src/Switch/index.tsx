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
import BasicSwitch, {SwitchProps} from './components/switch';

export {BasicSwitch, SwitchProps} from './components/switch';
export const SwitchSpan = (props): SwitchProps<HTMLSpanElement> => <BasicSwitch {...props} isSpan />;
export const Switch = withOnChangeState(BasicSwitch);
export default Switch;
