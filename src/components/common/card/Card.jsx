import React, { Component } from "react";
import { View, Mask } from "mdbreact";
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
      // state: this.props.data
    });
  };

  // componentDidMount() {
  //   this.setState({ data: this.props.data });
  // }

  render() {
    // console.log("state is: ", this.state.data);
    const { title, poster_path, backdrop_path } = this.props.data;
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
        className="overlay carousel-tile"
        onClick={this.handleClick}
      >
        {/* {console.log("inside card, data is: ", this.props.data)} */}
        <div style={{ position: "absolute", color: "white" }}>
          <img src={poster_img} className="img-fluid" alt="" />
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            {/* {console.log("card title is:", title)} */}
            <p style={{ backgroundColor: "black", padding: "4px 4px 2px 2px" }}>
              {title}
            </p>
          </div>
        </div>

        <Mask className="flex-center rgba-light-strong">
          <p className="white-text">Strong overlay</p>
        </Mask>
      </View>
    );
  }
}

export default Card;
