import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import axios from "axios";
import { Container, Row, Col } from "mdbreact";
import Rating from "react-rating";
import AddButton from "../../../common/addButton/AddButton";
import { firestoreConnect } from "react-redux-firebase";
import ReviewCard from "../../../common/reviewCard/ReviewCard";
import NavBar from "../../../common/nav/NavBar";

const appTokenKey = "appToken";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      movieId: null,
      overview: null,
      release_date: null,
      poster_path: null,
      movieData: null,
      reviewData: [],
      isLoggedIn: false
    };
  }

  fetchMovie = url => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${url}?api_key=e1b4acb42ed87ae74b507b50b6f98cb0`
      )
      .then(res => {
        this.setState(prevState => ({
          title: res.data.title,
          overview: res.data.overview,
          poster_path: res.data.poster_path,
          release_date: res.data.release_date
        }));
        console.log("Successful, res is: ", res.data.title);
      })
      .catch(err => console.log("err: ", err));
  };

  fetchReviews = url => {
    this.props.firestore
      .collection("reviews")
      .doc(url.toString())
      .collection("review")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return doc.data();
        });
        this.setState({ reviewData: data });
      })
      .catch(err => console.log("err", err));
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieid } = match.params;

    this.fetchMovie(movieid);
    this.fetchReviews(movieid);
    if (localStorage.getItem(appTokenKey)) {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    const { match } = this.props;
    const {
      title,
      overview,
      release_date,
      poster_path,
      reviewData,
      isLoggedIn
    } = this.state;
    const { movieid } = match.params;

    const reviewItem = reviewData.map((item, i) => {
      return <ReviewCard className="mr-2" data={item} key={i} />;
    });
    return (
      <div>
        <NavBar />
        <Container fluid style={{ color: "white" }}>
          <div className="row">
            {/* Display the movie poster img */}
            <div className="col-md-4 col-sm-12 no-width-sm">
              <img
                src={"https://image.tmdb.org/t/p/w500" + poster_path}
                className="img-fluid"
                alt="Movie Poster"
              />
            </div>
            <div className="col-md-8 center-movie-text ">
              <div>
                {/* Display the movie title and release date */}
                <h1 className="movie-title-text">{title}</h1>
                <p className="release-text">Released: {release_date}</p>
              </div>
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
              />
              {/* Display the movie description */}
              <p>{overview}</p>
            </div>
          </div>
          <Container>
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-md-12">
                <h3 className="review-text">Reviews</h3>
              </div>
              {/* Display reviews from user if their are any */}
              <Row>{reviewData ? reviewItem : <div>No Reviews Yet </div>}</Row>
            </div>
          </Container>
          {isLoggedIn ? (
            <div>
              <AddButton movieID={movieid} />
            </div>
          ) : (
            <div>Login to add review</div>
          )}
        </Container>
      </div>
    );
  }
}

export default compose(
  withRouter,
  firestoreConnect([
    {
      collection: "reviews"
    }
  ])
)(MovieItem);
