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
import {Breadcrumb, SkinBreadcrumb, SkinBreadcrumbItem} from './index';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: Category.SKINDS6,
  component: Breadcrumb,
  decorators: [withKnobs, withA11y]
};

const defaultProps = {
  style: {height: 40}
};
const breadcrumbItems = [
  'skin',
  'Cell Phones, Smart Watches & Accessories',
  'Smart Watch Accessories',
  'Smart Watch Bands'
];
const isCurrent = (i: number, curr: number): object => (i === curr ? {['aria-current']: 'location'} : {});

export const _Breadcrumb = () => {
  const props = {...defaultProps};
  return (
    <div>
      <h3>Breadcrumb with Buttons</h3>
      <SkinBreadcrumb id="breadcrumbs-heading" {...props} onClick={console.log} a11yText="breadcrumbs">
        {breadcrumbItems.map((name) => (
          <SkinBreadcrumbItem key={name}>{name}</SkinBreadcrumbItem>
        ))}
      </SkinBreadcrumb>
      <h3>Breadcrumb with Anchor tags</h3>
      <SkinBreadcrumb id="breadcrumbs-heading-2" {...props} onClick={console.log} a11yText="breadcrumbs example">
        {breadcrumbItems.map((name) => (
          <SkinBreadcrumbItem key={name} href="#">
            {name}
          </SkinBreadcrumbItem>
        ))}
      </SkinBreadcrumb>
    </div>
  );
};
export default story;
