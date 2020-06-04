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
import Notice, {NoticeProps} from './components/notice';
import {WindowNotice} from './components/windowNotice';
import {withHideEffect} from '../skin-utils';

export {Notice, NoticeType, NoticeVariant, NoticeProps} from './components/notice';
export {WindowNotice, WindowNoticeProps} from './components/windowNotice';
export default Notice;

export const SkinNotice = withHideEffect(Notice);
export const SkinWindowNotice = withHideEffect(WindowNotice);
