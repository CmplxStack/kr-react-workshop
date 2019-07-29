import React, { Component } from "react";

interface IButtonProps {
  onClick: VoidFunction;
}

export default class ButtonComponent extends Component<IButtonProps> {
  render() {
    return (
      <div>
        {/* This only works because the props are spread which makes onClick match to onClick */}
        <button {...this.props}>Click Me</button>
        {/* This will work even if we change the name of the prop function passed in */}
        <button onClick={this.props.onClick}>Click Me Too</button>
      </div>
    );
  }
}
