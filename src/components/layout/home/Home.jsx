import React, { Component } from "react";
import { logout } from "../../../helpers/auth";

const appTokenKey = "appToken";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phote: ""
    };
  }

  render() {
    return (
      <div>
        <div>Homepage coming soon</div>
      </div>
    );
  }
}
