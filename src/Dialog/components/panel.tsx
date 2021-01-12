import * as React from 'react';
import classNames from 'classnames';
import {DialogBaseWithClose, DialogProps} from './dialog';

export const PanelDialog = ({position, ...props}: DialogProps & {position?: 'end'}) => {
  return (
    <DialogBaseWithClose
      {...props}
      classPrefix="panel-dialog"
      className={classNames(props.className, 'panel-dialog--mask-fade-slow')}
      windowClass={classNames(
        'panel-dialog__window--slide',
        {'panel-dialog__window--end': position === 'end'},
        props.windowClass
      )}
    />
  );
};

export default PanelDialog;
