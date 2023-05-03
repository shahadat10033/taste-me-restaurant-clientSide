import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
const MenuBar = () => {
  const user = null;
  return (
    <div className="sticky-top  ">
      <Navbar
        variant="dark"
        expand="lg"
        className=" px-5  "
        style={{ backgroundColor: "#00000080" }}
      >
        <Navbar.Brand as={NavLink} to="/" className="text-warning fw-bold fs-2">
          Taste Me Restaurant
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? " text-decoration-none mt-2 text-primary ps-5"
                  : "ps-5 text-decoration-none mt-2 text-light"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? " text-decoration-none mt-2 text-primary ps-5"
                  : "ps-5 text-decoration-none mt-2 text-light"
              }
            >
              Blog
            </NavLink>
            <span className="ps-5">
              {user ? (
                <span>
                  <span>user.photo</span>
                  <button className="btn btn-light ">Log out</button>
                </span>
              ) : (
                <NavLink to="/login">
                  <button className="btn btn-light ">Log in</button>
                </NavLink>
              )}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuBar;
