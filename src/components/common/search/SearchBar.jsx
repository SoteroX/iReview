import React, { Component } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead-bs4.css";
import axios from "axios";
// Custom Components
import SearchMenuItem from "./SearchMenuItem";

const filterByFields = ["title"];

class SearchBar extends Component {
  state = {
    allowNew: false,
    isLoading: false,
    multiple: false,
    options: []
  };

  _handleSearch = query => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=e1b4acb42ed87ae74b507b50b6f98cb0&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then(res => {
        this.setState({
          isLoading: false,
          options: res.data.results
        });
      })
      .catch(err => console.log("error fetch search: ", err));
  };

  handleKeyPress = e => {
    e.stopPropagation();
    console.log("event is: ", e);
    console.log("charCode is: ", e.charCode);
    console.log("keycode: ", e.keyCode);
    if (e.keyCode === 13) {
      console.log("Enter press");
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div
        className="container mx-auto"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-6">
            <AsyncTypeahead
              {...this.state}
              filterBy={filterByFields}
              labelKey="title"
              onSearch={this._handleSearch}
              // selectHintOnEnter={true}
              // highlightOnlyResult={true}
              // onKeyDown={this.handleKeyPress}
              placeholder="Search movie..."
              renderMenuItemChildren={option => (
                <SearchMenuItem history={this.props.history} movie={option} />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
