/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya, Michael Sinnes
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {mount} from 'enzyme';
import Stepper, {StepperItem} from '../index';
import Badge from '../../Badge';

const getStepperItems = (stepperNode) => stepperNode.childAt(0).childAt(0);

describe('Stepper', () => {
  it('should render a Stepper', () => {
    const component = mount(<Stepper />);
    expect(component.find('.stepper__items')).toBeTruthy();
  });

  it('should render children', () => {
    const component = mount(
      <Stepper>
        <StepperItem>FirstChild</StepperItem>
      </Stepper>
    );
    expect(component.find(StepperItem).length).toEqual(1);
  });

  it('should render the current item in the stepper', () => {
    const component = mount(
      <Stepper>
        <StepperItem current>FirstChild</StepperItem>
      </Stepper>
    );
    expect(getStepperItems(component).childAt(0).prop('current')).toBe(true);
  });

  it('should render a vertical stepper if the direction prop is "column"', () => {
    const component = mount(
      <Stepper direction="column">
        <StepperItem current>FirstChild</StepperItem>
      </Stepper>
    );
    expect(component.childAt(0).prop('className')).toContain('stepper--vertical');
  });

  it('should set item prior to current to confirmation type and typeClass', () => {
    const component = mount(
      <Stepper>
        <StepperItem>FirstChild</StepperItem>
        <StepperItem current>SecondChild</StepperItem>
      </Stepper>
    );
    expect(getStepperItems(component).childAt(0).prop('typeClass')).toEqual('confirmation');
    expect(getStepperItems(component).childAt(0).prop('type')).toEqual('confirmation');
  });

  it('should set the current item to current typeClass', () => {
    const component = mount(
      <Stepper>
        <StepperItem>FirstChild</StepperItem>
        <StepperItem current>SecondChild</StepperItem>
      </Stepper>
    );
    expect(getStepperItems(component).childAt(2).prop('typeClass')).toEqual('current');
  });

  it('should set upcoming items to upcoming typeClass', () => {
    const component = mount(
      <Stepper>
        <StepperItem>FirstChild</StepperItem>
        <StepperItem current>SecondChild</StepperItem>
        <StepperItem>ThirdChild</StepperItem>
      </Stepper>
    );
    expect(getStepperItems(component).childAt(4).prop('typeClass')).toEqual('upcoming');
  });

  it('should set upcoming items with a to confirmation typeClass and a confirmation filled icon', () => {
    const component = mount(
      <Stepper>
        <StepperItem>FirstChild</StepperItem>
        <StepperItem current>SecondChild</StepperItem>
        <StepperItem type="confirmation">ThirdChild</StepperItem>
      </Stepper>
    );
    const child = getStepperItems(component).childAt(4);
    expect(child.prop('typeClass')).toEqual('confirmation');
    expect(child.childAt(0).childAt(0).childAt(0).prop('name')).toEqual('confirmation-filled');
  });

  it('should render a number in the step item if a number is passed it', () => {
    const component = mount(
      <Stepper>
        <StepperItem number={1} current>
          FirstChild
        </StepperItem>
      </Stepper>
    );
    const icon = getStepperItems(component).childAt(0).childAt(0).childAt(0).childAt(0);
    expect(icon.is(Badge)).toBe(true);
    expect(icon.prop('value')).toEqual(1);
  });
});
