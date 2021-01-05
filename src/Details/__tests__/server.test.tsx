import {render} from '@testing-library/react';
import {Details} from '..';
import * as React from 'react';

const defaultProps = {
  text: 'open',
  children: 'body content'
};
describe('details', () => {
  it('renders basic version', async () => {
    const {getByText} = await render(<Details {...defaultProps} />);
    expect(getByText(defaultProps.text)).toHaveClass('details__label');
    expect(getByText(defaultProps.children)).toHaveProperty('tagName', 'P');
    expect(getByText(defaultProps.text).closest('details')).toHaveProperty('open', false);
    expect(getByText(defaultProps.children).closest('details')).toHaveProperty('open', false);
  });

  it('renders in open state', async () => {
    const {getByText} = await render(<Details {...defaultProps} />);
    expect(getByText(defaultProps.text)).toHaveClass('details__label');
    expect(getByText(defaultProps.children)).toHaveProperty('tagName', 'P');
    //expect(getByText(defaultProps.text).closest('details')).toHaveProperty('open', true);
    //expect(getByText(defaultProps.children).closest('details')).toHaveProperty('open', true);
  });

  it('renders small version', async () => {
    const {getByText} = await render(<Details {...defaultProps} size="small" />);
    expect(getByText(defaultProps.text).closest('summary')).toHaveClass('details__summary--small');
  });

  it('renders center version', async () => {
    const {getByText} = await render(<Details {...defaultProps} type="center" />);
    expect(getByText(defaultProps.text).closest('summary')).toHaveClass('details__summary--center');
  });
});
