import React from "react";

import "./array.css";
import { ForOf } from "react-for";
import Type from "../type";

const ArrayComponent = ({ data }) => (
  <React.Fragment>
    <span>[</span>
    <div className="array-entries">
      <ForOf data={data}>{
        (e) => (
          <div className="array-entry" key={JSON.stringify(e)}>
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

export default ArrayComponent;
