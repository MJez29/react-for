interface IRenderChildren<T> {
  children: (x: T) => React.Component<any, any>;
}

interface IRenderFunction<T> {
  render: (x: T) => React.Component<any, any>;
}

export type RenderProps<T> = IRenderChildren<T> | IRenderFunction<T>;
