import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DialogBase from './dialogBase';
import classNames from 'classnames';

export class Drawer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
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
      >
        {children}
      </DialogBase>
    );
  }
}
export default Drawer;
