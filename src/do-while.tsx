import * as React from "react";
import { RenderArray } from "./render-array";
import { WhileProps, parseWhileProps } from "./while-props";

/**
 * A do-while loop
 * @param props - The props passed into the component
 */
export const DoWhile = (props: WhileProps) => {
  const { test, render } = parseWhileProps(props);

  const results = [];
  do {
    results.push(render());
  } while (test());

  return <RenderArray array={results} />;
};
