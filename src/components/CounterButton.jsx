import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps", nextProps, "nextState:", nextState);
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  countPlus = () => {
    this.setState((state) => {
      return { count: this.state.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.countPlus}>
          click to count {this.state.count}{" "}
        </button>
      </div>
    );
  }
}

export default CounterButton;
