// @ts-check
// tslint:disable:max-line-length
import * as React from "react";
import { expect } from "chai";
import { shallow, configure, render, mount } from "enzyme";
import { ForOf, ForIn } from "../lib";

describe("<ForIn />", () => {
  it("Loops through an object's keys", () => {
    const data = {
      a: 1,
      b: 2,
      c: 3
    };
    const component = (
      <ForIn data={data}>{
        (k) => (
          <div className={k}>
            <h1>Key: {k}</h1>
            <h2>Value: {data[k]}</h2>
          </div>
        )
      }</ForIn>
    );

    const r = render(component);
    expect(r).to.have.lengthOf(3);

    const s = shallow(component);
    expect(s.html()).to.equal("<div class=\"a\"><h1>Key: a</h1><h2>Value: 1</h2></div><div class=\"b\"><h1>Key: b</h1><h2>Value: 2</h2></div><div class=\"c\"><h1>Key: c</h1><h2>Value: 3</h2></div>");
  });

  it("Loops through the indices of an array", () => {
    const data = [
      "a", "b", "c"
    ];
    const component = (
      <ForIn data={data}>{
        (i) => (
          <div className={data[i]}>
            <h1>Index: {i}</h1>
            <h2>Value: {data[i]}</h2>
          </div>
        )
      }</ForIn>
    );

    const r = render(component);
    expect(r).to.have.lengthOf(3);

    const s = shallow(component);
    expect(s.html()).to.equal("<div class=\"a\"><h1>Index: 0</h1><h2>Value: a</h2></div><div class=\"b\"><h1>Index: 1</h1><h2>Value: b</h2></div><div class=\"c\"><h1>Index: 2</h1><h2>Value: c</h2></div>");
  });
})