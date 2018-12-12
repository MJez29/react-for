import { RenderProps } from "./render-props";

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

export type WhileProps = RenderProps<void> & (IWhileTest | IWhileComparator | IWhileCompare);

export function parseWhileProps(props: WhileProps): [ CompareFunction ] {
  if (isWhileTest(props)) {
    return [ props.test ];
  } else if (isWhileCompare(props)) {
    return [ props.compare ];
  } else {
    return [ props.comparator ];
  }
}
