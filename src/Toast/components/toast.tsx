import * as React from 'react';
import DialogBase, {DialogBaseProps} from '../../components/DialogBase';
import classNames from 'classnames';

export interface ToastProps<T> extends DialogBaseProps<T> {
  onClose?: any;
}

export const Toast = ({onClose = () => {}, ...props}: ToastProps<any>) => {
  const handleCloseBtnClick = (e) => onClose(e);
  return (
    <DialogBase
      {...props}
      isModal={false}
      baseEl="aside"
      classPrefix="toast-dialog"
      buttonPosition="right"
      className={classNames(props.className, 'toast-dialog--transition')}
      onCloseBtnClick={handleCloseBtnClick}
    />
  );
};
export default Toast;
