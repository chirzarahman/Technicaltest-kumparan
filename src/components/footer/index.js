import { Component } from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-5 py-3 bg-light">
        <Container>
          <p className="text-muted text-center">
            &copy; Technical Test from Kumparan
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
