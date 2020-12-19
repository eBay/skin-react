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
import * as ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import * as Skin from './skin';

// @ts-ignore
export const isControlled = (value) => typeof value !== 'undefined';

export const getColorModifiers = ({colors}: Skin.Color) => ({[colors]: !!colors});

export const removeColorProps = (props: Skin.Color) => removeProp(props, 'colors');

export const getBgColorModifiers = ({bgColor}: Skin.BgColor) => ({[bgColor]: !!bgColor});

export const removeBgColorProps = (props: Skin.BgColor) => removeProp(props, 'bgColor');

// @ts-ignore
export const removeProp = ({[prop]: omit, ...res}: React.HTMLProps<HTMLElement> | object, prop) => res;

type PropsFunc = (object) => object;

export function getHTMLProps(props: object, ...args: PropsFunc[]): React.HTMLProps<HTMLElement> {
  return args && args.length > 0 ? args.reduce((rest, fn) => ({...fn(rest)}), props) : props;
}

export function combineModifiers(props: object, ...args: PropsFunc[]): object {
  return args ? args.reduce((rest, fn) => ({...rest, ...fn(props)}), {}) : {};
}

export const isBetween = (min: number, max: number) => (value: number) => value >= min && value <= max;

export const is = (options: object) => (str: string): boolean => options[str] || false;

export const addPrefix = (prefix: string) => (className: string = '', showPrefix?: boolean) =>
  `${showPrefix ? prefix : ''}${className}`;

export const addPostfix = (postfix: string) => (className: string = '', showPostfix?: boolean) =>
  `${className}${showPostfix ? postfix : ''}`;

export const addPrefixOrder = (prefix: string) => (showPrefix: boolean, className: string) =>
  `${showPrefix ? prefix : ''}${className}`;

export const addFakePrefix = addPrefixOrder('fake-');

export const getFakeTag = (isFake: boolean, fakeTag: string = 'a', tag: string = 'div') => (isFake ? fakeTag : tag);

export const DefaultElement: React.FunctionComponent<React.HTMLProps<HTMLElement> & {tag?: string}> = ({
  tag = 'div',
  ...props
}) => React.createElement(tag, props);

export const withProps = ({displayName, ...injectedProps}) => (WrappedComponent = DefaultElement) => {
  const HOC: React.FunctionComponent<React.HTMLProps<HTMLElement> & Skin.Fake> = ({isFake, ...props}) => {
    const className = classNames(addFakePrefix(isFake, injectedProps.className), props.className);
    const combinedProps = {...injectedProps, ...props, className};
    return <WrappedComponent {...combinedProps} />;
  };
  HOC.displayName = displayName || HOC.displayName;
  return HOC;
};

export const getDisplayName = (Component) =>
  !Component ? 'Component' : Component.displayName || Component.name || 'Component';

export function withOnChangeState<P>(Component: React.ComponentType<P>) {
  const displayName = getDisplayName(Component);
  return class extends React.Component<P> {
    public static displayName = `withOnChangeState(${displayName})`;
    constructor(props) {
      super(props);
      this.state = {
        checked: props.checked || false
      };
    }
    handleChange = (e) => {
      const input = e.target || {};
      // @ts-ignore
      this.props.onChange && this.props.onChange(e, input);
      this.setState({checked: input.checked});
    };
    render = () => <Component {...this.props} {...this.state} onChange={this.handleChange} />;
  };
}

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

export const hasValue = (input) => input && input.value && input.value.length > 0;

export const useFocusState: any = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};
