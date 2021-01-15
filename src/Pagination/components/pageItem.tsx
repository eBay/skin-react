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
import {getFakeTag} from '../../skin-utils';
import * as Skin from '../../skin';
export type PageItemProps = React.HTMLProps<HTMLButtonElement | HTMLAnchorElement> &
  Skin.Selected & {
    isCurrent?: boolean;
  };
export const PageItem = ({selected, isCurrent, ...props}: PageItemProps) => {
  const tag = getFakeTag(!!props.href, 'a', 'button');
  const className = classNames('pagination__item', props.className);
  const HTMLProps = {...props, ['aria-current']: isCurrent ? 'page' : '', className};
  return <li>{React.createElement(tag, HTMLProps)}</li>;
};
