import * as React from "react";
import { RenderArray } from "./render-array";
import { RenderProps, parseRenderProps, IParsedRenderProps } from "./render-props";
import { DataProps, parseDataProps, IParsedDataProps } from "./data-props";

export type ForOfProps<T> = RenderProps<T> & DataProps<{ [Symbol.iterator]: () => T }>;

/**
 * @hidden
 */
type ParsedForOfProps<T> = IParsedRenderProps<T> & IParsedDataProps<any>;

/**
 * @hidden
 * @param props
 */
function parseForOfProps<T>(props: ForOfProps<T>): ParsedForOfProps<T> {
  return {
    ...parseDataProps(props),
    ...parseRenderProps<T>(props),
  };
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
export const ForOf = <T extends {}>(props: ForOfProps<T>) => {
  const { data, render } = parseForOfProps(props);

  const results = [];
  for (const item of data) {
    results.push(render(item));
  }

  return <RenderArray array={results} />;
};
