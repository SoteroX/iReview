import React, { Component } from "react";
import Welcome from "./component/Welcome";
import Profile from "./component/Profile";
import FooterPage from "../../common/footer/FooterPage";
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
