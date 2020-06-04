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
import {NoticeType, NoticeVariant, SkinNotice} from './index';
import {IconType} from '../Icon';
import Button from '../Button';
import {toStoryObj} from '../../.storybook/util/utils';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: SkinNotice,
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
  const type = select('type', typeOptions, 'page', '1') as NoticeType;
  const hidden = boolean('hidden', false, '1');

  const props = {...defaultProps, type};
  return (
    <div>
      {noticeList.map((notice, index) => (
        <SkinNotice
          {...props}
          title={notice.title}
          variant={notice.color as NoticeVariant}
          id={`page-notice-${index}`}
          a11yText={`page notice ${index}`}
          iconType={notice.icon as IconType}
          content={<p>{notice.color} message</p>}
          hidden={hidden}
          key={index}
        >
          {type !== 'inline' && (
            <Button variant="secondary" className="btn--transparent" aria-label="Read More Button">
              Continue
            </Button>
          )}
        </SkinNotice>
      ))}
    </div>
  );
};
export default story;
