import { RenderProps, RenderFunction, parseRenderProps } from "./render-props";

type CompareFunction = () => any;

interface IWhileTest {
  test: CompareFunction;
}

function isWhileTest(x: WhileProps): x is IWhileTest & RenderProps<void> {
  return (x as IWhileTest).test !== undefined;
}

interface IWhileComparator {
  comparator: CompareFunction;
}

function isWhileComparator(x: WhileProps): x is IWhileComparator & RenderProps<void> {
  return (x as IWhileComparator).comparator !== undefined;
}

interface IWhileCompare {
  compare: CompareFunction;
}

function isWhileCompare(x: WhileProps): x is IWhileCompare & RenderProps<void> {
  return (x as IWhileCompare).compare !== undefined;
}

export type WhileProps = RenderProps & (IWhileTest | IWhileComparator | IWhileCompare);

export interface IParsedWhileProps {
  compare: CompareFunction;
  render: RenderFunction;
}

/**
 * Parses the props for a while loop
 * @param props - The props to parse
 */
export function parseWhileProps(props: WhileProps): IParsedWhileProps {
  const parsedProps: IParsedWhileProps = {
    compare: null,
    ...parseRenderProps(props),
  };

  if (isWhileTest(props)) {
    parsedProps.compare = props.test;
  } else if (isWhileCompare(props)) {
    parsedProps.compare = props.compare;
  } else {
    parsedProps.compare = props.comparator;
  }

  return parsedProps;
}
