import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MoviePage from "./components/layout/movie/MoviePage";
import { connect } from "react-redux";
import { createProject } from "./redux/actions/projectAction";
import NavBar from "./components/common/nav/NavBar";
import FooterPage from "./components/common/footer/Footer";
import Home from "./components/layout/home/Home";
import GamePage from "./components/layout/games/GamePage";
import Login from "./components/layout/login/Login";
import Signup from "./components/layout/signup/Signup";
import Test from "./components/layout/test/Test";
import LoginTest from "./components/layout/test/LoginTest";
import TodoTest from "./components/layout/test/TodoTest";
import { fetchUser } from "./redux/actions/authAction";
import Profiles from "./components/layout/profiles/Profiles";
import Profile from "./components/layout/profile/Profile";
import MovieItem from "./components/layout/movie/components/MovieItem";
import "./styles.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rabbit",
      id: 45,
      rate: 10
    };
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  handleClick = () => {
    this.props.createProject(this.state);
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={MoviePage} />
            <Route exact path="/movies/:movieid" component={MovieItem} />
            <Route exact path="/games" component={GamePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/test/login" component={LoginTest} />
            {/* <Route exact path="/test/todo" component={TodoTest} /> */}
          </Switch>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createProject: project => dispatch(createProject(project))
//   };
// };

export default connect(
  null,
  { fetchUser }
)(App);
