import React, { Component } from "react";

class ScrollField extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="carousel-row">{this.props.children}</div>
      </div>
    );
  }
}

export default ScrollField;
