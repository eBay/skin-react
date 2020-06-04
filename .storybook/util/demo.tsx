import * as React from 'react';

export interface DemoComponentProps<T> extends React.HTMLProps<T> {}
export const DemoComponent = (props: DemoComponentProps<HTMLDivElement>) => {
  return (
    <div {...props} style={{backgroundColor: 'white', border: '1px dashed #ccc', ...props.style}}>
      <div style={{margin: '8px'}}>{props.children}</div>
    </div>
  );
};
export default DemoComponent;
