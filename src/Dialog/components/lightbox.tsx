import * as React from 'react';
import classNames from 'classnames';
import {DialogBaseWithClose, DialogProps} from './dialog';

export const LightBoxDialog = ({variant, ...props}: DialogProps<any> & {variant?: '_mini'}) => {
  const isMini = variant === '_mini';
  const buttonPosition = (isMini && 'bottom') || props.buttonPosition || 'right';
  return (
    <DialogBaseWithClose
      {...props}
      classPrefix="lightbox-dialog"
      buttonPosition={buttonPosition}
      className={classNames(props.className, 'lightbox-dialog--mask-fade')}
      windowClass={classNames(
        'lightbox-dialog__window--fade',
        {'lightbox-dialog__window--mini': isMini},
        props.windowClass
      )}
    />
  );
};

export default LightBoxDialog;
