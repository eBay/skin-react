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

import {Icon, IconName} from '../index';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {icons} from '../../util/utils';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: 'skin',
  component: Icon,
  decorators: [withKnobs, withA11y]
};

export const _Icon = () => (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {icons.map((name) => (
      <div key={name} style={{flex: '1 0 21%'}}>
        <Icon name={name} style={{margin: '30px', maxWidth: '29px', maxHeight: '29px'}} />
        {name}
      </div>
    ))}
  </div>
);
export default story;
