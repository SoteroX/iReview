import React, { Component } from "react";
import ScrollField from "../../../common/scroll/ScrollField";
import Card from "../../../common/card/Card";
import axios from "axios";

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularData: []
    };
  }

  componentDidMount() {
    let popularUrl = `
    https://api.themoviedb.org/3/movie/popular?api_key=e1b4acb42ed87ae74b507b50b6f98cb0&language=en-US&page=1`;
    this.fetchApi(popularUrl);
  }

  fetchApi = url => {
    axios
      .get(url)
      .then(res => {
        this.setState({
          popularData: res.data.results
        });
        console.log("Successful");
      })
      .catch(err => console.log("err: ", err));
  };

  render() {
    const { popularData } = this.state;
    const dataItem = popularData.map(data => {
      // console.log("data:", data.title);
      return <Card history={this.props.history} key={data.id} data={data} />;
    });
    return (
      <div>
        <h1 className="title-heading">Popular</h1>
        <ScrollField>{dataItem}</ScrollField>
      </div>
    );
  }
}

export default Popular;
