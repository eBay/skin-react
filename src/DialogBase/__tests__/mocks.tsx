import DialogBase from '../index';
import * as React from 'react';
export const DialogDefaultProps = {
  classPrefix: 'lightbox-dialog',
  class: 'lightbox-dialog--mask-fade',
  windowClass: 'lightbox-dialog__window--fade',
  a11yCloseText: 'close',
  children: 'body content'
};
export const Dialog = (props) => <DialogBase {...DialogDefaultProps} {...props} />;
export const HeaderFooterDialogDefaultProps = {
  classPrefix: 'lightbox-dialog',
  class: 'lightbox-dialog--mask-fade',
  windowClass: 'lightbox-dialog__window--fade',
  a11yCloseText: 'close',
  footer: 'footer content',
  header: 'title content',
  children: 'body content'
};
export const HeaderFooterDialog = (props) => <DialogBase {...HeaderFooterDialogDefaultProps} {...props} />;

export const DialogOpen = (props) => <Dialog open {...props} />;
