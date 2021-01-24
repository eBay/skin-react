import * as React from 'react';
import {Button} from '..';
import {render, fireEvent, cleanup} from '@testing-library/react';

let component;
const handleClick = jest.fn();
const handleEscape = jest.fn();

const properties = {
  priority: ['primary', 'secondary', 'delete'],
  size: ['large']
};

Object.keys(properties).forEach((property) => {
  const values = properties[property];
  values.forEach((value) => {
    it(`renders button with ${property}=${value}`, async () => {
      const props = {[property]: value};
      const {getByRole} = await render(<Button {...props} />);
      expect(getByRole('button')).toHaveClass(`btn--${value}`);
    });
  });
});

it(`renders button with fluid=${false}`, async () => {
  const {getByRole} = await render(<Button fluid={false} />);
  expect(getByRole('button')).not.toHaveClass('btn--fluid');
});
it(`renders button with fluid=${true}`, async () => {
  const {getByRole} = await render(<Button fluid={true} />);
  expect(getByRole('button')).toHaveClass('btn--fluid');
});

it('renders defaults', async () => {
  const {getByRole} = await render(<Button />);
  expect(getByRole('button')).toHaveClass('btn--secondary');
});

it('renders with id override', async () => {
  const {getByRole} = await render(<Button id={'test'} />);
  expect(getByRole('button')).toHaveAttribute('id', 'test');
});

it('renders with type override', async () => {
  const {getByRole} = await render(<Button type={'submit'} />);
  expect(getByRole('button')).toHaveAttribute('type', 'submit');
});

it('does not apply priority class for unsupported value', async () => {
  const {getByRole} = await render(<Button priority={'none'} />);
  expect(getByRole('button')).not.toHaveClass('btn--none');
  expect(getByRole('button')).not.toHaveClass('btn--secondary');
});

it('renders fake version', async () => {
  const props = {
    href: '#',
    size: 'large',
    priority: 'primary',
    'aria-label': 'fake button'
  };
  const {getByLabelText} = await render(<Button {...props} />);
  const btn = getByLabelText('fake button');
  expect(btn).toHaveAttribute('href', '#');
  expect(btn).toHaveProperty('tagName', 'A');
  expect(btn).toHaveClass('fake-btn--large');
  expect(btn).toHaveClass('fake-btn--primary');
});

it('renders disabled version', async () => {
  const {getByRole} = await render(<Button disabled />);
  expect(getByRole('button')).toHaveAttribute('disabled');
});

it('renders partially disabled version', async () => {
  const {getByRole} = await render(<Button partiallyDisabled />);
  expect(getByRole('button')).toHaveAttribute('aria-disabled', 'true');
});

it('renders expand variant', async () => {
  const {getByRole} = await render(<Button variant="expand" />);
  expect(getByRole('button')).toHaveClass('expand-btn');
});

it('renders expand variant with no text', async () => {
  const {getByRole} = await render(<Button variant="expand" iconOnly />);
  expect(getByRole('button')).toHaveClass('expand-btn');
  expect(getByRole('button')).toHaveClass('expand-btn--icon-only');
});

it('renders icon variant', async () => {
  const {getByLabelText} = await render(<Button variant="icon" aria-label="icon button" />);
  expect(getByLabelText('icon button')).toHaveClass('icon-btn');
});

it('renders badged icon variant', async () => {
  const {getByLabelText} = await render(
    <Button variant="icon" aria-label="Badged button" badgeNumber={5} badgeAriaLabel={'5 Items'} />
  );
  expect(getByLabelText('Badged button')).toHaveClass('icon-btn--badged');
  expect(getByLabelText('5 Items')).toHaveTextContent('5');
});

it('renders truncated button', async () => {
  const {getByRole} = await render(<Button truncate />);
  expect(getByRole('button')).toHaveClass('btn--truncated');
});

it('renders large truncated button', async () => {
  const {getByRole} = await render(<Button truncate size="large" />);
  expect(getByRole('button')).toHaveClass('btn--large-truncated');
});

it('renders fixed-height button', async () => {
  const {getByRole} = await render(<Button fixedHeight />);
  expect(getByRole('button')).toHaveClass('btn--fixed-height');
});

it('renders large fixed-height button', async () => {
  const {getByRole} = await render(<Button fixedHeight size="large" />);
  expect(getByRole('button')).toHaveClass('btn--large-fixed-height');
});
