import React from 'react';
import './App.css';
import JSONFormatter from './json-formatter';
import JSONInput from './json-input';

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
    <JSONInput onChange={() => null} />
    <JSONFormatter data={obj} />
  </div>
);

export default App;
