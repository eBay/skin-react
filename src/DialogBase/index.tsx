import * as React from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';
import * as ReactDOM from 'react-dom';
import {DialogBase, DialogBaseProps} from './components/dialogBase';

export const DialogBaseWithState = (props: DialogBaseProps<HTMLElement>) => {
  const renderOverLay = () => (
    <div>
      <FocusLock>
        <RemoveScroll>
          <DialogBase {...props} />
        </RemoveScroll>
      </FocusLock>
    </div>
  );
  return props.open ? ReactDOM.createPortal(renderOverLay(), document.body) : null;
};

export {DialogBase, DialogBaseProps} from './components/dialogBase';
export default DialogBaseWithState;
