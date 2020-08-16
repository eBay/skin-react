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
import {withKnobs, select} from '@storybook/addon-knobs';
import Button, {BtnCell, ButtonColors, ButtonSizes, ButtonTypes, SkinFilterButton} from './index';
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

const defaultProps = {};
const ColorOptions = toStoryObj(['primary', 'delete', 'secondary']);
const Sizeoptions = toStoryObj(['truncated', 'large', 'large-truncated']);
const types: ButtonTypes[] = ['btn', 'fake-btn', 'cta-btn'];

export const _Button = () => {
  const variant = select('Colors', ColorOptions, '') as ButtonColors;
  const size = select('Sizes', Sizeoptions, '') as ButtonSizes;
  const props = {...defaultProps, variant, size};
  return (
    <div>
      {types.map((type, index) => (
        <div key={index}>
          <h2>{type}</h2>
          <Button type={type} {...props} aria-label={`Skin Button ${type}`}>
            Button
          </Button>
        </div>
      ))}
    </div>
  );
};

export const ButtonIcon = () => {
  return (
    <div>
      <Button variant="primary" {...defaultProps} aria-label="Skin Button">
        <BtnCell>
          <Icon className="btn__icon" name="menu" />
          <span>Button</span>
        </BtnCell>
      </Button>
    </div>
  );
};

export const _SkinFilterButton = () => {
  return (
    <div>
      <h2>Skin Filter Button</h2>
      <SkinFilterButton {...defaultProps} aria-label="Skin Filter Button">
        SkinFilterButton
      </SkinFilterButton>
      <br /> <br /> <br />
      <h2>Skin Filter Link</h2>
      <SkinFilterButton {...defaultProps} aria-label="Skin Filter Link" type={'filter-link'}>
        Link
      </SkinFilterButton>
      <h2>Selected Skin Filter Link</h2>
      <SkinFilterButton {...defaultProps} aria-label="Skin Filter Link" type={'filter-link'} selected>
        Link
      </SkinFilterButton>
    </div>
  );
};
export default story;
