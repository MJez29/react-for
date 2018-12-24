import React from 'react';
import { For } from 'react-for';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <For start={0} compare={i => i < 5} next={i => i + 1}>{
        (i) => <img src={logo} className="App-logo" alt="logo" />
      }</For>
    </header>
  </div>
);

export default App;
