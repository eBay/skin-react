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

import {Details} from '../index';
import {withKnobs, boolean, select} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: 'skin',
  decorators: [withKnobs, withA11y]
};

export const _Details = () => {
  const type = select('Type', ['center', 'rtl', 'regular'], 'regular');
  const size = select('Size', ['small', 'regular'], 'regular');
  return (
    <div>
      <h1>Default Details</h1>
      <Details text="Default Detail">Details</Details>
      <h1>Custom Details</h1>
      <Details text="Details" type={type} size={size} open>
        Details
      </Details>
    </div>
  );
};
export default story;
