import * as React from "react";
import { RenderArray } from "./render-array";

interface IForOfProps {
  from: { [Symbol.iterator]: any };
  children: (x: any) => React.Component<any, any>;
}

/**
 * `ForOf` implements looping through the provided elements using a `for...of` loop.
 * It iterates over the data that an iterable object defines to be iterable over.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of|here}
 * for more detail.
 * @example
 * <ForOf i from={[ 1, 2, 3 ]}>{
 *   (i) => <h1>{i}</h1>
 * }</ForOf>
 */
export const ForOf = ({ from, children }: IForOfProps) => {
  const results = [];
  for (const item of from) {
    results.push(children(item));
  }

  return <RenderArray array={results} />;
};
