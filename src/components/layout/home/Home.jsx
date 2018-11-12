import React, { Component } from "react";
import NavBar from "../../common/nav/NavBar";
import { Button } from "mdbreact";
import Welcome from "./component/Welcome";
import Profile from "./component/Profile";
const appTokenKey = "appToken";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  componentWillMount() {
    if (localStorage.getItem("appToken")) {
      this.setState({ loggedIn: true });
    }
  }

  render() {
    const { loggedIn } = this.state;
    const display = loggedIn === true ? <Profile /> : <Welcome />;
    return <React.Fragment>{display}</React.Fragment>;
  }
}
