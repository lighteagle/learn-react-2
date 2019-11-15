import React, { Component } from "react";

class SimpleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  add = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  substract = () => {
    this.state.counter
      ? this.setState({ counter: this.state.counter - 1 })
      : alert("You Can't make counter to negative");
  };
  render() {
    return (
      <div>
        <h1>Simple Counter</h1>
        <button onClick={this.substract}> -1 </button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.add}> +1 </button>
      </div>
    );
  }
}

export default SimpleCounter;
