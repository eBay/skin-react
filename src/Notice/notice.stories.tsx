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
import {NoticeType, NoticeVariant, Notice} from './index';
import {IconName} from '../Icon';
import Button from '../Button';
import {toStoryObj} from '../../.storybook/util/utils';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: Notice,
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

export const _Notice = () => {
  const type = select('type', typeOptions, 'page') as NoticeType;
  const hidden = boolean('hidden', false);

  const props = {...defaultProps, type};
  return (
    <div>
      {noticeList.map((notice, index) => (
        <Notice
          {...props}
          title={notice.title}
          variant={notice.color as NoticeVariant}
          id={`page-notice-${index}`}
          a11yText={`page notice ${index}`}
          iconName={notice.icon as IconName}
          content={<p>{notice.color} message</p>}
          hidden={hidden}
          key={index}
        >
          {type !== 'inline' && (
            <Button priority="secondary" className="btn--transparent" aria-label="Read More Button">
              Continue
            </Button>
          )}
        </Notice>
      ))}
    </div>
  );
};
export default story;
