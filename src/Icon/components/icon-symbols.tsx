import * as React from 'react';
//@ts-ignore
import IconSymbolsComponent from '-!svg-react-loader!./icons.svg';

export const IconSymbols = (props) => (
  <span style={{display: 'none'}} hidden {...props}>
    <IconSymbolsComponent />
  </span>
);
