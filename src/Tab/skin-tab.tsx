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
import Tab, {TabCell, TabContent, TabItem, TabItems, TabPanel} from './';
import {withForwardRef} from '../skin-utils';
const TabItemWithRef = withForwardRef(TabItem);
export interface SkinTabProps<T> extends React.HTMLProps<T> {
  index: string | number;
  isSelected: boolean;
  title: string;
}
export const SkinTab = ({children, index, isSelected, title, tabId, ...props}: SkinTabProps<HTMLElement> | any) => (
  <TabPanel
    id={`tabpanel_${index}`}
    role="tabpanel"
    aria-labelledby={tabId || `tab_${index}`}
    aria-hidden={!isSelected()}
    hidden={!isSelected()}
    {...props}
  >
    <TabCell>{children} </TabCell>
  </TabPanel>
);
export interface SkinTabsProps<T> extends React.HTMLProps<T> {}
export class SkinTabs extends React.Component<SkinTabsProps<HTMLElement>, any> {
  private tabs: any;
  private activeLink: HTMLDivElement | HTMLAnchorElement;

  constructor(props) {
    super(props);
    this.tabs = props.children;
    this.state = {selected: this.tabs.find((tab) => tab.props.selected) || this.tabs[0]};
    this.previousTab = this.previousTab.bind(this);
    this.nextTab = this.nextTab.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }
  componentDidUpdate() {
    this.activeLink.focus();
  }
  selectTab = (tab) => this.setState({selected: tab});
  previousTab(tab) {
    const index = this.tabs.indexOf(tab);
    if (index > 0) this.selectTab(this.tabs[index - 1]);
  }
  nextTab(tab) {
    const index = this.tabs.indexOf(tab);
    if (index < this.tabs.length - 1) this.selectTab(this.tabs[index + 1]);
  }
  handleClick(e, tab) {
    e.preventDefault();
    this.selectTab(tab);
  }
  handleKeyup(e, tab) {
    e.preventDefault();
    if (e.which === 13) this.selectTab(tab);
    else if (e.which === 37) this.previousTab(tab);
    else if (e.which === 39) this.nextTab(tab);
  }
  render() {
    const {selected} = this.state;
    const {id = ''} = this.props;
    return (
      <Tab>
        <TabItems>
          {this.tabs.map((tab, i) => {
            const tabId = `${id || 'item'}-tab_${i}`;
            return (
              <TabItemWithRef
                key={tabId}
                id={tabId}
                aria-controls={tabId}
                aria-selected={tab === selected}
                tabIndex={tab === selected ? 0 : -1}
                onClick={(e) => this.handleClick(e, tab)}
                onKeyUp={(e) => this.handleKeyup(e, tab)}
                ref={(link) => {
                  if (tab === selected) this.activeLink = link;
                }}
              >
                {tab.props.title}
              </TabItemWithRef>
            );
          })}
        </TabItems>
        <TabContent>
          {this.tabs.map((tab, i) =>
            React.cloneElement(tab, {
              tabId: `${id || 'item'}-tab_${i}`,
              key: i,
              ...tab.props,
              index: i,
              isSelected: () => tab === selected
            })
          )}
        </TabContent>
      </Tab>
    );
  }
}

export default SkinTabs;
