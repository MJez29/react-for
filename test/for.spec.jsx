// @ts-check
import * as React from "react";
import { expect } from "chai";
import { render } from "enzyme";
import { For } from "../lib";

describe("<For />", () => {
  it("Loops through a range", () => {
    const wrapper = render(
      <For start={0} comparator={(i) => i < 5} next={i => i + 1}>{
        (i) => <h1 className="for" key={i}>{i}</h1>
      }</For>
    );
    expect(wrapper).to.have.lengthOf(5);
  });
});
