interface IStart<T> {
  start: T;
  begin?: undefined;
}

function isStart<T>(x: StartProps<T>): x is IStart<T> {
  return (x as IStart<T>).start !== undefined;
}

interface IBegin<T> {
  start?: undefined;
  begin: T;
}

export type StartProps<T> = IStart<T> | IBegin<T>;

export interface IParsedStartProps<T> {
  start: T;
}

export function parseStartProps<T>(props: StartProps<T>): IParsedStartProps<T> {
  const parsedProps: IParsedStartProps<T> = {
    start: null,
  };

  if (isStart(props)) {
    parsedProps.start = props.start;
  } else {
    parsedProps.start = props.begin;
  }

  return parsedProps;
}
