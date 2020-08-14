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
import {SkinDetails} from './index';
import {withKnobs, boolean, select} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  decorators: [withKnobs, withA11y]
};

export const _Details = () => {
  const type = select('Type', ['center', 'regular'], 'regular');
  const size = select('Size', ['small', 'regular'], 'regular');
  const isRtl = boolean('isRtl', false);
  return (
    <div>
      <h1>Default Details</h1>
      <SkinDetails label="Default Detail">SkinDetails</SkinDetails>
      <h1>Custom SkinDetails</h1>
      <SkinDetails label="SkinDetails" type={type} size={size} isRtl={isRtl}>
        SkinDetails
      </SkinDetails>
    </div>
  );
};
export default story;
