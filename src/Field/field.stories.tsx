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
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';
import {SkinField, SkinFieldLabel, SkinFieldControl, SkinFieldDescription} from './';
import SkinTextbox from '../Textbox';

const story: any = {
  title: Category.SKINDS6,
  component: SkinField,
  decorators: [withKnobs, withA11y]
};
const defaultProps = {};
export const _Field = () => {
  const props = {...defaultProps};
  return (
    <div>
      {[undefined, 'confirmation', 'information', 'attention'].map((color, i) => (
        <SkinField {...props} isBlock key={i}>
          <SkinFieldLabel htmlFor={`field-${color}`} isStacked>
            Field
          </SkinFieldLabel>
          <SkinFieldControl>
            <SkinTextbox id={`field-${color}`} isInvalid={color === 'attention'} />
          </SkinFieldControl>
          <SkinFieldDescription id={`field-${color}-descripiton`} color={color}>
            <span>Field description</span>
          </SkinFieldDescription>
        </SkinField>
      ))}
    </div>
  );
};
export default story;
