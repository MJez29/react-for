import React from 'react';
import { For } from 'react-for';
import Object from "./object";
import logo from './logo.svg';
import './App.css';

const obj = {
  a: 4,
  b: "hey",
  c: [
    "foo",
    7,
    {
      d: 5,
      e: {},
      f: false
    }
  ],
  g: true
}

const App = () => (
  <div className="App">
    {/* <header className="App-header">
      <For start={0} compare={i => i < 5} next={i => i + 1}>{
        (i) => <img src={logo} key={i} className="App-logo" alt="logo" />
      }</For>
    </header> */}
    <Object data={obj} />
  </div>
);

export default App;
