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
import Spinner from './index';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: Spinner,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {};

export const _Spinner = () => {
  const props = {...defaultProps};
  return (
    <div>
      <Spinner {...props} />
      <br />
      <br />
      <br />
      <Spinner {...props} isLarge />
    </div>
  );
};
export default story;
