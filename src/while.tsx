import * as React from "react";
import { WhileProps, parseWhileProps } from "./while-props";

/**
 * A JSX implementation of a while loop.
 * ```jsx
 * const PrintHello = ({ i }) => (
 *   <While test={() => i-- > 0}>{
 *     () => <h1>Hello World!</h1>
 *   }</While>
 * )
 * ```
 * @param props The props passed into the component
 */
export const While = (props: WhileProps) => {
  const { test, render } = parseWhileProps(props);

  const results = [];
  while (test()) {
    results.push(render());
  }

  return <>{results}</>;
};
