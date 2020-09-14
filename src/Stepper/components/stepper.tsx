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
import classNames from 'classnames';

export interface StepperProps<T> extends React.HTMLProps<T> {
  direction?: string | 'column';
}
const _getType = ({type, number}) => (number ? 'default' : type);
export const Stepper = ({direction = 'row', children, ...props}: StepperProps<any>) => {
  const childrenArray = React.Children.toArray(children);
  // @ts-ignore
  const currentIndex = childrenArray.findIndex((item) => item.props.current);
  const getStepClass = (stepItem, index, list) => {
    const type = stepItem.props.type;
    let typeClass = _getType(stepItem.props);
    const next = list && list[index + 1];
    const transition = next && _getType(next.props);

    if (!typeClass) {
      if (index < currentIndex) {
        typeClass = 'confirmation';
      } else if (index === currentIndex) {
        typeClass = 'current';
      } else {
        typeClass = 'upcoming';
      }
    }
    return {
      type: !type && index < currentIndex ? 'confirmation' : type,
      current: currentIndex === index,
      typeClass,
      transition,
      ...stepItem.props
    };
  };
  return (
    <div {...props} className={classNames('stepper', {'stepper--vertical': direction === 'column'}, props.className)}>
      <div className="stepper__items" role="list">
        {React.Children.map(children, (child, index) => {
          const stepperPostfix = index > 0 && <hr className="stepper__separator" role="presentation" />;
          const stepProps = getStepClass(child, index, childrenArray);
          const newChild = React.isValidElement(child) && React.cloneElement(child, {...stepProps});
          return (
            <>
              {stepperPostfix}
              {newChild}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Stepper;
