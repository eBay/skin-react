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
import {withA11y} from '@storybook/addon-a11y';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {SkinNotice, WindowNotice} from './index';
import Button from '../Button';
import {SkinWindowNotice} from './index';

const story: any = {
  title: Category.SKINDS6,
  component: WindowNotice,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {
  id: 'window-notice'
};
export const _NoticeWindow = () => {
  const hidden = boolean('hidden', false);
  return (
    <div>
      <SkinWindowNotice
        {...defaultProps}
        title="Your first order has been placed!"
        iconName="confirmation-filled"
        id="window-notice-1"
        hidden={hidden}
        a11yText="Window Notice"
        footer={
          <Button size="large" href={'#'}>
            Continue
          </Button>
        }
      >
        <p>You'll get a confirmation email soon. The rest of your items are now ready to checkout.</p>
      </SkinWindowNotice>
    </div>
  );
};
export default story;
