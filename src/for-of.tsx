import * as React from "react";
import { RenderProps, parseRenderProps, IParsedRenderProps } from "./render-props";
import { DataProps, parseDataProps, IParsedDataProps } from "./data-props";

export type ForOfProps<T> = RenderProps<T> & DataProps<{ [Symbol.iterator]: () => Iterator<T> }>;

/**
 * The type of the props that get passed into the `ForOf` component.
 * @hidden
 */
type ParsedForOfProps<T> = IParsedRenderProps<T> & IParsedDataProps<{ [Symbol.iterator]: () => Iterator<T> }>;

/**
 * Parses all the variations of the `ForOfProps` into a standard interface.
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

  return <>{results}</>;
};
