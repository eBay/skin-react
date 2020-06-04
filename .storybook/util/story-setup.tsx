import * as React from 'react';

interface StoryBookProps extends React.HTMLProps<HTMLDivElement> {}
export default class StoryBook extends React.Component<StoryBookProps> {
  static defaultProps = {};
  render() {
    const {children, ...props} = this.props;
    return (
      <div style={{marginTop: '30px', marginLeft: '30px'}} {...props}>
        {children}
      </div>
    );
  }
}
