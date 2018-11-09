import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signIn } from "../../../redux/actions/authAction";

class LoginTest extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/movies");
    }
  }

  render() {
    return (
      <div>
        <h1 onClick={this.props.signIn}>sign in</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { signIn }
)(LoginTest);
