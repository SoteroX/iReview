import React, { Component } from "react";
import ScrollField from "../../../common/scroll/ScrollField";
import Card from "../../../common/card/Card";
import axios from "axios";

class TopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRated: []
    };
  }

  componentDidMount() {
    let popularUrl =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e1b4acb42ed87ae74b507b50b6f98cb0&language=en-US&page=1";
    this.fetchApi(popularUrl);
  }

  fetchApi = url => {
    axios
      .get(url)
      .then(res => {
        this.setState({
          topRated: res.data.results
        });
        console.log("Successful");
      })
      .catch(err => console.log("err: ", err));
  };

  render() {
    const { topRated } = this.state;
    const top = topRated.map(data => {
      // console.log("data:", data.title);
      return <Card history={this.props.history} key={data.id} data={data} />;
    });
    return (
      <div>
        <h1 className="title-heading">Top Rated</h1>
        <ScrollField>{top}</ScrollField>
      </div>
    );
  }
}

export default TopRated;
