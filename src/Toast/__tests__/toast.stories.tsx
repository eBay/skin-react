/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Erik Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';

import Toast from '../components/toast';
const story: any = {
  title: 'skin',
  component: Toast
};
const defaultProps = {allyCloseText: 'Close Toast'};
export const _Toast = () => {
  const [open, setOpen] = React.useState(false);
  const props = {...defaultProps, open};
  return (
    <div>
      <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
        Open Toast
      </button>
      <Toast
        {...props}
        header={
          <h2 id="toast-title" className="toast-dialog__title">
            Heading
          </h2>
        }
        onClose={() => setOpen(false)}
        footer={
          <button accessKey="v" className="btn btn--primary toast-dialog__confirm" onClick={() => setOpen(!open)}>
            View Account
          </button>
        }
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p>
          <a href="http://www.ebay.com">www.ebay.com</a>
        </p>
      </Toast>
    </div>
  );
};
export default story;
