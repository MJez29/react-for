// @ts-check
import * as React from "react";
import { expect } from "chai";
import { shallow, configure, render, mount } from "enzyme";
import { ForIn, While } from "../lib";

describe("<While />", () => {
  it("Terminates immediately on false", () => {
    const component = (
      <While test={() => false}>{
        () => <h1>Never rendered</h1>
      }</While>
    );
    const r = render(component);
    expect(r).to.have.lengthOf(0);

    const s = shallow(component);
    expect(s.html()).to.equal("");
  });
  it("Loops until false", () => {
    let i;
    const component = (
      <While test={() => i > 0}>{
        () => <h1>{i--}</h1>
      }</While>
    );
    i = 3;
    const r = render(component);
    expect(r).to.have.lengthOf(3);

    i = 3;
    const s = shallow(component);
    expect(s.html()).to.equal("<h1>3</h1><h1>2</h1><h1>1</h1>");
  })
})