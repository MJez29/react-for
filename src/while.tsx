import * as React from "react";
import { RenderArray } from "./render-array";
import { WhileProps, parseWhileProps } from "./while-props";

/**
 * A component that takes in a test function and calls a callback function
 * that returns a react component while the test function continues to return
 * true.
 * @param { WhileProps } props - The props passed into the component
 * @example
 * const PrintHello = ({ i }) => (
 *   <While test={() => i-- > 0}>{
 *     () => <h1>Hello World!</h1>
 *   }</While>
 * )
 */
export const While = (props: WhileProps) => {
  const { test, render } = parseWhileProps(props);

  const results = [];
  while (test()) {
    results.push(render());
  }

  return <RenderArray array={results} />;
};
