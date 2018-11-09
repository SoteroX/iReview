import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "../card/Card";

class ScrollField extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="carousel-row">
          {/* {console.log("inside scrollfield")}
          {console.log("child prop is: ", this.props.children)} */}
          {/* {React.Children.count(this.props.children)} */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ScrollField;
