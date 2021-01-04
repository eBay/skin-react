/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */
import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';

declare module '*.svg' {
  import {ReactElement, SVGProps} from 'react';
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
