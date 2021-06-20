// import axios from "axios";
import "../../assets/css/style.css";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

class detailPhoto extends Component {

  render() {
    return (
      <Container className="center">
        <Card className="card-users shadow">
          <Card.Title className="m-3">Detail Photo</Card.Title>
          <div className="card-body">
          </div>
        </Card>
      </Container>
    );
  }
}

export default detailPhoto;