import * as React from "react";
import { RenderArray } from "./render-array";
import { RenderProps, IParsedRenderProps, parseRenderProps } from "./render-props";
import { StartProps, IParsedStartProps, parseStartProps } from "./start-props";
import { NextProps, IParsedNextProps, parseNextProps } from "./next-props";
import { TestProps, parseTestProps, IParsedTestProps } from "./test-props";

export type ForProps<T> = RenderProps<T> & StartProps<T> & TestProps<T> & NextProps<T>;

type ParsedForProps<T> = IParsedRenderProps<T> & IParsedStartProps<T> & IParsedTestProps<T> & IParsedNextProps<T>;

function parseForProps<T>(props: ForProps<T>): ParsedForProps<T> {
  return {
    ...parseRenderProps(props),
    ...parseStartProps<T>(props),
    ...parseTestProps<T>(props),
    ...parseNextProps<T>(props),
  };
}

export const For = <T extends {}>(props: ForProps<T>) => {
  const { render, start, test, next } = parseForProps(props);

  const results = [];
  for (let i = start; test(i); i = next(i)) {
    results.push(render(i));
  }

  return <RenderArray array={results} />;
};
