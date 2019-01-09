import React from "react";
import ObjectComponent from "../object";
import StringComponent from "../string";
import NumberComponent from "../number";
import ArrayComponent from "../array";
import BooleanComponent from "../boolean";

const Type = ({ data }) => {
  switch (typeof data) {
    case "object":
      return Array.isArray(data) ? <ArrayComponent data={data} /> : <ObjectComponent data={data} />;
    case "string":
      return <StringComponent data={data} />;
    case "number":
      return <NumberComponent data={data} />;
    case "boolean":
      return <BooleanComponent data={data} />;
    default:
      throw new Error("Invalid type");
  }
};

export default Type;
