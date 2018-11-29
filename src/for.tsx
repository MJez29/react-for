import * as React from 'react';
import { RenderArray } from './render-array';

export interface ForProps {
  from: any[];
  children: (x: any) => React.Component<any, any>;
}

export const For = ({ from, children }: ForProps) => {
  const results = [];
  for (const item of from) {
    results.push(item);
  }

  return <RenderArray array={results} />;
};
