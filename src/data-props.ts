/**
 * Interface of the data-related props when the object to
 * use in the loop is passed in the `data` prop
 * @interface
 */
interface IData<T> {
  data: T;
  from?: undefined;
}

/**
 * Returns true if data-related prop is the `data` prop
 * @param x - The data props to test
 */
function isData<T>(x: DataProps<T>): x is IData<T> {
  return (x as IData<T>).data !== undefined;
}

/**
 * Interface of the data-related props when the object to
 * use in the loop is passed in the `from` prop
 * @interface
 */
interface IFrom<T> {
  from: T;
  data?: undefined;
}

/**
 * The union of the various data-related prop interfaces.
 * @type
 */
export type DataProps<T> = IData<T> | IFrom<T>;

/**
 * The normalized schema that all the variations of `DataProps` get
 * mapped to.
 */
export interface IParsedDataProps<T> {
  data: T;
}

/**
 * Parses all variations of `DataProps` into a standard interface.
 * @param props - The props to parse
 */
export function parseDataProps<T>(props: DataProps<T>): IParsedDataProps<T> {
  const parsedProps: IParsedDataProps<T> = {
    data: null,
  };

  if (isData(props)) {
    parsedProps.data = props.data;
  } else {
    parsedProps.data = props.from;
  }

  return parsedProps;
}
