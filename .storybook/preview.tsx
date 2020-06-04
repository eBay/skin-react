import * as React from 'react';
import {addDecorator} from '@storybook/react';
import './storybook.css';
import './util/skincss';
import '../src/Grid/grid-full.css';
import {IconSymbols} from '../src/Icon';

addDecorator((storyFn) => {
  return (
    <div style={{marginTop: '30px', marginLeft: '30px'}}>
      {storyFn()}
      <IconSymbols />
    </div>
  );
});
