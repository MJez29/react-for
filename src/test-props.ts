export type TestFunction<T> = (x?: T) => any;

interface ITest<T> {
  test: TestFunction<T>;
  comparator?: undefined;
  compare?: undefined;
}

function isTest<T>(x: TestProps<T>): x is ITest<T> {
  return (x as ITest<T>).test !== undefined;
}

interface IComparator<T> {
  test?: undefined;
  comparator: TestFunction<T>;
  compare?: undefined;
}

function isComparator<T>(x: TestProps<T>): x is IComparator<T> {
  return (x as IComparator<T>).comparator !== undefined;
}

interface ICompare<T> {
  test?: undefined;
  comparator?: undefined;
  compare: TestFunction<T>;
}

function isCompare<T>(x: TestProps<T>): x is ICompare<T> {
  return (x as ICompare<T>).compare !== undefined;
}

export type TestProps<T> = ITest<T> | IComparator<T> | ICompare<T>;

export interface IParsedTestProps<T> {
  test: TestFunction<T>;
}

export function parseTestProps<T>(props: TestProps<T>): IParsedTestProps<T> {
  const parsedProps: IParsedTestProps<T> = {
    test: null,
  };

  if (isTest(props)) {
    parsedProps.test = props.test;
  } else if (isComparator(props)) {
    parsedProps.test = props.comparator;
  } else {
    parsedProps.test = props.compare;
  }

  return parsedProps;
}
