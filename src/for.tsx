import * as React from "react";
import { RenderProps, IParsedRenderProps, parseRenderProps } from "./render-props";
import { StartProps, IParsedStartProps, parseStartProps } from "./start-props";
import { NextProps, IParsedNextProps, parseNextProps } from "./next-props";
import { TestProps, parseTestProps, IParsedTestProps } from "./test-props";

/**
 * The type of the props passed into the `For` component.
 */
export type ForProps<T> = RenderProps<T> & StartProps<T> & TestProps<T> & NextProps<T>;

/**
 * The type of the parsed props of all the variations of `ForProps`.
 * @hidden
 */
type ParsedForProps<T> = IParsedRenderProps<T> & IParsedStartProps<T> & IParsedTestProps<T> & IParsedNextProps<T>;

/**
 * Parses all the variations of `ForProps` into a standard interface.
 * @hidden
 * @param props
 */
function parseForProps<T>(props: ForProps<T>): ParsedForProps<T> {
  return {
    ...parseRenderProps(props),
    ...parseStartProps<T>(props),
    ...parseTestProps<T>(props),
    ...parseNextProps<T>(props),
  };
}

/**
 * A JSX implementation of the JavaScript `for` loop.
 * @param props - The props passed to the component
 */
export const For = <T extends {}>(props: ForProps<T>) => {
  const { render, start, test, next } = parseForProps(props);

  const results = [];
  for (let i = start; test(i); i = next(i)) {
    results.push(render(i));
  }

  return <>{results}</>;
};
