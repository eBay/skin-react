import NoticeBase from '../index';
import * as React from 'react';
export const DefaultNoticeProps = {
  prefixClass: 'page-notice',
  status: 'attention',
  a11yText: 'default label',
  className: 'page-notice--attention',
  children: 'body'
};
export const DefaultNotice = (props) => (
  <NoticeBase {...DefaultNoticeProps} {...props}>
    {props.children || DefaultNoticeProps.children}
  </NoticeBase>
);

export const InlineNoticeProps = {
  root: 'div',
  prefixClass: 'inline-notice',
  status: 'information',
  className: 'extra-class',
  a11yText: 'default label',
  iconClass: 'notice-class',
  children: 'body'
};
export const InlineNotice = (props) => (
  <NoticeBase {...InlineNoticeProps} {...props}>
    {props.children || InlineNoticeProps.children}
  </NoticeBase>
);

export const TitleFooterNoticeProps = {
  prefixClass: 'window-notice',
  status: 'attention',
  a11yText: 'default label',
  className: 'page-notice--attention',
  children: 'body',
  title: 'title body',
  footer: 'footer body'
};
export const TitleFooterNotice = (props) => (
  <NoticeBase {...TitleFooterNoticeProps} {...props}>
    {props.children || TitleFooterNoticeProps.children}
  </NoticeBase>
);
