import * as React from 'react';

interface RenderArrayProps {
  array: any[]
}

export const RenderArray = ({ array }: RenderArrayProps) => (
  <React.Fragment>
    {array}
  </React.Fragment>
);
