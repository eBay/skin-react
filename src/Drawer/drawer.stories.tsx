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

import Drawer from './components/drawer';
const story: any = {
  title: 'skin',
  component: Drawer
};
const defaultProps = {};
export const _Drawer = () => {
  const [open, setOpen] = React.useState(true);
  const props = {...defaultProps, open};
  return (
    <div>
      <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
        Open Drawer
      </button>
      {Array(100)
        .fill(1)
        .map((x, i) => (
          <p key={i}>{i + 1}</p>
        ))}
      <Drawer {...props} header={<h2 id="drawer-title">Heading</h2>} onClose={() => setOpen(false)}>
        {Array(100)
          .fill(1)
          .map((x, i) => (
            <p key={i}>{i + 1}</p>
          ))}
      </Drawer>
    </div>
  );
};
export default story;
