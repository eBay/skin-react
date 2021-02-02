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
import {PageControl} from './components/pageControl';
import {PageList} from './components/pageList';
import {PaginationBasic, PaginationBasicProps} from './components/pagination';

export type PaginationProps = PaginationBasicProps & {
  initialPage?: number;
  pageSize?: number;
  onChangePage?: any;
  silentMountOnChangePage: boolean;
  prevHref?: string;
  nextHref?: string;
};

export class Pagination extends React.Component<PaginationProps, {pager?: object}> {
  public static defaultProps = {
    initialPage: 1,
    pageSize: 9,
    silentMountOnChangePage: true
  };
  public readonly state: any = {
    pager: null
  };
  private items: any = [];

  constructor(props: any) {
    super(props);
    this.state = {pager: {}};
  }

  public componentDidMount() {
    const {initialPage, silentMountOnChangePage} = this.props;
    const items = this.setItems();
    if (items && items.length) {
      this.setPage(initialPage, {silentMountOnChangePage});
    }
  }
  setItems() {
    this.items = React.Children.toArray(this.props.children) || [];
    return this.items;
  }

  public componentDidUpdate(prevProps: any, prevState: any) {
    const items = this.setItems();
    const hasChangedSize = items.length !== this.items.length;
    const hasChangedPageSize = prevProps.pageSize !== this.props.pageSize;
    if (hasChangedSize || hasChangedPageSize) {
      this.items = items;
      this.setPage(this.props.initialPage);
    }
  }

  public setPage(page: number, options: any = {}) {
    const {pageSize} = this.props;
    const items = this.items;
    let pager = this.state.pager;
    if (page < 1 || page > pager.totalPages) {
      return;
    }
    pager = this.getPager(items.length, page, pageSize);
    this.setState({pager});
    if (!options.silentMountOnChangePage) {
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
      this.props.onChangePage(page, pager, pageOfItems);
    }
  }

  public getPager(totalItems: any, currentPage: any, pageSize = 9) {
    currentPage = currentPage || 1;
    const totalPages = totalItems;
    let startPage: any;
    let endPage = totalItems;
    const midPageAndBellow = Math.ceil(pageSize / 2 + 0.1);
    const midPageAndAbove = pageSize - midPageAndBellow;
    if (totalItems <= pageSize) {
      startPage = 1;
    } else {
      if (currentPage <= midPageAndBellow) {
        startPage = 1;
        endPage = pageSize;
      } else if (currentPage + midPageAndAbove >= totalItems) {
        startPage = totalItems - pageSize + 1;
      } else {
        startPage = currentPage - midPageAndAbove;
        endPage = currentPage + midPageAndAbove;
      }
    }
    const startIndex = currentPage - 1;
    const endIndex = Math.min(startIndex, totalItems - 1);
    const pages = this.items.slice(startPage - 1, endPage);
    return {
      currentChild: this.items[currentPage - 1],
      currentPage,
      endIndex,
      endPage,
      pageSize,
      pages,
      startIndex,
      startPage,
      totalItems,
      totalPages
    };
  }
  handleOnClickItem = (page: any) => {
    const index = this.items.findIndex((item) => item.key == page.key);
    this.setPage(index + 1);
  };
  render() {
    const {pager} = this.state;
    const {props} = this;
    const {a11yText, id, prevHref, nextHref, ...rest} = props;
    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }
    const isFirstPage = pager.currentPage === 1;
    const isLastPage = pager.currentPage === pager.totalPages;
    return (
      <PaginationBasic a11yText={a11yText} id={id}>
        <PageControl
          aria-label="Previous Page"
          href={prevHref}
          disabled={isFirstPage}
          onClick={() => this.setPage(pager.currentPage - 1)}
        />
        <PageList>
          {pager.pages.map((child: any) =>
            React.cloneElement(child, {
              isCurrent: child === pager.currentChild,
              onClick: () => this.handleOnClickItem(child)
            })
          )}
        </PageList>
        <PageControl
          aria-label="Next Page"
          href={nextHref}
          disabled={isLastPage}
          isNext
          onClick={() => this.setPage(pager.currentPage + 1)}
        />
      </PaginationBasic>
    );
  }
}
