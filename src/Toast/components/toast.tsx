import * as React from 'react';
import DialogBase, {DialogBaseProps} from '../../components/DialogBase';
import classNames from 'classnames';
export type Props = React.HTMLProps<HTMLElement> & {};
export type ToastProps = DialogBaseProps<HTMLElement> & {
  onClose?: any;
};

export const Toast = ({onClose = () => {}, ...props}: ToastProps) => {
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
