import * as React from "react";
import { RenderArray } from "./render-array";

interface IForInProps {
  from: any[];
  children: (x: any) => React.Component<any, any>;
}

/**
 * `ForIn` implements looping through the provided elements using a `for...in` loop.
 * It iterates over the enumerable properties of an object.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in|here}
 * for more detail.
 * @example
 * <ForIn i from={[ 1, 2, 3 ]}>{
 *   (i) => <h1>{i}</h1>
 * }</ForIn>
 */
export const ForIn = ({ from, children }: IForInProps) => {
  const results = [];
  for (const item in from) {
    if (from.hasOwnProperty) {
      results.push(children(item));
    }
  }

  return <RenderArray array={results} />;
};
