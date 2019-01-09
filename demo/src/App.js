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

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      json: obj
    };
  }

  onChange = (json) => {
    this.setState({ json });
  }

  render() {
    return (
      <div className="App">
        <JSONInput onChange={this.onChange} />
        <JSONFormatter data={this.state.json} />
      </div>
    );
  }
}

export default App;
