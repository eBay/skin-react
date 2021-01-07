import * as React from 'react';
import DialogBase, {DialogBaseProps} from '../../components/DialogBase';
import classNames from 'classnames';

export interface DialogProps<T> extends DialogBaseProps<T> {
  onClose?: any;
}
export const DialogBaseWithClose = ({onClose, ...props}: DialogProps<any>) => {
  const handleCloseBtnClick = (e) => onClose && onClose(e);
  const handleBackgroundClick = (e) => onClose && onClose(e);
  return <DialogBase onCloseBtnClick={handleCloseBtnClick} onBackgroundClick={handleBackgroundClick} {...props} />;
};

export default DialogBaseWithClose;
