/*
 * ************************************************************
 *  Copyright 2021 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';

import {Select, Option} from '../index';
const story: any = {
  title: 'skin',
  component: Select
};
const defaultProps = {};
export const _Select = () => {
  const props = {...defaultProps};
  return (
    <div>
      <h3>Default </h3>
      <Select>
        <option value="item1">Option 1</option>
        <option value="item2">Option 2</option>
        <option value="item3">Option 3</option>
      </Select>
      <h3>Disabled</h3>
      <Select disabled>
        <option value="item1">Option 1</option>
        <option value="item2" selected>
          Option 2
        </option>
        <option value="item3">Option 3</option>
      </Select>
      <h3>Selected option</h3>
      <Select>
        <option value="item1">Option 1</option>
        <option value="item2" selected>
          Option 2
        </option>
        <option value="item3">Option 3</option>
      </Select>
      <h3>Unselected </h3>
      <Select>
        <option value="0" disabled selected>
          -select-
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <h3>Borderless </h3>
      <Select borderless>
        <option value="0" disabled selected>
          -select-
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
      <h3>Group</h3>
      <Select>
        <Option optgroup="a">1</Option>
        <Option optgroup="a">2</Option>
        <Option>3</Option>
        <Option>4</Option>
      </Select>
      <h3>Invalid</h3>
      <Select aria-invalid="true" aria-label="Please select a option">
        <Option optgroup="a">1</Option>
        <Option optgroup="a">2</Option>
        <Option>3</Option>
        <Option>4</Option>
      </Select>
      <h3>Controlled </h3>
      <Select name="formSelect" value="3">
        <Option optgroup="a">1</Option>
        <Option optgroup="a">2</Option>
        <Option>3</Option>
        <Option>4</Option>
      </Select>
    </div>
  );
};
export default story;
