export type RenderFunction<T = void> = (x?: T) => any;

interface IRenderChildren<T> {
  children: RenderFunction<T>;
}

/**
 * @hidden
 * @param x
 */
function isRenderChildren<T>(x: RenderProps<T>): x is IRenderChildren<T> {
  return (x as IRenderChildren<T>).children !== undefined;
}

interface IRenderFunction<T> {
  render: RenderFunction<T>;
}

export type RenderProps<T = void> = IRenderChildren<T> | IRenderFunction<T>;

/**
 * @hidden
 */
export interface IParsedRenderProps<T> {
  render: RenderFunction<T>;
}

/**
 * @hidden
 * @param props
 */
export function parseRenderProps<T>(props: RenderProps<T>): IParsedRenderProps<T> {
  const parsedProps: IParsedRenderProps<T> = {
    render: null,
  };

  if (isRenderChildren(props)) {
    parsedProps.render = props.children;
  } else {
    parsedProps.render = props.render;
  }

  return parsedProps;
}
