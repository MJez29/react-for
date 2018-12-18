interface IData<T> {
  data: T;
  from?: undefined;
}

function isData<T>(x: DataProps<T>): x is IData<T> {
  return (x as IData<T>).data !== undefined;
}

interface IFrom<T> {
  from: T;
  data?: undefined;
}

export type DataProps<T> = IData<T> | IFrom<T>;

export interface IParsedDataProps<T> {
  data: T;
}

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
