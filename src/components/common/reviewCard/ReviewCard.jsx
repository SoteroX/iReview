import React, { Component } from "react";
import { Card, CardImage, CardTitle, CardBody, CardText, Col } from "mdbreact";
import Rating from "react-rating";

export default class ReviewCard extends Component {
  render() {
    return (
      <Col
        style={{
          marginTop: "20px",
          wordBreak: "break-word",
          minWidth: "367px",
          marginBottom: "40px"
        }}
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
                background:
                  "linear-gradient(90deg, rgb(10, 91, 97) 4%, rgb(0, 212, 255) 50%)"
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
              background:
                "linear-gradient(90deg, rgb(10, 91, 97) 4%, rgb(0, 212, 255) 50%)"
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
