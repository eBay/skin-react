import * as React from 'react';
import {ReactNode} from 'react';
import classNames from 'classnames';
import {Icon} from '../../Icon';
import {DefaultElement, uniqueId} from '../../skin-utils';
export type NoticeBaseProps = React.HTMLProps<HTMLElement> & {
  status?: 'confirmation' | 'attention' | 'information' | 'celebration' | string;
  a11yText?: string;
  icon?: boolean;
  iconClass?: string;
  root?: 'section' | 'div';
  mainRoot?: 'div' | 'span';
  headerRoot?: 'div' | 'span';
  a11yRoleDescription?: string;
  prefixClass?: 'page-notice' | 'section-notice' | 'inline-notice' | string;
  title?: ReactNode;
  titleClass?: string;
  footer?: ReactNode;
};
export const NoticeBase = ({
  status,
  a11yText,
  icon,
  iconClass,
  id = uniqueId(),
  root,
  mainRoot,
  headerRoot,
  a11yRoleDescription,
  prefixClass,
  title,
  titleClass,
  footer,
  children,
  ...props
}: NoticeBaseProps) => {
  return (
    <DefaultElement
      {...props}
      aria-labelledby={id}
      tag={root || 'section'}
      className={classNames(prefixClass, props.className)}
    >
      <DefaultElement
        className={`${prefixClass}__header`}
        tag={headerRoot || 'div'}
        aria-roledescription={a11yRoleDescription}
        id={id}
      >
        {icon !== false && status && (
          <Icon name={`${status}-filled`} aria-label={a11yText || status} className={iconClass} />
        )}
      </DefaultElement>
      <DefaultElement className={`${prefixClass}__main`} tag={mainRoot || 'div'}>
        {title && <h2 className={`${prefixClass}__title`}>{title}</h2>}
        {children}
      </DefaultElement>
      {footer && <div className={`${prefixClass}__footer`}> {footer} </div>}
    </DefaultElement>
  );
};
export default NoticeBase;
