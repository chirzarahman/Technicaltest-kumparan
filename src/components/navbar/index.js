import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import '../../assets/css/style.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light p-3 shadow">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Technical Test
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link menus"
                  to="/"
                  activeClassName="nav-active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link menus"
                  to="/users"
                  activeClassName="nav-active"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
