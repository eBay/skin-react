import * as React from 'react';
import {SkinButton as Button} from '..';
import {render, fireEvent, cleanup} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom/matchers';
expect.extend({toBeInTheDocument});

let component;
let handleClick = jest.fn();
let handleEscape = jest.fn();

const properties = {
  priority: ['primary', 'secondary', 'delete'],
  size: ['large']
};

Object.keys(properties).forEach((property) => {
  const values = properties[property];
  values.forEach((value) => {
    it(`renders button with ${property}=${value}`, async () => {
      let props = {[property]: value};
      const {getByRole} = await render(<Button {...props} />);
      expect(getByRole('button')).has.class(`btn--${value}`);
    });
  });
});

[false, true].forEach((fluid) => {
  it(`renders button with fluid=${fluid}`, async () => {
    const {getByRole} = await render(<Button fluid />);
    expect(getByRole('button'))[fluid ? 'has' : 'not'].class('btn--fluid');
  });
});

it('renders defaults', async () => {
  const {getByRole} = await render(<Button />);
  expect(getByRole('button')).has.class('btn--secondary');
});

it('renders with id override', async () => {
  const {getByRole} = await render(<Button id={'test'} />);
  expect(getByRole('button')).has.id('test');
});

it('renders with type override', async () => {
  const {getByRole} = await render(<Button type={'submit'} />);
  expect(getByRole('button')).has.attr('type', 'submit');
});

it('does not apply priority class for unsupported value', async () => {
  const {getByRole} = await render(<Button priority={'none'} />);
  expect(getByRole('button')).does.not.have.class('btn--none').and.does.not.have.class('btn--secondary');
});

it('renders fake version', async () => {
  let props = {
    href: '#',
    size: 'large',
    priority: 'primary',
    htmlAttributes: {
      ariaLabel: 'fake button'
    }
  };
  const {getByLabelText} = await render(<Button {...props} />);
  const btn = getByLabelText('fake button');
  expect(btn).has.attr('href', '#');
  expect(btn).has.property('tagName', 'A');
  expect(btn).has.class('fake-btn--large').and.class('fake-btn--primary');
});

it('renders disabled version', async () => {
  const {getByRole} = await render(<Button disabled />);
  expect(getByRole('button')).has.attr('disabled');
});

it('renders partially disabled version', async () => {
  const {getByRole} = await render(<Button partiallyDisabled />);
  expect(getByRole('button')).has.attr('aria-disabled', 'true');
});

it('renders expand variant', async () => {
  const {getByRole} = await render(<Button variant="expand" />);
  expect(getByRole('button')).has.class('expand-btn');
});

it('renders expand variant with no text', async () => {
  const {getByRole} = await render(<Button variant="expand" iconOnly />);
  expect(getByRole('button')).has.class('expand-btn').and.class('expand-btn--icon-only');
});

it('renders icon variant', async () => {
  const {getByLabelText} = await render(<Button variant="icon" aria-label="icon-button" />);
  expect(getByLabelText('icon button')).has.class('icon-btn');
});

it('renders badged icon variant', async () => {
  const {getByLabelText} = await render(
    <Button variant="icon" aria-label="Badged button" badgeNumber={5} badgeAriaLabel={'5 Items'} />
  );
  expect(getByLabelText('Badged button')).has.class('icon-btn--badged');
  expect(getByLabelText('5 Items')).has.text('5');
});

it('renders truncated button', async () => {
  const {getByRole} = await render(<Button truncate />);
  expect(getByRole('button')).has.class('btn--truncated');
});

it('renders large truncated button', async () => {
  const {getByRole} = await render(<Button truncate size="large" />);
  expect(getByRole('button')).has.class('btn--large-truncated');
});

it('renders fixed-height button', async () => {
  const {getByRole} = await render(<Button fixedHeight />);
  expect(getByRole('button')).has.class('btn--fixed-height');
});

it('renders large fixed-height button', async () => {
  const {getByRole} = await render(<Button fixedHeight size="large" />);
  expect(getByRole('button')).has.class('btn--large-fixed-height');
});
