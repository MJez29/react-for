// @ts-check
import * as React from "react";
import { expect } from "chai";
import { shallow, render } from "enzyme";
import { DoWhile } from "../lib";

describe("<DoWhile />", () => {
  it("Loops once on false", () => {
    const component = (
      <DoWhile test={() => false}>{
        () => <h1>1</h1>
      }</DoWhile>
    );
    const r = render(component);
    expect(r).to.have.lengthOf(1);

    const s = shallow(component);
    expect(s.html()).to.equal("<h1>1</h1>");
  });
  it("Loops until false", () => {
    let i;
    const component = (
      <DoWhile test={() => i > 0}>{
        () => <h1 key={i}>{i--}</h1>
      }</DoWhile>
    );
    i = 3;
    const r = render(component);
    expect(r).to.have.lengthOf(3);

    i = 3;
    const s = shallow(component);
    expect(s.html()).to.equal("<h1>3</h1><h1>2</h1><h1>1</h1>");
  });
});
