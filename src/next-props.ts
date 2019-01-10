/**
 * The type of the function that is used to change the loop variable
 */
export type NextFunction<T> = (x: T) => T;

/**
 * Interface where the next function is passed through the `next` prop.
 */
interface INext<T> {
  next: NextFunction<T>;
}

/**
 * The union type of all possible next prop interfaces.
 */
export type NextProps<T> = INext<T>;

/**
 * The standard interface that all variations of `NextProps` gets parsed to.
 * @hidden
 */
export interface IParsedNextProps<T> {
  next: NextFunction<T>;
}

/**
 * Parses all variations of `NextProps` to a standard interface.
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
