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
      <h3>Standard flow horizontal</h3>
      <Stepper {...props}>
        <StepperItem>Started</StepperItem>
        <StepperItem>Shipped</StepperItem>
        <StepperItem current>Transit</StepperItem>
        <StepperItem>Delivered</StepperItem>
      </Stepper>

      <h3>Standard flow vertical/column</h3>
      <Stepper direction="column">
        <StepperItem>Started</StepperItem>
        <StepperItem>Shipped</StepperItem>
        <StepperItem current>Transit</StepperItem>
        <StepperItem>Delivered</StepperItem>
      </Stepper>

      <h3>Step after current completed flow</h3>
      <Stepper {...props}>
        <StepperItem>Started</StepperItem>
        <StepperItem current>Shipped</StepperItem>
        <StepperItem>Transit</StepperItem>
        <StepperItem type="confirmation">Delivered</StepperItem>
      </Stepper>

      <h3>Number stepper</h3>
      <Stepper>
        <StepperItem number={1} />
        <StepperItem number={2} />
        <StepperItem number={3} current />
        <StepperItem number={4} />
      </Stepper>
    </div>
  );
};
export default story;
