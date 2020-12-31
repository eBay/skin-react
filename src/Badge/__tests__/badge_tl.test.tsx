/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Aaron Nance
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import React from 'react';
import {render} from '@testing-library/react';
import {SkinBadge} from '../index';

it('renders defaults', async () => {
  const {getByText} = await render(<SkinBadge number={5} />);
  expect(getByText('5')).toBeInTheDocument();
});

it('renders number with rounded-up value', async () => {
  const {getByText} = await render(<SkinBadge number={5.6} />);
  expect(getByText('5')).toBeInTheDocument();
});

it('does not render with negative value', async () => {
  const {queryByText} = await render(<SkinBadge number={-5} />);
  expect(queryByText(/\d+/)).toBeNull();
});

describe('given number is a string', () => {
  it('renders number with coerced string', async () => {
    const {getByText} = await render(<SkinBadge number="5" />);
    expect(getByText('5')).toBeInTheDocument();
  });

  it('renders number with rounded-up string', async () => {
    const {getByText} = await render(<SkinBadge number="5.6" />);
    expect(getByText('5')).toBeInTheDocument();
  });

  it('does not renders with an invalid string', async () => {
    const {queryByText} = await render(<SkinBadge number="five" />);
    expect(queryByText(/\d+/)).toBeNull();
  });

  it('does not renders with a negative string', async () => {
    const {queryByText} = await render(<SkinBadge number="-5" />);
    expect(queryByText(/\d+/)).toBeNull();
  });
});

it('truncates when the value is greater than 99', async () => {
  const {getByText} = await render(<SkinBadge number={150} />);
  expect(getByText('99+')).toBeInTheDocument();
});
