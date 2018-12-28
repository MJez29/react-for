export type NextFunction<T> = (x: T) => T;

interface INext<T> {
  next: NextFunction<T>;
}

export type NextProps<T> = INext<T>;

/**
 * @hidden
 */
export interface IParsedNextProps<T> {
  next: NextFunction<T>;
}

/**
 * @hidden
 * @param props
 */
export function parseNextProps<T>(props: NextProps<T>): IParsedNextProps<T> {
  const parsedProps: IParsedNextProps<T> = {
    next: null,
  };

  parsedProps.next = props.next;

  return parsedProps;
}
