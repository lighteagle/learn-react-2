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
        <h3>=========================================================</h3>
        <br />
        <h1 className="counter">Simple Counter</h1>
        <button onClick={this.add}> +1 </button>
        <h1 className="counter">
          {this.state.counter.toString().padStart(4, "0")}
        </h1>
        <button onClick={this.substract}> -1 </button>

        <h3>=========================================================</h3>
      </div>
    );
  }
}

export default SimpleCounter;
