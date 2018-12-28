import * as React from "react";
import { RenderArray } from "./render-array";
import { RenderProps, IParsedRenderProps, parseRenderProps } from "./render-props";
import { DataProps, IParsedDataProps, parseDataProps } from "./data-props";

export type ForInProps = RenderProps<string> & DataProps<{ [x: string]: any }>;

/**
 * @hidden
 */
type ParsedForInProps = IParsedRenderProps<string> & IParsedDataProps<{ [x: string]: any }>;

/**
 * @hidden
 */
function parseForInProps(props: ForInProps): ParsedForInProps {
  return {
    ...parseDataProps(props),
    ...parseRenderProps<string>(props),
  };
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
export const ForIn = (props: ForInProps) => {
  const { data, render } = parseForInProps(props);

  const results = [];
  for (const item in data) {
    if (data.hasOwnProperty(item)) {
      results.push(render(item));
    }
  }

  return <RenderArray array={results} />;
};
