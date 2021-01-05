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
import {BasicNotice, NoticeProps} from './components/notice';
import {BasicWindowNotice} from './components/windowNotice';
import {withHideEffect} from '../skin-utils';

export {NoticeType, NoticeVariant, NoticeProps} from './components/notice';
export {WindowNoticeProps} from './components/windowNotice';

export const Notice = withHideEffect(BasicNotice);
export const WindowNotice = withHideEffect(BasicWindowNotice);
