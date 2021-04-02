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

import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';
import {Field, FieldLabel, FieldControl, FieldDescription} from '../index';
import Textbox from '../../Textbox';

const story: any = {
  title: 'skin',
  component: Field,
  decorators: [withKnobs, withA11y]
};
const defaultProps = {};
export const _Field = () => {
  const props = {...defaultProps};
  return (
    <div>
      {[undefined, 'confirmation', 'information', 'attention'].map((color, i) => (
        <Field {...props} isBlock key={i}>
          <FieldLabel htmlFor={`field-${color}`} isStacked>
            Field
          </FieldLabel>
          <FieldControl>
            <Textbox id={`field-${color}`} isInvalid={color === 'attention'} />
          </FieldControl>
          <FieldDescription id={`field-${color}-descripiton`} color={color}>
            <span>Field description</span>
          </FieldDescription>
        </Field>
      ))}
    </div>
  );
};
export default story;
