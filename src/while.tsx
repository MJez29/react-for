import * as React from "react";
import { RenderArray } from "./render-array";
import { WhileProps, parseWhileProps } from "./while-props";


export const While = (x: WhileProps) => {
  const [ comparator ] = parseWhileProps(x);

  const results = [];
  while (comparator()) {
    results.push(children());
  }

  return <RenderArray array={results} />;
};