import React, { Component } from "react";
import { HashLoader } from "react-spinners";
import axios from "axios";
// Custom Components
import ScrollField from "../../../common/scroll/ScrollField";
import Card from "../../../common/card/Card";

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      newRelease: []
    };
  }

  componentDidMount() {
    let newestURl =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=e1b4acb42ed87ae74b507b50b6f98cb0&language=en-US&page=1";
    this.fetchApi(newestURl);
  }

  fetchApi = url => {
    axios
      .get(url)
      .then(res => {
        this.setState({
          newRelease: res.data.results,
          loading: false
        });
        console.log("Newest: ", res.data.results);
      })
      .catch(err => console.log("err: ", err));
  };

  render() {
    const { newRelease, loading } = this.state;
    const newest = newRelease.map(data => {
      // console.log("data:", data.title);
      return <Card history={this.props.history} key={data.id} data={data} />;
    });

    return (
      <div>
        <h1>New Releases</h1>
        {loading !== true ? (
          <ScrollField>{newest}</ScrollField>
        ) : (
          <div className="sweet-loading" style={{ marginLeft: "50%" }}>
            <HashLoader
              sizeUnit={"px"}
              size={40}
              margin="2px"
              color={"#66d9ff"}
              loading={this.state.loading}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Popular;
