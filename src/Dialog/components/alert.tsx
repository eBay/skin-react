import * as React from 'react';
import classNames from 'classnames';
import {DialogProps} from './dialog';
import {useFocusState} from '../../skin-utils';
import {useEffect} from 'react';
import DialogBase from '../../components/DialogBase';

export const AlertDialog = ({confirmText = 'OK', onClose, ...props}: DialogProps<any> & {confirmText?: string}) => {
  const [confirmBtnRef, setConfirmBtnFocus] = useFocusState();
  const handleCloseBtnClick = (e) => onClose && onClose(e);

  useEffect(() => {
    if (props.open) {
      setConfirmBtnFocus();
    }
  }, [props.open]);

  const confirmId = 'alert-dialog-confirm';
  const mainId = 'alert-dialog-main';
  return (
    <DialogBase
      {...props}
      role="alertdialog"
      classPrefix="lightbox-dialog"
      ignoreEscape
      windowType={'compact'}
      buttonPosition={'hidden'}
      className={classNames(props.className, 'lightbox-dialog--mask-fade')}
      windowClass={classNames('lightbox-dialog__window--fade', props.windowClass)}
      footer={
        <button
          className="btn btn--primary lightbox-dialog__confirm"
          ref={confirmBtnRef}
          id={confirmId}
          aria-describedby={mainId}
          onClick={handleCloseBtnClick}
        >
          {confirmText}
        </button>
      }
    />
  );
};

export default AlertDialog;
