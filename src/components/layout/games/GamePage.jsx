import React, { Component } from "react";
import SearchBar from "../../common/search/SearchBar";
import Card from "../../common/card/Card";
import { ClipLoader } from "react-spinners";

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
  componentWillMount() {
    this.setState({ loading: true });
  }
  render() {
    const { loading } = this.state;
    if (loading === true) {
      return (
        <div className="sweet-loading">
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={this.state.loading}
          />
        </div>
      );
    } else {
      return <div>Gamepage coming soon</div>;
    }
  }
}

export default GamePage;
