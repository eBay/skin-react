import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import * as mock from './mocks';
describe('section-title', () => {
  it('renders with title', () => {
    const Input = mock.TitleBasic;
    const {getByText} = render(<Input />);
    const title = getByText(mock.TitleBasicProps.children);
    expect(title.parentElement.parentElement).toHaveClass('section-title');
    expect(title.parentElement).toHaveClass('section-title__title-container');
    expect(title).toHaveClass('section-title__title');
    expect(title).toHaveProperty('tagName', 'H2');
  });

  it('renders with title tag', () => {
    const Input = mock.Title;
    const {getByText} = render(<Input />);
    const title = getByText(mock.TitleProps.title);
    expect(title.parentElement.parentElement).toHaveClass('section-title');
    expect(title.parentElement).toHaveClass('section-title__title-container');
    expect(title).toHaveClass('section-title__title');
    expect(title).toHaveProperty('tagName', 'H2');
  });

  it('renders with subtitle', () => {
    const Input = mock.Subtitle;
    const {getByText} = render(<Input />);
    const subtitle = getByText(mock.SubtitleProps.subtitle);
    expect(subtitle.parentElement).toHaveClass('section-title__title-container');
    expect(subtitle).toHaveClass('section-title__subtitle');
    expect(subtitle).toHaveProperty('tagName', 'SPAN');
  });

  it('renders with see-all cta', () => {
    const Input = mock.CTA_SeeAll;
    const {getByText} = render(<Input />);

    const title = getByText(mock.CTA_SeeAllProps.title);
    expect(title.parentElement).toHaveProperty('tagName', 'H2');
    expect(title).toHaveProperty('tagName', 'A');
    expect(title).toHaveAttribute('href', mock.CTA_SeeAllProps.href);

    const cta = getByText(mock.CTA_SeeAllProps.ctaText);
    expect(cta).toHaveProperty('tagName', 'SPAN');
    expect(cta.parentElement).toHaveAttribute('href', mock.CTA_SeeAllProps.href);
    expect(cta.parentElement.parentElement).toHaveClass('section-title__cta');
    expect(cta.parentElement.parentElement.querySelector('svg')).toHaveClass('section-title__cta-icon');
  });

  it('renders with no-text cta', () => {
    const Input = mock.CTA_NoText;
    const {container, getByText} = render(<Input />);

    const title = getByText(mock.CTA_NoTextProps.title);
    expect(title.parentElement).toHaveProperty('tagName', 'H2');
    expect(title).toHaveProperty('tagName', 'A');
    expect(title).toHaveAttribute('href', mock.CTA_NoTextProps.href);

    const cta = container.querySelector('svg');
    expect(cta).toHaveClass('section-title__cta-icon');
    expect(cta.parentElement).toHaveAttribute('href', mock.CTA_NoTextProps.href);
    expect(cta.parentElement.parentElement).toHaveClass('section-title__cta');
    expect(cta.parentElement.parentElement).toHaveClass('section-title__cta--no-text');
  });

  it('renders with info', () => {
    const Input = mock.Info;
    const {getByText} = render(<Input />);
    const info = getByText(mock.InfoProps.info);
    expect(info).toHaveClass('section-title__info');
    expect(info).toHaveProperty('tagName', 'DIV');
  });

  it('renders with overflow', () => {
    const Input = mock.Overflow;
    const {getByText} = render(<Input />);
    const overflow = getByText(mock.OverflowProps.overflow);
    expect(overflow).toHaveClass('section-title__overflow');
    expect(overflow).toHaveProperty('tagName', 'DIV');
  });

  it('renders with large size', () => {
    const Input = mock.Size;
    const {container} = render(<Input />);
    const section = container.firstElementChild;
    expect(section).toHaveClass('section-title');
    expect(section).toHaveClass('section-title--large');
    expect(section).toHaveProperty('tagName', 'DIV');
  });
});
