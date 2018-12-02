import React from "react";
import { Container, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer
        className="font-small mt-4 bottom "
        style={{ border: "1px solid #141212" }}
      >
        <div
          style={{ backgroundColor: "#212121" }}
          className="footer-copyright text-center py-3"
        >
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://github.com/SoteroX/iReview"> Sotero </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;
