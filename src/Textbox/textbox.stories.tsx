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
import StoryBook from '../../.storybook/util/story-setup';
import {Category} from '../../.storybook/util/stories-hierarchy';
import {withKnobs, boolean, select} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {SkinTextbox, Textbox} from './index';
import {toStoryObj, icons} from '../../.storybook/util/utils';
import {IconType} from '../Icon';
import {withA11y} from '@storybook/addon-a11y';
import SkinTextboxLabeled from './skin-textbox-labeled';
const story: any = {
  title: Category.SKINDS6,
  component: SkinTextboxLabeled,
  decorators: [withKnobs, withA11y]
};
const iconOptions = toStoryObj(icons);

const defaultProps = {};

export const _Textbox = () => {
  const isMultiline = boolean('isMultiline', false, '1');
  const isUnderlined = boolean('isUnderlined', false, '1');
  const isFluid = boolean('isFluid', false, '1');
  const iconType = select('iconType', iconOptions, '', '1') as IconType;
  const isPostfixIcon = boolean('isPostfixIcon', false, '1');
  const props = {...defaultProps, isFluid, isUnderlined, isMultiline, iconType, isPostfixIcon};
  return (
    <div>
      <h1>Textbox</h1>
      <SkinTextbox {...props} aria-label="Textbox" />
      <h1>Floating Label Textbox</h1>
      <SkinTextboxLabeled {...props} aria-label="Textbox" label={'Name'} />
    </div>
  );
};
export default story;
