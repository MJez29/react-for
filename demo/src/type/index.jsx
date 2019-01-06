import React from "react";
import ObjectComponent from "../object";
import String from "../string";
import Number from "../number";
import ArrayComponent from "../array";
import Boolean from "../boolean";

const Type = ({ data }) => {
  switch (typeof data) {
    case "object":
      return Array.isArray(data) ? <ArrayComponent data={data} /> : <ObjectComponent data={data} />;
    case "string":
      return <String data={data} />;
    case "number":
      return <Number data={data} />;
    case "boolean":
      return <Boolean data={data} />;
    default:
      throw new Error("Invalid type");
  }
};

export default Type;
