import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../logo_Image/betlogo.png";
import LogInButton from "../Authentication/logInButton.js";
import LogOutButton from "../Authentication/logoutButton.js";
// import SongLoading from "../songLoading/songLoading";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .App-logo {
    width: 150px;
    font-size: 24px;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #ffffff;

    &:hover {
      color: #bbb;
    }
  }
`;

export const NavigationBar = (props) => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        {" "}
        <img className="App-logo" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link>
              <Link to="/SongLoading"> play </Link>
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Result</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">
                {" "}
                <LogInButton />{" "}
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">
                {" "}
                <LogOutButton />{" "}
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
