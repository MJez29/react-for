import * as React from 'react';
import { RenderArray } from './render-array';
import { ForProps } from './for';

/**
 * 
 * @param { ForProps } props
 */
export const ForOf = ({ from, children }: ForProps) => {
  const results = [];
  for (const item of from) {
    results.push(children(item));
  }

  return <RenderArray array={results} />;
};
