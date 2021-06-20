import axios from "axios";
import "../../assets/css/style.css";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class userPost extends Component {
  constructor() {
    super();
    this.state = { userPosts: [] };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((userPosts) => {
        console.log(userPosts.data);
        console.log("sukses");
        this.setState({
          userPosts: userPosts.data,
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
        <h2 className="my-3">Postingan {this.state.userId}</h2>
        <Row xs={1} md={2} className="g-4">
          {this.state.userPosts.map((i) => {
            return (
              <Col>
                <Card>
                  <Card.Title className="mx-3 mt-3">{i.title}</Card.Title>
                  <Card.Body>
                    <Card.Text>{i.body}</Card.Text>
                    <Link to="/" className="text-decoration-none text-primary">
                      comment
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default userPost;
