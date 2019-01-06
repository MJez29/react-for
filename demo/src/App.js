import React from 'react';
import { For } from 'react-for';
import Object from "./object";
import logo from './logo.svg';
import './App.css';
import JSONFormatter from './json-formatter';

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
    <JSONFormatter data={obj} />
  </div>
);

export default App;
