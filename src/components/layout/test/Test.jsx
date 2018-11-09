import React, { Component } from "react";
import { compose } from "redux"; // can also come from recompose
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorname: "",
      title: "",
      createdAt: new Date(),
      category: "",
      uid: null
    };
  }

  handleOnChange = e => {
    this.setState({ category: e.target.value });
  };

  addCategory() {
    // this.props.firestore.add(
    //   { collection: "reviews" },
    //   {
    //     name: this.state.category
    //   }
    // );
    console.log("state catregory: ", this.state.category);
    this.props.firestore
      .collection("reviews")
      .doc("movieId")
      .collection("review")
      .doc()
      .set({ name: this.state.category }, { merge: true });
    this.setState({ category: "" });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.category}
          onChange={e => this.setState({ category: e.target.value })}
        />
        <button onClick={evt => this.addCategory()}>Add Category</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.firestore.ordered.reviews
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "reviews"
    }
  ])
)(Test);
