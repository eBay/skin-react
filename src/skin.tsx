import * as React from 'react';
export enum ColorsEnum {
  DEFAULT = 'color-text-default',
  SECONDARY = 'color-text-secondary',
  LINKDEFAULT = 'color-link-default',
  LINKVISITED = 'color-link-visited',
  CONFIRMATION = 'color-confirmation-text',
  CRITICAL = 'color-critical-text'
}
export enum BgColorsEnum {
  INFORMATION = 'color-information-background',
  WARNING = 'color-warning-background',
  CONFIRMATION = 'color-confirmation-background',
  CRITICAL = 'color-critical-background'
}
export type ColorType =
  | 'color-text-default'
  | 'color-text-secondary'
  | 'color-link-default'
  | 'color-link-visited'
  | 'color-confirmation-text'
  | 'color-critical-text';
export type BgColorType =
  | 'color-information-background'
  | 'color-warning-background'
  | 'color-confirmation-background'
  | 'color-critical-background';
export type RoleType =
  | 'switch'
  | 'tablist'
  | 'tab'
  | 'tabpanel'
  | 'img'
  | 'menu'
  | 'menuitem'
  | 'menuitemradio'
  | 'menuitemcheckbox'
  | 'navigation'
  | 'combobox'
  | 'listbox'
  | 'option'
  | 'dialog'
  | 'document'
  | 'region'
  | 'status'
  | string;
export interface Color {
  colors?: ColorType;
}
export interface Role {
  role?: RoleType;
}
export interface BgColor {
  bgColor?: BgColorType;
}
export interface Fake {
  isFake?: boolean;
}
export interface Disabled {
  disabled?: boolean;
}
export interface Next {
  isNext?: boolean;
}
export interface Current {
  isCurrent?: boolean;
}
export interface Fluid {
  isFluid?: boolean;
}
export interface Large {
  isLarge?: boolean;
}
export interface Borderless {
  isBorderless?: boolean;
}
export type Component<T> =
  | React.ComponentClass<T & React.HTMLProps<HTMLElement>>
  | React.FunctionComponent<T & React.HTMLProps<HTMLElement>>;
