// @ts-check
// tslint:disable:max-line-length
import * as React from "react";
import { expect } from "chai";
import { shallow, configure, render, mount } from "enzyme";
import { ForOf } from "../lib";

describe("<ForOf />", () => {
  it("Loops through an array", () => {
    const data = [ 1, 2, 3, 4, 5 ];
    const component = (
      <ForOf from={data}>{
        (i) => <h1>{i}</h1>
      }</ForOf>
    );
    const r = render(component);
    expect(r).to.have.lengthOf(5);

    const s = shallow(component);
    expect(s.html()).to.equal("<h1>1</h1><h1>2</h1><h1>3</h1><h1>4</h1><h1>5</h1>");
  });

  it("Loops through a string", () => {
    const data = "react-for";
    const component = (
      <ForOf from={data}>{
        (i) => <h1>{i}</h1>
      }</ForOf>
    );
    const r = render(component);
    expect(r).to.have.lengthOf(9);

    const s = shallow(component);
    expect(s.html()).to.equal("<h1>r</h1><h1>e</h1><h1>a</h1><h1>c</h1><h1>t</h1><h1>-</h1><h1>f</h1><h1>o</h1><h1>r</h1>");
  });

  it("Loops through a TypedArray", () => {
    const data = new Uint8Array([ 0x00, 0xFF ]);
    const component = (
      <ForOf from={data}>{
        (i) => <h1>{i}</h1>
      }</ForOf>
    );
    const r = render(component);
    expect(r).to.have.lengthOf(2);

    const s = shallow(component);
    expect(s.html()).to.equal("<h1>0</h1><h1>255</h1>");
  });
  
  it("Loops through a Map", () => {
    const data = new Map([["a", 1], ["b", 2], ["c", 3]]);
    const component = (
      <ForOf from={data}>{
        ([key, value]) => <h1>{key}: {value}</h1>
      }</ForOf>
    );
    const r = render(component);
    expect(r).to.have.lengthOf(3);

    const s = shallow(component);
    expect(s.html()).to.equal("<h1>a: 1</h1><h1>b: 2</h1><h1>c: 3</h1>");
  });

  it("Loops through a Set", () => {
    const data = new Set([1, 1, 2, 3, 3, 4, 4, 5]);
    const component = (
      <ForOf from={data}>{
        (e) => <h1>{e}</h1>
      }</ForOf>
    );
    const r = render(component);
    expect(r).to.have.lengthOf(5);

    const s = shallow(component);
    expect(s.html()).to.equal("<h1>1</h1><h1>2</h1><h1>3</h1><h1>4</h1><h1>5</h1>");
  });
})
