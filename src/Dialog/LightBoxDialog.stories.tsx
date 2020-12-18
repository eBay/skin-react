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
import {LightBoxDialog} from './components/dialog';
import {select, withKnobs} from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';
const story: any = {
  title: Category.SKINDS6,
  component: LightBoxDialog,
  decorators: [withKnobs, withA11y]
};
const defaultProps = {};
export const _LightBoxDialog = () => {
  const [open, setOpen] = React.useState(false);
  const props = {...defaultProps, open};
  return (
    <div>
      <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
        Open LightBoxDialog
      </button>
      <LightBoxDialog {...props} onClose={() => setOpen(false)} header={<h2>Heading</h2>}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          <a href="http://www.ebay.com">www.ebay.com</a>
        </p>
      </LightBoxDialog>
    </div>
  );
};
export default story;
