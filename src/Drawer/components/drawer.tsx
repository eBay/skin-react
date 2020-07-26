import * as React from 'react';
import DialogBase, {DialogBaseProps} from '../../DialogBase';
import classNames from 'classnames';

const THRESHOLD_TOUCH = 30;
export interface DrawerProps<T> extends DialogBaseProps<T> {
  expanded?: boolean;
  onClose?: any;
  noHandle?: any;
  onCollapsed?: any;
  onExpanded?: any;
}

export const Drawer = ({children, expanded, onClose, noHandle, onCollapsed, onExpanded, ...rest}: DrawerProps<any>) => {
  let touches: any = [];
  const [state, setState] = React.useState({expanded: expanded || false});

  const setExpandedState = (expand) => {
    setState({expanded: expand});
    if (expand) {
      onExpanded && onExpanded(expand);
    } else {
      onCollapsed && onCollapsed(expand);
    }
  };
  const handleExpand = () => setExpandedState(!state.expanded);
  const handleScroll = () => setExpandedState(true);
  const handleTouchStart = (event) => {
    touches = [...event.changedTouches].map(({identifier, pageY}) => ({identifier, pageY}));
  };
  const handleTouchMove = (e) => {
    if (touches.length) {
      [...e.changedTouches].forEach((current) => {
        const compare = touches.findIndex((item) => item.identifier === current.identifier);
        const diff = current.pageY - touches[compare].pageY;
        if (diff > THRESHOLD_TOUCH) {
          // Drag down, collpase
          if (state.expanded) {
            setExpandedState(false);
          } else {
            onClose && onClose(e);
          }
          handleTouchEnd(e);
        } else if (diff < -THRESHOLD_TOUCH) {
          setExpandedState(true);
          handleTouchEnd(e);
        }
      });
    }
  };
  const handleTouchEnd = (e) => {
    const changedTouches = [...e.changedTouches];
    changedTouches.forEach((current) => {
      const idx = touches.findIndex((item) => item.identifier === current.identifier);
      if (idx > -1) {
        touches.splice(idx, 1);
      }
    });
  };
  const handleCloseBtnClick = (e) => onClose && onClose(e);
  const handleBackgroundClick = (e) => onClose && onClose(e);
  const top = !noHandle && (
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
      className={classNames(rest.className, 'drawer--mask-fade-slow')}
      windowClass={classNames('drawer__window--slide', {'drawer__window--expanded': state.expanded})}
      OnBackgroundClick={handleBackgroundClick}
      top={top}
    >
              {children}
    </DialogBase>
  );
};
export default Drawer;
