import * as React from "react";
import { RenderArray } from "./render-array";
import { WhileProps, parseWhileProps } from "./while-props";

/**
 * A while loop
 * @param { WhileProps } x
 */
export const While = (x: WhileProps) => {
  const { compare, render } = parseWhileProps(x);

  const results = [];
  while (compare()) {
    results.push(render());
  }

  return <RenderArray array={results} />;
};
