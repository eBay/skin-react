import * as React from 'react';
import classNames from 'classnames';
import {DialogBaseWithClose, DialogProps} from './dialog';

export const FullScreenDialog = (props: DialogProps<any>) => {
  return (
    <DialogBaseWithClose
      {...props}
      classPrefix="fullscreen-dialog"
      windowClass={classNames('fullscreen-dialog__window--slide', props.windowClass)}
    />
  );
};

export default FullScreenDialog;
