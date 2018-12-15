import * as React from "react";
import { RenderArray } from "./render-array";
import { WhileProps, parseWhileProps } from "./while-props";

/**
 * A do-while loop
 * @param { WhileProps } props - The props passed into the component
 */
export const DoWhile = (props: WhileProps) => {
  const { compare, render } = parseWhileProps(props);

  const results = [];
  do {
    results.push(render());
  } while (compare());

  return <RenderArray array={results} />;
};
