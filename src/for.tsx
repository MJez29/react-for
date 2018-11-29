import * as React from 'react';

export interface ForProps {
  from: any[];
  children: (x: any) => React.Component<any, any>;
}

export const For = ({ from, children }: ForProps) => {
  return (
    <React.Fragment>
      {
        from.map(children)
      }
    </React.Fragment>
  )
};
