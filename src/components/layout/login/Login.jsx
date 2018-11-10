import React, { Component } from "react";
import { loginWithGoogle } from "../../../helpers/auth";
import { firebaseAuth } from "../../../config/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/movies",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashScreen: false,
      name: "",
      data: ""
    };
  }

  componentWillMount() {
    //grabs token if user is already signed in and redirects them
    if (localStorage.getItem(appTokenKey)) {
      this.props.history.push("/");
      return;
    }

    //if the Auth changes check if user is there
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        localStorage.removeItem(firebaseAuthKey);
        localStorage.setItem(appTokenKey, user.uid);
        localStorage.setItem("data", JSON.stringify(user));
        // localStorage.setItem("name", JSON.stringify(user.displayName));
        // localStorage.setItem("profilePic", JSON.stringify(user.photoURL));
        this.props.history.push("/");
      }
    });
  }

  handleGoogleLogin = () => {
    loginWithGoogle().catch(err => localStorage.removeItem(firebaseAuthKey));

    localStorage.setItem(firebaseAuth, "1");
  };

  render() {
    if (localStorage.getItem(firebaseAuthKey === "1")) {
      return <div>splashscreen boi</div>;
    }
    return (
      <div style={{ height: "79vh" }}>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}
