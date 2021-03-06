import SectionTitle from '../index';
import * as React from 'react';
export const TitleBasicProps = {
  children: 'Title content'
};
export const TitleBasic = (props) => (
  <SectionTitle {...TitleBasicProps} {...props}>
    {props.children || TitleBasicProps.children}
  </SectionTitle>
);

export const TitleProps = {
  title: 'Title content'
};
export const Title = (props) => (
  <SectionTitle {...TitleProps} {...props}>
    {props.children}
  </SectionTitle>
);

export const SubtitleProps = {
  ...TitleProps,
  subtitle: 'Subtitle content'
};
export const Subtitle = (props) => <Title {...SubtitleProps} {...props} />;

export const CTA_SeeAllProps = {
  ...TitleProps,
  ctaText: 'See All',
  href: 'https://www.ebay.com/'
};
export const CTA_SeeAll = (props) => <Title {...CTA_SeeAllProps} {...props} />;

export const CTA_NoTextProps = {
  ...TitleProps,

  href: 'https://www.ebay.com/'
};
export const CTA_NoText = (props) => <Title {...CTA_NoTextProps} {...props} />;

export const InfoProps = {
  ...TitleProps,
  info: 'Info content'
};
export const Info = (props) => <Title {...InfoProps} {...props} />;

export const OverflowProps = {
  ...TitleProps,
  overflow: 'Overflow content'
};
export const Overflow = (props) => <Title {...OverflowProps} {...props} />;

export const SizeProps = {
  ...TitleProps,
  size: 'large'
};
export const Size = (props) => <Title {...SizeProps} {...props} />;
