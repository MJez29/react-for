import React from "react";
import Type from "../type";

import "./json-formatter.css";

const JSONFormatter = ({ data }) => (
  <div className="json-formatter">
    <Type data={data} />
  </div>
);

export default JSONFormatter;
