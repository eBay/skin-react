import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DialogBase from './dialogBase';
import classNames from 'classnames';

export class Drawer extends React.Component<any, any> {
  private touches: any;
  constructor(props: any) {
    super(props);
    this.state = {expanded: props.expanded || false};
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
  handleTouchStart = (event) => {
    const touches = event.changedTouches;
    debugger;
    // touches = map(touches, ({ identifier, pageY }) => ({ identifier, pageY }));
  };
  handleTouchMove = (event) => {
    debugger;
    if (this.touches.length) {
      // forEach(event.changedTouches, (current) => {
      //   const compare = findIndex(touches, (item) => item.identifier === current.identifier);
      //   const diff = current.pageY - touches[compare].pageY;
      //
      //   if (diff > 30) {
      //     // Drag down, collpase
      //     if (this.state.expanded) {
      //       this.setExpandedState(false);
      //     } else {
      //       this.getComponent('dialog').state.open = false;
      //     }
      //     this.handleTouchEnd(event);
      //   } else if (diff < -30) {
      //     this.setExpandedState(true);
      //     this.handleTouchEnd(event);
      //   }
      // });
    }
  };
  handleTouchEnd = (event) => {
    debugger;
    // forEach(event.changedTouches, (current) => {
    //   const idx = findIndex(touches, (item) => item.identifier === current.identifier);
    //   if (idx > -1) {
    //     touches.splice(idx, 1);
    //   }
    // });
  };
  handleCloseBtnClick = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    const {children, ...rest} = this.props;
    return (
      <DialogBase
        {...rest}
        classPrefix="drawer"
        buttonPosition="right"
        key="dialog"
        className={classNames(rest.className, 'drawer--mask-fade-slow')}
        windowClass={classNames('drawer__window--slide', {'drawer__window--expanded': rest.expanded})}
        top={!rest.noHandle && <button aria-label="Expand Dialog" className="drawer__handle" type="button" />}
        onScroll={this.handleScroll}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        onCloseBtnClick={this.handleCloseBtnClick}
      >
        {children}
      </DialogBase>
    );
  }
}
export default Drawer;
