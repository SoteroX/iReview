import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Custom components
import MoviePage from "./components/layout/movie/MoviePage";

import Home from "./components/layout/home/Home";
import Login from "./components/layout/login/Login";

import MovieItem from "./components/layout/movie/components/MovieItem";
// styles
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={MoviePage} />
          <Route exact path="/movies/:movieid" component={MovieItem} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
