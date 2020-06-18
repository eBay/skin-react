import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DialogBase from './dialogBase';
import classNames from 'classnames';

export const Drawer = ({children, ...rest}: any) =>  {
  let touches:any = [];
  const [state, setState] = React.useState( {expanded: rest.expanded || false});

  const setExpandedState = (expanded) => {
    const {onExpanded, onCollapsed} = rest;
    setState({expanded});
    if (expanded) {
      onExpanded && onExpanded(expanded);
    } else {
      onCollapsed && onCollapsed(expanded);
    }
  };
  const handleExpand = () => setExpandedState(!state.expanded);
  const handleScroll = () => setExpandedState(true);
  const handleTouchStart= (event)=> {
    touches = [...event.changedTouches].map(({identifier, pageY}) => ({identifier, pageY}));
  }
  const handleTouchMove=(e) =>{
    if (touches.length) {
      [...e.changedTouches].forEach((current) => {
        const compare = touches.findIndex((item) => item.identifier === current.identifier);
        const diff = current.pageY - touches[compare].pageY;
        const THRESHOLD_TOUCH = 30;
        if (diff > THRESHOLD_TOUCH) {
          // Drag down, collpase
          if (state.expanded) {
            setExpandedState(false);
          } else {
            rest.onClose && rest.onClose(e);
          }
          handleTouchEnd(e);
        } else if (diff < -THRESHOLD_TOUCH) {
          setExpandedState(true);
          handleTouchEnd(e);
        }
      });
    }
  }
  const handleTouchEnd= (e) =>{
    const changedTouches = [...e.changedTouches];
    changedTouches.forEach((current) => {
      const idx = touches.findIndex((item) => item.identifier === current.identifier);
      if (idx > -1) {
        touches.splice(idx, 1);
      }
    });
  }
  const handleCloseBtnClick = (e) => rest.onClose && rest.onClose(e);

    const top = !rest.noHandle && (
      <button
        aria-label="Expand Dialog"
        className="drawer__handle"
        type="button"
        onClick={handleExpand}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    );
    return (
      <DialogBase
        {...rest}
        classPrefix="drawer"
        buttonPosition="right"
        onCloseBtnClick={handleCloseBtnClick}
        key="dialog"
        className={classNames(rest.className, 'drawer--mask-fade-slow')}
        windowClass={classNames('drawer__window--slide', {'drawer__window--expanded': state.expanded})}
        top={top}
      >
        {children}
      </DialogBase>
    );

}
export default Drawer;
