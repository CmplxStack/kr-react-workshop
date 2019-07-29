import React, { Component } from "react";
import { Button } from "./ButtonComponent";

interface ICounterState {
  count: number;
}
export default class Counter extends Component<any, ICounterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }

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
