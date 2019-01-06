// @ts-check
import React from "react";
import { ForIn } from "react-for";

import "./object.css";
import Type from "../type";

const Object = ({ data }) => (
  <React.Fragment>
    <span>{"{"}</span>
    <div className="object-entries">
      <ForIn data={data}>{
        (k) => (
          <div>
            <span className="object-key">{k}</span>:&nbsp;
            <Type data={data[k]} />,
          </div>
        )
      }</ForIn>
    </div>
    <span>{"}"}</span>
  </React.Fragment>
);

export default Object;
