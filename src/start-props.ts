interface IStart<T> {
  start: T;
  begin?: undefined;
}

/**
 * @hidden
 * @param x 
 */
function isStart<T>(x: StartProps<T>): x is IStart<T> {
  return (x as IStart<T>).start !== undefined;
}

interface IBegin<T> {
  start?: undefined;
  begin: T;
}

export type StartProps<T> = IStart<T> | IBegin<T>;

/**
 * @hidden
 */
export interface IParsedStartProps<T> {
  start: T;
}

/**
 * @hidden
 * @param props 
 */
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
