import axios from "axios";
import "../../assets/css/style.css";
import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class userAlbum extends Component {
  constructor() {
    super();
    this.state = { userAlbums: [] };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((userAlbums) => {
        console.log(userAlbums.data);
        console.log("sukses");
        this.setState({
          userAlbums: userAlbums.data,
        });
      });
  }
  render() {
    return (
      <Container
        style={{
          height: "90vh",
        }}
      >
        <h2 className="my-3">Album {this.state.userId}</h2>
        <Row xs={1} md={2} className="g-4">
          {this.state.userAlbums.map((i) => {
            return (
              <Col>
                <Link
                  to={`/user-photos/${i.id}`}
                  className="text-decoration-none text-dark"
                >
                  <Card body className="card-album">
                    {i.title}
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default userAlbum;
