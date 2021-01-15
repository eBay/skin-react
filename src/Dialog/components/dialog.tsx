import * as React from 'react';
import DialogBase, {DialogBaseProps} from '../../components/DialogBase';

export type DialogProps = DialogBaseProps<HTMLElement> & {
  onClose?: any;
};
export const DialogBaseWithClose = ({onClose, ...props}: DialogProps) => {
  const handleCloseBtnClick = (e) => onClose && onClose(e);
  const handleBackgroundClick = (e) => onClose && onClose(e);
  return <DialogBase onCloseBtnClick={handleCloseBtnClick} onBackgroundClick={handleBackgroundClick} {...props} />;
};

export default DialogBaseWithClose;
