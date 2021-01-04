import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import {Dialog, DialogDefaultProps, DialogOpen, HeaderFooterDialog, HeaderFooterDialogDefaultProps} from './mocks';

describe('dialog-base', () => {
  xit('renders basic version', async () => {
    const {getByRole, getByLabelText, getByText} = await render(<Dialog />);

    expect(getByRole('dialog', {hidden: true})).toHaveAttribute('hidden');
    expect(getByLabelText(DialogDefaultProps.a11yCloseText)).toHaveClass('lightbox-dialog__close');
    expect(getByText(DialogDefaultProps.children)).toHaveClass('lightbox-dialog__main');
  });

  xit('renders with header and footer', async () => {
    const {getByRole, getByLabelText, getByText} = await render(<HeaderFooterDialog />);

    expect(getByRole('dialog', {hidden: true})).toHaveAttribute('hidden');
    expect(getByLabelText(HeaderFooterDialogDefaultProps.a11yCloseText)).toHaveClass('lightbox-dialog__close');
    expect(getByText(HeaderFooterDialogDefaultProps.children)).toHaveClass('lightbox-dialog__main');
    //expect(getByText(HeaderFooterDialogDefaultProps.header)).has.tagName('H2');
    expect(getByText(HeaderFooterDialogDefaultProps.header).parentElement).toHaveClass('lightbox-dialog__header');
    expect(getByText(HeaderFooterDialogDefaultProps.footer)).toHaveClass('lightbox-dialog__footer');
  });

  it('renders in open state', async () => {
    const {getByRole} = await render(<DialogOpen />);
    expect(getByRole('dialog')).not.toHaveAttribute('hidden');
  });

  xit('renders non modal', async () => {
    const {getByRole} = await render(<Dialog isModal={false} />);
    expect(getByRole('dialog', {hidden: true})).toHaveAttribute('aria-live', 'polite');
  });
});
