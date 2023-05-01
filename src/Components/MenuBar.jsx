import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const user = 123;
  return (
    <div className="fixed-top ">
      <Navbar bg="dark" variant="dark" expand="lg" className="d-flex px-5 ">
        <div className="flex-grow-1">
          <Link to="/">
            <Navbar.Brand>Taste Me Restaurant</Navbar.Brand>
          </Link>
        </div>
        <div>
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
                  <button className="btn btn-light ">Log in</button>
                )}
              </span>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MenuBar;
