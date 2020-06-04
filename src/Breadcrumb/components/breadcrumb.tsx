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
import * as Skin from '../../skin';

export interface BreadcrumbProps<T> extends Skin.Role, React.HTMLProps<T> {
  a11yText?: string;
}
export const Breadcrumb = ({a11yText, id, role = 'navigation', ...props}: BreadcrumbProps<HTMLElement>) => {
  const className = classNames('breadcrumbs', props.className);
  const HTMLProps = {...props, className, role};
  return (
    <nav aria-labelledby={id} {...HTMLProps}>
      <h2 id={id} className="clipped">
        {a11yText}
      </h2>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default Breadcrumb;
