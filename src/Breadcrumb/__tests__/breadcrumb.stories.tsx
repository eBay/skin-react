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

import {Breadcrumb, BreadcrumbItem} from '../index';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import {withA11y} from '@storybook/addon-a11y';

const story: any = {
  title: 'skin',
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

export const _Breadcrumb = () => {
  const props = {...defaultProps};
  return (
    <div>
      <h3>Breadcrumb with Buttons</h3>
      <Breadcrumb id="breadcrumbs-heading" {...props} onClick={console.log} a11yHeadingText="breadcrumbs">
        {breadcrumbItems.map((name) => (
          <BreadcrumbItem key={name}>{name}</BreadcrumbItem>
        ))}
      </Breadcrumb>
      <h3>Breadcrumb with Anchor tags</h3>
      <Breadcrumb id="breadcrumbs-heading-2" {...props} onClick={console.log} a11yHeadingText="breadcrumbs example">
        {breadcrumbItems.map((name) => (
          <BreadcrumbItem key={name} href="#">
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </div>
  );
};
export default story;
