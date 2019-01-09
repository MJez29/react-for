import React from "react";

import "./json-input.css";

class JSONInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      invalid: false
    };
  }

  onChange = (event) => {
    const value = event.target.value;
    try {
      console.log(value);
      const json = JSON.parse(value);
      console.log(json);
      this.props.onChange(json);
      this.setState({
        invalid: false
      });
    } catch (e) {
      this.setState({
        invalid: true
      });
    } finally {
      this.setState({
        input: value
      });
    }
  }

  getClassNames = () => {
    return this.state.invalid && !this.state.invalid.length ? "invalid" : "";
  }

  render() {

    return (
      <div className="json-input">
        <h1>Enter JSON</h1>
        <textarea onChange={this.onChange} value={this.state.input} className={this.getClassNames()}></textarea>
      </div>
    )
  }
}

export default JSONInput;
