import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import {
  DefaultNotice,
  DefaultNoticeProps,
  InlineNotice,
  InlineNoticeProps,
  TitleFooterNotice,
  TitleFooterNoticeProps
} from './mocks';

describe('notice-icon', () => {
  it('renders basic version', async () => {
    const input = DefaultNoticeProps;
    const {getAllByLabelText, getByText} = await render(<DefaultNotice />);

    const status = getAllByLabelText(input.a11yText)[0].parentElement;
    expect(status).toHaveClass(`${input.prefixClass}__header`);

    const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
    expect(containerUsingLabel).toHaveClass(input.className);

    const content = getByText(input.children);
    expect(content).toHaveClass(`${input.prefixClass}__main`);

    expect(getAllByLabelText(input.a11yText)[0]).toHaveClass('icon--attention-filled');
  });

  it('renders inline version', async () => {
    const input = InlineNoticeProps;
    const {getAllByLabelText} = await render(<InlineNotice />);

    const status = getAllByLabelText(input.a11yText)[0].parentElement;
    const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
    expect(containerUsingLabel).toHaveClass(input.className);
    //expect(containerUsingLabel).has.tagName('DIV');

    expect(getAllByLabelText(input.a11yText)[0]).toHaveClass('icon--information-filled');
    expect(getAllByLabelText(input.a11yText)[0]).toHaveClass('notice-class');
  });

  it('renders title and footer version', async () => {
    const input = TitleFooterNoticeProps;
    const {getAllByLabelText, getByText} = await render(<TitleFooterNotice />);
    const status = getAllByLabelText(input.a11yText)[0].parentElement;
    const containerUsingLabel = status.closest(`[aria-labelledby="${status.id}"]`);
    expect(containerUsingLabel).toHaveClass(input.className);

    const content = getByText(input.children);
    expect(content).toHaveClass(`${input.prefixClass}__main`);

    const footer = getByText(input.footer);
    expect(footer).toHaveClass(`${input.prefixClass}__footer`);

    const title = getByText(input.title);
    expect(title).toHaveClass(`${input.prefixClass}__title`);
  });
});
