import * as React from 'react';
import DialogBase, {DialogBaseProps} from '../../DialogBase';
import classNames from 'classnames';

export interface DialogProps<T> extends DialogBaseProps<T> {
  type?: 'full' | 'fill' | 'left' | 'right';
  onClose?: any;
}

export const Dialog = ({onClose, ...props}: DialogProps<any>) => {
  const isFull = props.type === 'full';
  const isCenter = !props.type || props.type === 'fill';
  const isDocked = props.type === 'left' || props.type === 'right';
  const handleCloseBtnClick = (e) => onClose && onClose(e);
  const handleBackgroundClick = (e) => onClose && onClose(e);

  return (
    <DialogBase
      {...props}
      classPrefix="dialog"
      className={classNames(props.className, {
        'dialog--mask-fade-slow': isDocked,
        'dialog--no-mask': isFull,
        'dialog--mask-fade': isCenter
      })}
      windowClass={classNames({
        [`dialog__window--${props.type}`]: props.type,
        'dialog__window--slide': isDocked || isFull,
        'dialog__window--fade': isCenter
      })}
      onCloseBtnClick={handleCloseBtnClick}
      OnBackgroundClick={handleBackgroundClick}
    />
  );
};
export default Dialog;
