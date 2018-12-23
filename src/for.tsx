import * as React from "react";
import { RenderArray } from "./render-array";
import { RenderProps, IParsedRenderProps, parseRenderProps } from "./render-props";
import { StartProps, IParsedStartProps, parseStartProps } from "./start-props";
import { NextProps, IParsedNextProps, parseNextProps } from "./next-props";

export type ForProps<T> = RenderProps<T> & StartProps<T> & NextProps<T>;

type ParsedForProps<T> = IParsedRenderProps<T> & IParsedStartProps<T> & IParsedNextProps<T>;

function parseForProps<T>(props: ForProps<T>): ParsedForProps<T> {
  return {
    ...parseRenderProps(props),
    ...parseStartProps<T>(props),
    ...parseNextProps<T>(props),
  };
}

export const For = <T extends {}>(props: ParsedForProps<T>) => {
  const { render, start, comparator, next } = parseForProps(props);

  const results = [];
  for (let i = start; comparator(i); i = next(i)) {
    results.push(render(i));
  }

  return <RenderArray array={results} />;
};
