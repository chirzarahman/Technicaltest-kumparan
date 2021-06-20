import axios from "axios";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";

class usersPage extends Component {

  constructor() {
    super()
    this.state = { users: [] }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then( users => {
      console.log(users.data)
      console.log("sukses")
      this.setState({
        users: users.data
      })
    })
  }
  render() {
    return (
      <Container className="center">
        <Card className="card-users shadow">
          <Card.Title className="m-3">Table Users</Card.Title>
          <div className="card-body">
            <Table hover bordered responsive>
              <thead>
                <tr className="text-center">
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.state.users.map((user) => {
                  return (
                    <tr>
                      <td>{user.username}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td className="text-center">
                        <Link
                          to={`/user-post/${user.id}`}
                          className="text-decoration-none text-dark"
                        >
                          <Button variant="primary" size="sm2">
                            Post
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                }) }
              </tbody>
            </Table>
          </div>
        </Card>
      </Container>
    );
  }
}

export default usersPage;
