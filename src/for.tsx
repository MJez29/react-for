import * as React from "react";
import { RenderArray } from "./render-array";
import { RenderProps, IParsedRenderProps } from "./render-props";

export type ForProps<T> = RenderProps<T>;

type ParsedForProps<T> = IParsedRenderProps<T>;

export const For = ({ start, comparator, next, children }: IForProps) => {
  const results = [];
  for (let i = start; comparator(i); i = next(i)) {
    results.push(children(i));
  }

  return <RenderArray array={results} />;
};
