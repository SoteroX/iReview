import React, { Component } from "react";
import {
  Container,
  Card,
  CardImage,
  CardTitle,
  CardBody,
  CardText,
  Button,
  Col
} from "mdbreact";
import Rating from "react-rating";

export default class ReviewCard extends Component {
  render() {
    console.log("inside review carddata: ", this.props.data.rate);
    return (
      <Col
        style={{ marginTop: "20px", wordBreak: "break-word" }}
        className="w-100 col-12 col-md-4"
      >
        <Card
          style={{
            margin: "auto"
          }}
        >
          <CardImage cascade tag="div">
            <div
              className="view gradient-card-header"
              style={{
                backgroundImage: "linear-gradient(-90deg, #022111, #07cb48)"
              }}
            >
              <img
                className="review-card-img"
                src={this.props.data.user[0].photoURL}
                alt=""
              />
            </div>
            <div className="review-rating-style">
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                initialRating={this.props.data.rate}
                readonly
              />
            </div>
          </CardImage>
          <CardBody
            style={{
              backgroundImage: "linear-gradient(-90deg, #022111, #07cb48)"
            }}
          >
            <CardTitle style={{ textAlign: "center" }}>
              {this.props.data.title}
            </CardTitle>
            <CardText style={{ color: "white" }}>
              {this.props.data.text}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
