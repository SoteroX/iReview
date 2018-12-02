import React, { Component } from "react";

export default class SearchMenuItem extends Component {
  handleOnClick = () => {
    this.props.history.push({
      pathname: `/movies/${this.props.movie.id}`
    });
  };
  render() {
    const { title, poster_path } = this.props.movie;
    let poster_img = "";
    if (poster_path !== null) {
      poster_img = "https://image.tmdb.org/t/p/w500" + poster_path;
    } else {
      poster_img =
        "https://wfpl.org/wp-content/plugins/lightbox/images/No-image-found.jpg";
    }
    return (
      <div onClick={this.handleOnClick}>
        <img
          alt={title}
          src={poster_img}
          style={{
            height: "24px",
            marginRight: "10px",
            width: "24px"
          }}
        />
        <span>{title}</span>
      </div>
    );
  }
}
