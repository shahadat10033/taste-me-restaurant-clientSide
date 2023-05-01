import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const user = null;
  return (
    <div className="fixed-top  ">
      <Navbar bg="dark" variant="dark" expand="lg" className=" px-5  ">
        <Link to="/">
          <Navbar.Brand>Taste Me Restaurant</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" className="ps-5  ">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="ps-5  ">
              Blog
            </Nav.Link>
            <span className="ps-5">
              {user ? (
                <span>
                  <span>user.photo</span>
                  <button className="btn btn-light ">Log out</button>
                </span>
              ) : (
                <Link to="/login">
                  <button className="btn btn-light ">Log in</button>
                </Link>
              )}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuBar;
