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
import DemoComponent from '../../.storybook/util/demo';
import {Category} from '../../.storybook/util/stories-hierarchy';
import {SectionCTA, SectionTitle} from './index';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: SectionTitle,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {
  title: 'Today’s Deals – All With Free Shipping',
  subtitle: 'Plus, guaranteed best prices.'
};

export const _SectionTitle = () => {
  const props = {...defaultProps};
  return (
    <div>
      <DemoComponent>
        <SectionTitle {...props} />
      </DemoComponent>
      <br />
      <br />
      <br />
      <DemoComponent>
        <SectionTitle {...props}>
          <SectionCTA href="#" title="See All" iconName="arrow-right-bold" />
        </SectionTitle>
      </DemoComponent>
    </div>
  );
};
export default story;
