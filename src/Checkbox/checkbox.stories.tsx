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
import Checkbox, {SkinCheckbox} from './index';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: Checkbox,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {};

export const _Checkbox = () => {
  const size = select('Sizes', ['large', 'regular'], 'regular');
  const disabled = boolean('disabled', false);
  const props = {...defaultProps, size, disabled};
  return (
    <div>
      <SkinCheckbox aria-label="Default checkbox example" name="checkbox" {...props} />
      <br />
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Choose an Option</legend>
        {[1, 2, 3].map((item, index) => (
          <span className="field" key={index}>
            <SkinCheckbox
              id={`group-checkbox-inline-${index}`}
              className="field__control"
              aria-label={`checkbox inline ${index}`}
              name="checkbox_group"
              {...props}
              value={item}
            />
            <label className="field__label field__label--end" htmlFor={`group-checkbox-inline-${index}`}>
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
            <SkinCheckbox
              id={`group-checkbox-stacked-${index}`}
              className="field__control"
              aria-label={`checkbox stacked ${index}`}
              name="checkbox_group"
              {...props}
              value={item}
            />
            <label className="field__label field__label--end" htmlFor={`group-checkbox-stacked-${index}`}>
              Option {index + 1}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};
export default story;
