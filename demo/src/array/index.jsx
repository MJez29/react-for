import React from "react";

import "./array.css";
import { ForOf } from "react-for";
import Type from "../type";

const Array = ({ data }) => (
  <React.Fragment>
    <span>[</span>
    <div className="array-entries">
      <ForOf data={data}>{
        (e) => (
          <div className="array-entry">
            <Type data={e} />{
              e === data[data.length - 1] ? "" : ","
            }
          </div>
        )
      }</ForOf>
    </div>
    <span>]</span>
  </React.Fragment>
);

export default Array;
