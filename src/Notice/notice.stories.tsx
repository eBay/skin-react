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
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {PageNotice, WindowNotice} from './index';
import {IconName} from '../Icon';
import Button from '../Button';
import {toStoryObj} from '../../.storybook/util/utils';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: PageNotice,
  decorators: [withKnobs, withA11y]
};
const noticeList = [
  {
    title: 'Your first order has been placed!',
    color: 'celebration',
    icon: 'confirmation-filled'
  },
  {
    color: 'confirmation',
    icon: 'confirmation-filled'
  },
  {
    color: 'information',
    icon: 'information-filled'
  },
  {
    color: 'attention',
    icon: 'attention-filled'
  }
];

const defaultProps = {
  id: 'page-notice'
};
const typeOptions = toStoryObj(['page', 'section', 'inline']);

export const _PageNotice = () => {
  return (
    <div>
      <PageNotice
        {...defaultProps}
        title={'Title copy goes here'}
        id={`page-notice-1`}
        a11yText={`page notice 1`}
        footer={
          <Button priority="secondary" className="btn--transparent" aria-label="Read More Button">
            Action
          </Button>
        }
      >
        <p>Details...</p>
      </PageNotice>
    </div>
  );
};

export const _WindowNotice = () => {
  const hidden = boolean('hidden', false);
  return (
    <div>
      <WindowNotice
        {...defaultProps}
        title="Your first order has been placed!"
        id="window-notice-1"
        hidden={hidden}
        a11yText="Window Notice"
        footer={
          <Button size="large" aria-label="Continue Button">
            Continue
          </Button>
        }
      >
        <p>You'll get a confirmation email soon. The rest of your items are now ready to checkout.</p>
      </WindowNotice>
    </div>
  );
};

export default story;
