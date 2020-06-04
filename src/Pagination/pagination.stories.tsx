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
import {SkinPageItem, SkinPagination} from './index';
import {boolean, withKnobs, number} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: SkinPagination,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {
  prevHref: '#',
  nextHref: '#'
};
const list = Array(20)
  .fill(1)
  .map((x: any, i: any) => i + 1);

export const _Pagination = () => {
  const hrefBool = boolean('show Link Version', false, '1');
  const pageSize = number(
    'pageSize',
    9,
    {
      range: true,
      min: 3,
      max: 9,
      step: 1
    },
    '1'
  );
  const props = hrefBool ? {...defaultProps, pageSize} : {pageSize};
  const pageItemsProps = hrefBool ? {href: '#'} : {};
  return (
    <div>
      <br />
      <h1>Skin Pagination</h1>
      <SkinPagination a11yText="SkinPagination" onChangePage={(...args) => console.log(...args)} {...props}>
        {list.map((name, index) => (
          <SkinPageItem key={`${name}-${hrefBool ? 'link' : 'btn'}}`} {...pageItemsProps}>
            {name}
          </SkinPageItem>
        ))}
      </SkinPagination>
    </div>
  );
};
export default story;
