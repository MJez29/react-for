// @ts-check
import React from "react";
import { ForIn } from "react-for";

import "./object.css";
import Type from "../type";

const ObjectComponent = ({ data }) => {
  const keys = Object.keys(data);

  return (
    <React.Fragment>
      <span>{"{"}</span>
      <div className="object-entries">
        <ForIn data={data}>{
          (k) => (
            <div key={k}>
              <span className="object-key">{k}</span>:&nbsp;
              <Type data={data[k]} />{
                k === keys[keys.length - 1] ? "" : ","
              }
            </div>
          )
        }</ForIn>
      </div>
      <span>{"}"}</span>
    </React.Fragment>
  );
}

export default ObjectComponent;
