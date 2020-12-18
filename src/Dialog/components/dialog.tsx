import * as React from 'react';
import DialogBase, {DialogBaseProps} from '../../DialogBase';
import classNames from 'classnames';

export interface DialogProps<T> extends DialogBaseProps<T> {
  onClose?: any;
}
export const Dialog = ({onClose, ...props}: DialogProps<any>) => {
  const handleCloseBtnClick = (e) => onClose && onClose(e);
  const handleBackgroundClick = (e) => onClose && onClose(e);
  return <DialogBase {...props} onCloseBtnClick={handleCloseBtnClick} onBackgroundClick={handleBackgroundClick} />;
};
export const FullScreenDialog = (props: DialogProps<any>) => {
  return (
    <Dialog
      {...props}
      classPrefix="fullscreen-dialog"
      windowClass={classNames('fullscreen-dialog__window--slide', props.windowClass)}
    />
  );
};
export const LightBoxDialog = ({variant, ...props}: DialogProps<any> & {variant?: '_mini'}) => {
  const isMini = variant === '_mini';
  const buttonPosition = (isMini && 'bottom') || props.buttonPosition || 'right';
  return (
    <Dialog
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
export const PanelDialog = ({position, ...props}: DialogProps<any> & {position?: 'end'}) => {
  return (
    <Dialog
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
export default FullScreenDialog;
