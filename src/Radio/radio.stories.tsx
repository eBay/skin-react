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
import Radio, {SkinRadio} from './index';
import {select, withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {toStoryObj} from '../../.storybook/util/utils';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: Radio,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {};
const Sizeoptions = toStoryObj([undefined, 'small', 'large']);

export const _Radio = () => {
  const size = select('Sizes', Sizeoptions, undefined);
  const props = {...defaultProps};
  return (
    <div>
      <SkinRadio {...props} size={size} aria-label="Radio" />
      <br />
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Choose an Option</legend>
        {[1, 2, 3].map((item, index) => (
          <span className="field" key={index}>
            <SkinRadio
              id={`group-radio-inline-${index}`}
              className="field__control"
              aria-label={`radio inline ${index}`}
              name="radio_group"
              {...props}
              value={item}
            />
            <label className="field__label field__label--end" htmlFor={`group-radio-inline-${index}`}>
              Option {index + 1}
            </label>
          </span>
        ))}
      </fieldset>
      <br />
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Choose an Option</legend>
        {[1, 2, 3].map((item, index) => (
          <div className="field" key={index}>
            <SkinRadio
              id={`group-radio-stacked-${index}`}
              className="field__control"
              aria-label={`radio stacked ${index}`}
              name="radio_group"
              {...props}
              value={item}
            />
            <label className="field__label field__label--end" htmlFor={`group-radio-stacked-${index}`}>
              Option {index + 1}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};
export default story;
