import React, { Component } from "react";
import { Button } from "./ButtonComponent";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        Count: {this.state.count}
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}
