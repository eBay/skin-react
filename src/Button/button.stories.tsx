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
import {Category} from '../../.storybook/util/stories-hierarchy';
import {withKnobs, select, boolean, number} from '@storybook/addon-knobs';
import Button, {BtnCell, ButtonColors, ButtonSizes, ButtonTypes} from './index';
import {Icon} from '../Icon';
import {withInfo} from '@storybook/addon-info';
import {toStoryObj} from '../../.storybook/util/utils';
import StoryBook from '../../.storybook/util/story-setup';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: Button,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {badgeAriaLabel: 'badge Aria Label'};
const priorityOptions = toStoryObj(['primary', 'delete', 'secondary', '']);
const sizeOptions = toStoryObj(['large', '']);
const variants = ['', 'expand', 'fake-link', 'icon'];

export const _Button = () => {
  const priority = select('priority', priorityOptions, '');
  const size = select('size', sizeOptions, '');
  const iconOnly = boolean('iconOnly', false, '');
  const fluid = boolean('fluid', false, '');
  const disabled = boolean('disabled', false, '');
  const partiallyDisabled = boolean('partiallyDisabled', false, '');
  const transparent = boolean('transparent', false, '');
  const fixedHeight = boolean('fixedHeight', false, '');
  const truncate = boolean('truncate', false, '');
  const num = number(
    'badgeNumber',
    0,
    {
      range: true,
      min: 0,
      max: 200,
      step: 50
    },
    ''
  );
  const badgeNumber = num > 0 ? num : undefined;
  const props = {
    ...defaultProps,
    priority,
    size,
    iconOnly,
    fluid,
    disabled,
    partiallyDisabled,
    transparent,
    fixedHeight,
    truncate,
    badgeNumber
  };
  return (
    <div>
      {variants.map((variant, index) => (
        <div key={index}>
          <h2>{variant}</h2>
          <Button {...props} aria-label={`Skin Button ${variant}`} variant={variant}>
            Button
          </Button>
        </div>
      ))}
    </div>
  );
};

export default story;
