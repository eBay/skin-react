import * as React from 'react';
import {IconSymbols} from '../../src/Icon';

export const withSkinIcons = (Story) => (
  <div style={{margin: '3em'}}>
    <Story />
    <IconSymbols />
  </div>
);

export default withSkinIcons;
