import axios from "axios";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class userPhoto extends Component {
  constructor() {
    super();
    this.state = { userPhotos: [] };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((userPhotos) => {
        console.log(userPhotos.data);
        console.log("sukses");
        this.setState({
          userPhotos: userPhotos.data,
        });
      });
  }
  render() {
    return (
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="my-3">Photos {this.state.userId}</h2>
        <Row xs={2} md={4} className="g-4">
          {this.state.userPhotos.map((i) => {
            return (
              <Col>
                <Link to="/detail-photo" className="text-decoration-none text-dark">
                  <div className="my-3 text-center">
                    <img
                      src={i.thumbnailUrl}
                      alt="Thumbnail"
                      className="thumbnail"
                    />
                    <p className="mt-3">{i.title}</p>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default userPhoto;
