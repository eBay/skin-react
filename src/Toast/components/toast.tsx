import * as React from 'react';
import DialogBase, {DialogBaseProps} from '../../DialogBase';
import classNames from 'classnames';

export interface ToastProps<T> extends DialogBaseProps<T> {
  onClose?: any;
}

export const Toast = ({onClose, ...props}: ToastProps<any>) => {
  const handleCloseBtnClick = (e) => onClose && onClose(e);
  return (
    <DialogBase
      {...props}
      tag="aside"
      classPrefix="toast"
      buttonPosition="right"
      className={classNames(props.className, 'toast--transition')}
      onCloseBtnClick={handleCloseBtnClick}
    />
  );
};
export default Toast;
