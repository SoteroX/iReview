import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Custom components
import MoviePage from "./components/layout/movie/MoviePage";
import NavBar from "./components/common/nav/NavBar";
import FooterPage from "./components/common/footer/FooterPage";
import Home from "./components/layout/home/Home";
import GamePage from "./components/layout/games/GamePage";
import Login from "./components/layout/login/Login";
import Test from "./components/layout/test/Test";
import TodoTest from "./components/layout/test/TodoTest";
import Profiles from "./components/layout/profiles/Profiles";
import Profile from "./components/layout/profile/Profile";
import MovieItem from "./components/layout/movie/components/MovieItem";
// styles
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={MoviePage} />
          <Route exact path="/movies/:movieid" component={MovieItem} />
          <Route exact path="/games" component={GamePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/test" component={Test} /> */}
          {/* <Route exact path="/test/todo" component={TodoTest} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
