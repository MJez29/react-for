import * as React from 'react';
import { RenderArray } from './render-array';

export interface ForProps {
  /**
   * The starting value of the loop.
   */
  start: any;

  /**
   * The loop comparator. Loop breaks when it evaluates to a falsy value
   */
  comparator: (x: any) => any;

  /**
   * Function to calculate the next value in the loop
   */
  next: (x: any) => any;
  children: (x: any) => React.Component<any, any>;
}

export const For = ({ start, comparator, next, children }: ForProps) => {
  const results = [];
  for (let i = start; comparator(i); i = next(i)) {
    results.push(children(i));
  }

  return <RenderArray array={results} />;
};
