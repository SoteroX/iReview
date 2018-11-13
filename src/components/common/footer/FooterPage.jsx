import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer className="font-small " style={{ border: "1px solid #141212" }}>
        <div
          style={{ backgroundColor: "#212121" }}
          className="footer-copyright text-center py-3"
        >
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href=""> Sotero </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
