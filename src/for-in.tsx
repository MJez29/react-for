import * as React from "react";
import { RenderProps, IParsedRenderProps, parseRenderProps } from "./render-props";
import { DataProps, IParsedDataProps, parseDataProps } from "./data-props";

/**
 * The type of the props that get passed to the ForIn component.
 */
export type ForInProps = RenderProps<string> & DataProps<{ [x: string]: any }>;

/**
 * The type of the parsed props of all variations of `ForInProps`
 * @hidden
 */
type ParsedForInProps = IParsedRenderProps<string> & IParsedDataProps<{ [x: string]: any }>;

/**
 * Parses all variations of `ForInProps` into a standard interface.
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

  return <>{results}</>;
};
