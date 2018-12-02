import React, { Component } from "react";
import SearchBar from "../../common/search/SearchBar";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import NewReleased from "./components/NewReleased";
import NavBar from "../../common/nav/NavBar";
import FooterPage from "../../common/footer/FooterPage";

class MoviePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar history={this.props.history} />
        <Popular history={this.props.history} />
        <NewReleased history={this.props.history} />
        <TopRated history={this.props.history} />
        <FooterPage />
      </div>
    );
  }
}

export default MoviePage;
