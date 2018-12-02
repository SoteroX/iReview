import React, { Component } from "react";
import { View } from "mdbreact";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  handleClick = () => {
    this.props.history.push({
      pathname: `/movies/${this.props.data.id}`
    });
  };

  render() {
    const { title, backdrop_path } = this.props.data;
    let poster_img = "";
    if (backdrop_path !== null) {
      poster_img = "https://image.tmdb.org/t/p/w500" + backdrop_path;
    } else {
      poster_img =
        "https://wfpl.org/wp-content/plugins/lightbox/images/No-image-found.jpg";
    }

    return (
      <View
        overlay="light-strong"
        className="overlay carousel-tile card-hover"
        onClick={this.handleClick}
      >
        <div style={{ position: "absolute", color: "white" }}>
          <img src={poster_img} className="img-fluid" alt="" />
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            <p style={{ backgroundColor: "black", padding: "4px 4px 2px 2px" }}>
              {title}
            </p>
          </div>
        </div>
      </View>
    );
  }
}

export default Card;
