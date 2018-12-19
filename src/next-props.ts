type NextFunction<T> = (x: T) => T;

interface INext<T> {
  next: NextFunction<T>;
}

export type NextProps<T> = INext<T>;

export interface IParsedNextProps<T> {
  next: NextFunction<T>;
}

export function parseNextProps<T>(props: NextProps<T>): IParsedNextProps<T> {
  const parsedProps: IParsedNextProps<T> = {
    next: null,
  };

  parsedProps.next = props.next;

  return parsedProps;
}
