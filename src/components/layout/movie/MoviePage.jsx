import React, { Component } from "react";
import SearchBar from "../../common/search/SearchBar";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import NewReleased from "./components/NewReleased";

class MoviePage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Popular history={this.props.history} />
        <NewReleased history={this.props.history} />
        <TopRated history={this.props.history} />
      </div>
    );
  }
}

export default MoviePage;
