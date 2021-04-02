import * as React from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';
import * as ReactDOM from 'react-dom';
import {DialogBase, DialogBaseProps} from './components/dialogBase';
import * as AriaHidder from './ariaHidder';

export const DialogBaseWithState: (props: DialogBaseProps<HTMLElement>) => React.ReactPortal = (
  props: DialogBaseProps<HTMLElement>
) => {
  const isModal = props.isModal !== false;
  React.useEffect(() => {
    if (props.open && isModal) {
      AriaHidder.hideElems();
    } else {
      AriaHidder.resetElems();
    }
    return () => AriaHidder.clean();
  }, [props.open, props.isModal]);
  const renderOverLay = () => {
    return isModal ? (
      <FocusLock>
        <RemoveScroll>
          <DialogBase {...props} />
        </RemoveScroll>
      </FocusLock>
    ) : (
      <DialogBase {...props} />
    );
  };
  return props.open ? ReactDOM.createPortal(renderOverLay(), document.body) : null;
};

export {DialogBase, DialogBaseProps} from './components/dialogBase';
export default DialogBaseWithState;
