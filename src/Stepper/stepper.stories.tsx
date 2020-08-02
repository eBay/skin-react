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
import {Category} from '../../.storybook/util/stories-hierarchy';
import Stepper from './';
import {StepperItem} from './';
const story: any = {
  title: Category.SKINDS6,
  component: Stepper
};
const defaultProps = {};
export const _Stepper = () => {
  const props = {...defaultProps};
  return (
    <div>
      <Stepper {...props}>
        <StepperItem>Started</StepperItem>
        <StepperItem>Shipped</StepperItem>
        <StepperItem current>Transit</StepperItem>
        <StepperItem>Delivered</StepperItem>
      </Stepper>
    </div>
  );
};
export default story;
