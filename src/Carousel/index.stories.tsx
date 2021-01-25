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
import {withKnobs, select, boolean, number} from '@storybook/addon-knobs';
import {Carousel} from './index';
import {BgColorsEnum, ColorsEnum} from '../skin';
import {withA11y} from '@storybook/addon-a11y';
import {times} from '../test-utils';
import {BreadcrumbItem} from '../Breadcrumb/components/breadcrumbItem';
import {Breadcrumb} from '../Breadcrumb/skin-breadcrumb';

const story: any = {
  title: Category.SKINDS6,
  component: Carousel,
  decorators: [withKnobs, withA11y]
};
const defaultProps = {};
const ColorOptions = {
  ...ColorsEnum,
  none: ''
};
const BgColorOptions = {
  ...BgColorsEnum,
  none: ''
};
const liStyles = {
  backgroundColor: '#f1f8fe',
  color: '#111820',
  fontSize: '24px',
  height: '120px',
  lineHeight: '120px',
  marginRight: '16px',
  width: '200px'
};
export const Carousels = () => {
  const props = {...defaultProps};
  return (
    <Carousel {...props}>
      {times(10, (x) => (
        <li key={x} style={liStyles}>
          Card {x}
        </li>
      ))}
    </Carousel>
  );
};

export default story;
