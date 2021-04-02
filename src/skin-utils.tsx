/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import classNames from 'classnames';
import {useEffect, useRef} from 'react';
import * as Skin from './skin';

// @ts-ignore
export const isControlled = (value) => typeof value !== 'undefined';

// @ts-ignore
export const removeProp = ({[prop]: omit, ...res}: React.HTMLProps<HTMLElement> | object, prop) => res;

type PropsFunc = (obj:any) => object;

export function getHTMLProps(props: object, ...args: PropsFunc[]): React.HTMLProps<HTMLElement> {
  return args && args.length > 0 ? args.reduce((rest, fn) => ({...fn(rest)}), props) : props;
}

export function combineModifiers(props: object, ...args: PropsFunc[]): object {
  return args ? args.reduce((rest, fn) => ({...rest, ...fn(props)}), {}) : {};
}

export const isBetween = (min: number, max: number) => (value: number) => value >= min && value <= max;

export const is = (options: Record<string, unknown>) => (str: string): boolean => !!options[str];

export const addPrefix = (prefix: string) => (className = '', showPrefix?: boolean) =>
  `${showPrefix ? prefix : ''}${className}`;

export const addPostfix = (postfix: string) => (className = '', showPostfix?: boolean) =>
  `${className}${showPostfix ? postfix : ''}`;

export const addPrefixOrder = (prefix: string) => (showPrefix: boolean, className: string) =>
  `${showPrefix ? prefix : ''}${className}`;

export const addFakePrefix = addPrefixOrder('fake-');

export const getFakeTag = (isFake: boolean, fakeTag = 'a', tag = 'div') => (isFake ? fakeTag : tag);

export const DefaultElement = ({tag = 'div', ...props}) => React.createElement(tag, props);

export const withProps = ({displayName, ...injectedProps}: any) => (WrappedComponent = DefaultElement) => {
  const HOC: React.FunctionComponent<React.HTMLProps<HTMLElement> & Skin.Fake> = ({isFake, ...props}) => {
    const className = classNames(addFakePrefix(isFake || false, injectedProps.className), props.className);
    const combinedProps = {...injectedProps, ...props, className};
    return <WrappedComponent {...combinedProps} />;
  };
  HOC.displayName = displayName || HOC.displayName;
  return HOC;
};

export const getDisplayName = (Component: any) =>
  !Component ? 'Component' : Component.displayName || Component.name || 'Component';

export const withOnChangeState = <Props,>(Component: React.FC<Props>) => {
  const WithOnChangeState = React.forwardRef<React.FC<Props>, Props>((props, ref) => {
    // @ts-ignore
    const [state, setState] = React.useState({checked: props.checked || false});
    const handleChange = (e: any) => {
      const input = e.target || {};
      // @ts-ignore
      props.onChange && props.onChange(e, input);
      setState({checked: input.checked});
    };
    return <Component {...props} {...state} onChange={handleChange} />;
  });

  WithOnChangeState.displayName = getDisplayName(Component);

  return WithOnChangeState;
};

export const withForwardRef: any = <P extends unknown>(Component: React.ComponentType<P>) => {
  const ForwardRef = React.forwardRef((props: React.HTMLProps<P> | any, ref) => (
    <Component {...props} forwardedRef={ref} />
  ));
  ForwardRef.displayName = getDisplayName(Component);
  return ForwardRef;
};

export const withHideEffect = <P extends unknown>(Component: React.ComponentType<P>) => {
  const notice = (props: React.HTMLProps<P> | any) => {
    useEffect(() => {
      if (!props.hidden && props.onShow) {
        props.onShow();
      }
    }, [props.hidden]);
    const passedStyle = props.style || {};
    const style = props.hidden ? {display: 'none'} : {};
    return <Component {...props} style={{...passedStyle, ...style}} />;
  };
  notice.displayName = getDisplayName(Component);
  return notice;
};
export const hasValue = (input: any) => input && input.value && input.value.length > 0;

export const useFocusState: any = () => {
  const htmlElRef: any = useRef(null);
  const setFocus = () => {
    htmlElRef?.current?.focus && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};
export const uniqueId = (n = 7) => Math.random().toString(36).substring(n);
export const processHtmlAttributes = (input: any, ignore: Array<string> = []) => {
  const attributes: any = {};
  const htmlAttributes = input.htmlAttributes;

  let obj = htmlAttributes || {};
  if (htmlAttributes) {
    obj = {...htmlAttributes};
  }
  Object.keys(input).forEach((key: string) => {
    if (ignore.indexOf(key) === -1 && !obj[key]) {
      obj[key] = input[key];
    }
  });
  Object.keys(obj).forEach((key: string) => {
    attributes[key] = obj[key];
  });

  return attributes;
};
export const debounce = (func: Function, timeout: number) => {
  let timer: NodeJS.Timeout | any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
