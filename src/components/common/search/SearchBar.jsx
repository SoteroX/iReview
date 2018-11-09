import React, { Component } from "react";
import { Input, Container, Row, Col, Fa, FormInLine } from "mdbreact";

class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-lg-6 col-md-6 col-sm-2 mx-auto">
            <div style={{marginTop: '20px', display: 'flex'}} className="active-cyan-4 mb-3">
              <Fa style={{margin: 'auto', marginRight: '8px', fontSize: '25px'}} icon="search" />
              <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;
