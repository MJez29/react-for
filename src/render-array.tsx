import * as React from "react";

interface IRenderArrayProps {
  array: JSX.Element[];
}

/**
 * Renders an array, attaching a key to each element corresponding to its index in the array
 */
export const RenderArray = ({ array }: IRenderArrayProps) => (
  <React.Fragment>
    {array.map((elem, i) => <React.Fragment key={i}>{elem}</React.Fragment>)}
  </React.Fragment>
);
