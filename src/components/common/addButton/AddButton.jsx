import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Fa,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "mdbreact";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

import Rating from "react-rating";

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      textValue: "",
      rate: 0,
      title: "",
      reviewData: "",
      userData: ""
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const temp = localStorage.getItem("data");
    const user = JSON.parse(temp);
    this.setState({ userData: user.providerData });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleOnChange = e => {
    this.setState({ textValue: e.target.value });
  };

  handleRateChange = e => {
    this.setState({ rate: e });
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleOnSubmit = () => {
    const { title, textValue, rate } = this.state;
    // console.log("movieid: ", this.props.movieID.toString());
    if (title && textValue && rate) {
      this.props.firestore
        .collection("reviews")
        .doc(this.props.movieID.toString())
        .collection("review")
        .doc()
        .set(
          {
            rate: this.state.rate,
            user: this.state.userData,
            title: this.state.title,
            text: this.state.textValue
          },
          { merge: true }
        );
      this.setState({ modal: false });
    } else {
      console.log("Please feel out all fields");
    }
  };

  render() {
    // console.log("user date is: ", this.state.userData);
    // console.log("firestore: ", this.props.firestore);
    return (
      <div>
        <Button
          style={{
            background:
              "linear-gradient(90deg, rgb(54, 185, 110) 4%, rgb(0, 212, 255) 50%)",
            position: "fixed",
            bottom: "20px",
            right: "20px"
          }}
          onClick={this.toggle}
          className="add-button-style"
        >
          <i className="fa fa-plus fa-3x" />
        </Button>
        <Container>
          <Row>
            <Col>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className="cascading-modal"
                centered
                dialogClassName="custom-background"
              >
                <div
                  className="modal-header  white-text"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(54, 185, 110) 4%, rgb(0, 212, 255) 50%)"
                  }}
                >
                  <h4 className="title">
                    <Fa className="fa fa-pencil" />
                    Review form
                  </h4>
                  <button type="button" className="close" onClick={this.toggle}>
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <ModalBody style={{ color: "#1bead3" }}>
                  <Rating
                    stop={5}
                    initialRating={this.state.rate}
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    onChange={this.handleRateChange}
                  />
                  <Input
                    size="sm"
                    label="Review Title"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.handleTitleChange}
                    value={this.state.title}
                    className="input-style white-text"
                  />
                  <Input
                    size="sm"
                    type="textarea"
                    rows="2"
                    label="Your Review"
                    icon="pencil"
                    onChange={this.handleOnChange}
                    value={this.state.textValue}
                    className="input-style white-text"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button outline onClick={this.toggle}>
                    X
                  </Button>
                  <Button
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(54, 185, 110) 4%, rgb(0, 212, 255) 50%)"
                    }}
                    onClick={this.handleOnSubmit}
                    href={"/movies/" + this.props.movieID}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </Modal>
            </Col>
          </Row>
        </Container>
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
)(AddButton);
