import { RenderProps, RenderFunction, parseRenderProps } from "./render-props";
import { TestFunction, parseTestProps, TestProps } from "./test-props";

export type WhileProps = RenderProps & TestProps<undefined>;

export interface IParsedWhileProps {
  test: TestFunction<undefined>;
  render: RenderFunction;
}

/**
 * Parses the props for a while loop
 * @param props - The props to parse
 */
export function parseWhileProps(props: WhileProps): IParsedWhileProps {
  const parsedProps: IParsedWhileProps = {
    ...parseRenderProps(props),
    ...parseTestProps(props),
  };

  return parsedProps;
}
