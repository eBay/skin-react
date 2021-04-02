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

import {withKnobs, select, boolean, number} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {Badge} from '../index';
import {BgColorsEnum, ColorsEnum} from '../../skin';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: 'skin',
  component: Badge,
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

export const Badges = () => {
  const bgColor = select('Background Color', BgColorOptions, '', 'BG color');
  const content = number(
    'number',
    100,
    {
      range: true,
      min: 1,
      max: 200,
      step: 50
    },
    '1'
  );
  const props = {...defaultProps, bgColor};
  return <Badge {...props} aria-label="unread items" number={content} />;
};
Badges.story = {
  name: 'Badge'
};
export default story;
