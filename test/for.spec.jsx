import React from 'react';
import { expect } from 'chai';
import { shallow, configure, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { For } from '../lib';

describe('<For />', () => {
  it('Loops properly', () => {
    const wrapper = render(
      <For start={0} comparator={(i) => i < 5} next={i => i + 1}>{
        (i) => <h1 className="for">{i}</h1>
      }</For>
    );
    expect(wrapper).to.have.lengthOf(5);
  });
})
