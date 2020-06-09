import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DialogBase from './dialogBase';
import classNames from 'classnames';

export class Drawer extends React.Component<any, any> {
  private touches: any;
  constructor(props: any) {
    super(props);
    this.state = {expanded: props.expanded || false};
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }
  setExpandedState = (expanded) => {
    const {onExpanded, onCollapsed} = this.props;
    this.setState({expanded});
    if (expanded) {
      onExpanded && onExpanded(expanded);
    } else {
      onCollapsed && onCollapsed(expanded);
    }
  };
  handleExpand = () => this.setExpandedState(!this.state.expanded);
  handleScroll = () => this.setExpandedState(true);
  handleTouchStart(event) {
    this.touches = [...event.changedTouches].map(({identifier, pageY}) => ({identifier, pageY}));
  }
  handleTouchMove(e) {
    if (this.touches.length) {
      const touches = [...e.changedTouches];
      touches.forEach((current) => {
        const compare = this.touches.findIndex((item) => item.identifier === current.identifier);
        const diff = current.pageY - touches[compare].pageY;
        if (diff > 30) {
          // Drag down, collpase
          if (this.state.expanded) {
            this.setExpandedState(false);
          } else {
            this.props.onClose && this.props.onClose(e);
          }
          this.handleTouchEnd(e);
        } else if (diff < -30) {
          this.setExpandedState(true);
          this.handleTouchEnd(e);
        }
      });
    }
  }
  handleTouchEnd(e) {
    const changedTouches = [...e.changedTouches];
    changedTouches.forEach((current) => {
      const idx = this.touches.findIndex((item) => item.identifier === current.identifier);
      if (idx > -1) {
        this.touches.splice(idx, 1);
      }
    });
  }
  handleCloseBtnClick = (e) => this.props.onClose && this.props.onClose(e);
  render() {
    const {children, ...rest} = this.props;
    const top = !rest.noHandle && (
      <button
        aria-label="Expand Dialog"
        className="drawer__handle"
        type="button"
        onClick={this.handleExpand}
        onScroll={this.handleScroll}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      />
    );
    return (
      <DialogBase
        {...rest}
        classPrefix="drawer"
        buttonPosition="right"
        onCloseBtnClick={this.handleCloseBtnClick}
        key="dialog"
        className={classNames(rest.className, 'drawer--mask-fade-slow')}
        windowClass={classNames('drawer__window--slide', {'drawer__window--expanded': this.state.expanded})}
        top={top}
      >
        {children}
      </DialogBase>
    );
  }
}
export default Drawer;
