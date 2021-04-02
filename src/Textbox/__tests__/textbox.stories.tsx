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

import {withKnobs, boolean, select} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {Textbox, TextboxLabeled} from '../index';
import {toStoryObj, icons} from '../../util/utils';
import {IconName} from '../../Icon';
import {withA11y} from '@storybook/addon-a11y';
import SkinTextboxLabeled from '../skin-textbox-labeled';
const story: any = {
  title: 'skin',
  component: SkinTextboxLabeled,
  decorators: [withKnobs, withA11y]
};
const iconOptions = toStoryObj(icons);

const defaultProps = {};

export const _Textbox = () => {
  const isMultiline = boolean('isMultiline', false);
  const isUnderlined = boolean('isUnderlined', false);
  const isFluid = boolean('isFluid', false);
  const iconName = select('iconName', iconOptions, '');
  const isPostfixIcon = boolean('isPostfixIcon', false);
  const props = {...defaultProps, isFluid, isUnderlined, isMultiline, iconName, isPostfixIcon};
  return (
    <div>
      <h1>Textbox</h1>
      <Textbox {...props} aria-label="Textbox" />
      <h1>Floating Label Textbox</h1>
      <TextboxLabeled {...props} aria-label="Textbox" label={'Name'} />
    </div>
  );
};
export default story;
