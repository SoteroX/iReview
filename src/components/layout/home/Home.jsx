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

  // componentDidMount() {
  //   const name = localStorage.getItem("Sotname");
  //   if (name) {
  //     console.log("name found: ", name);
  //     this.setState({ name: name });
  //   }
  // }

  // handleSignOut = () => {
  //   logout().then(() => {
  //     localStorage.removeItem(appTokenKey);
  //     this.props.history.push("/login");
  //     console.log("user signed out");
  //   });
  // };

  render() {
    // const test = localStorage.getItem("firebaseui::rememberedAccounts");
    // const test2 = JSON.parse(test);
    // console.log("test: ", test2[0].email);
    // console.log("user name is: ", this.state.name);
    return (
      <div>
        <div>Home</div>
      </div>
    );
  }
}
