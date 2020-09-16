/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Ketul Shah
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {Category} from '../../.storybook/util/stories-hierarchy';
import CtaButton, {SkinCtaButton} from './index';
import {select, withKnobs} from '@storybook/addon-knobs';
import {toStoryObj} from '../../.storybook/util/utils';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: CtaButton,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {};
const Sizeoptions = toStoryObj(['basic', 'large']);

export const _CtaButton = () => {
  const size = select('Sizes', Sizeoptions, undefined);
  const href = 'https://ebay.com';
  const props = {...defaultProps};
  return (
    <div>
      <SkinCtaButton {...props} size={size} href={href}>
        cta text
      </SkinCtaButton>
    </div>
  );
};
export default story;
