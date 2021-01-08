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
import classNames from 'classnames';
import {ReactNode} from 'react';
import {Icon} from '../../Icon';

const getList = (childrenArray, optGroups = {}) => {
  return childrenArray.reduce((acc, option) => {
    const optgroup = option?.props?.optgroup;
    if (optgroup) {
      if (optGroups[optgroup]) {
        optGroups[optgroup].options.push(option);
      } else {
        acc.push(
          (optGroups[optgroup] = {
            optgroup: optgroup,
            options: [option]
          })
        );
      }
    } else {
      acc.push(option);
    }
    return acc;
  }, []);
};

export interface SelectProps<T> extends Omit<React.HTMLProps<T>, 'onChange'> {
  borderless?: boolean;
  onChange?: (
    e: MouseEvent | KeyboardEvent,
    selectedIndex: number,
    newValue: string | ReadonlyArray<string> | number
  ) => void;
}
export type OptionProps = React.HTMLProps<HTMLOptionElement> & {
  optgroup?: string;
};
export const Option: React.FC<OptionProps> = ({optgroup, ...props}) => <option {...props} />;
export const Select = ({children, borderless, className, style, onChange = () => {}, ...props}: SelectProps<any>) => {
  const childrenArray = React.Children.toArray(children);
  const list = getList(childrenArray);
  const handleOnChange = (e) => {
    const {
      target: {value: newValue, selectedIndex}
    } = e;
    onChange(e, selectedIndex, newValue);
  };
  return (
    <span className={classNames('select', {'select--borderless': borderless}, className)} style={style}>
      <select {...props} onChange={handleOnChange}>
        {list.map((child, key) => {
          if (child.optgroup) {
            return (
              <optgroup label={child.optgroup} key={key}>
                {child.options?.map((optgroupChild, i) => (
                  <option {...optgroupChild.props} key={`${key}-${i}`} />
                ))}
              </optgroup>
            );
          }
          return <option {...child.props} key={key} />;
        })}
      </select>
      <Icon name="dropdown" />
    </span>
  );
};
export default Select;
