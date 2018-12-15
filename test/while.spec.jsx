import * as React from "react";
import { expect } from "chai";
import { shallow, configure, render, mount } from "enzyme";
import { ForIn, While } from "../lib";

describe('<While />', () => {
  it('Terminates immediately on false', () => {
    const component = (
      <While test={() => false}>{
        () => <h1>Never rendered</h1>
      }</While>
    );
    const r = render(component);
    expect(r).to.have.lengthOf(0);

    const s = shallow(component);
    expect(s.html()).to.equal("");
  })
})