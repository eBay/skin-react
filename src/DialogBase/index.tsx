import * as React from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';
import * as ReactDOM from 'react-dom';
import {DialogBase, DialogBaseProps} from './components/dialogBase';

export class DialogBaseWithState extends React.Component<DialogBaseProps<HTMLElement>> {
  private portalNode: HTMLDivElement;
  constructor(props) {
    super(props);
    this.portalNode = document.createElement('div');
  }
  componentDidMount() {
    document.body.appendChild(this.portalNode);
  }
  componentWillUnmount() {
    document.body.removeChild(this.portalNode);
  }

  renderOverLay() {
    return (
      <FocusLock>
        <RemoveScroll>
          <DialogBase {...this.props} />
        </RemoveScroll>
      </FocusLock>
    );
  }
  render() {
    return this.props.open ? ReactDOM.createPortal(this.renderOverLay(), this.portalNode) : null;
  }
}
export {DialogBase, DialogBaseProps} from './components/dialogBase';
export default DialogBaseWithState;
