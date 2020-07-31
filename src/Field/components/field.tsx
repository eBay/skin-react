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

export const getTag = (isBlock: boolean) => (isBlock ? 'div' : 'span');

export interface FieldProps<T> extends React.HTMLProps<T> {
  isBlock?: boolean;
  isAlignTop?: boolean;
  isTable?: boolean;
  isFluid?: boolean;
  label?: string;
}
export const Field = ({
  isBlock,
  isAlignTop,
  isTable,
  isFluid,
  label,
  ...props
}: FieldProps<HTMLSpanElement | HTMLDivElement>) => {
  const className = classNames(
    'field',
    {
      'field--fluid': isFluid,
      'field--align-top': isAlignTop,
      'field--table': isTable
    },
    props.className
  );
  return React.createElement(getTag(isBlock), {...props, className});
};
export default Field;

export interface FieldLabelProps<T> extends React.HTMLProps<T> {
  isEnd?: boolean;
  isStacked?: boolean;
}
export const FieldLabel = ({isEnd, isStacked, ...props}: FieldLabelProps<HTMLLabelElement>) => {
  const className = classNames(
    'field__label',
    {
      'field__label--end': isEnd,
      'field__label--stacked': isStacked,
      'field__label--disabled': props.disabled
    },
    props.className
  );
  return <label {...props} className={className} />;
};

export interface FieldControlProps<T> extends React.HTMLProps<T> {
  isFluid?: boolean;
  isBlock?: boolean;
}
export const FieldControl = ({isFluid, isBlock, ...props}: FieldControlProps<HTMLSpanElement | HTMLDivElement>) => {
  const className = classNames(
    'field__control',
    {
      'field__control--fluid': isFluid
    },
    props.className
  );
  return React.createElement(getTag(isBlock), {...props, className});
};

export interface FieldDescriptionProps<T> extends React.HTMLProps<T> {
  color?: 'confirmation' | 'information' | 'attention' | string;
  isBlock?: boolean;
}
export const FieldDescription = ({
  isBlock,
  color,
  ...props
}: FieldDescriptionProps<HTMLSpanElement | HTMLDivElement>) => {
  const className = classNames(
    'field__description',
    {
      [`field__description--${color}`]: color
    },
    props.className
  );
  return React.createElement(getTag(isBlock), {...props, className});
};
