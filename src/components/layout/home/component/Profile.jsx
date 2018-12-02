import React, { Component } from "react";
import NavBar from "../../../common/nav/NavBar";

export default class Profile extends Component {
  state = {
    user: null,
    loading: false
  };
  componentDidMount() {
    this.setState({ user: JSON.parse(localStorage.getItem("data")) });
  }
  render() {
    const { user } = this.state;
    if (user !== null) {
      console.log("user: ", user);
    }
    if (user === null) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div className="profile-section">
          <NavBar />
          <div className="profile-info">
            <img
              alt="profile pic"
              src={user.photoURL}
              style={{ width: "200px", borderRadius: "50%", margin: "0 auto" }}
            />
            <h1>Welcome</h1>
            <h3>{user.displayName}</h3>
          </div>
        </div>
      );
    }
  }
}
