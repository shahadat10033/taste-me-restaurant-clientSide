import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Spinner } from "react-bootstrap";

const MenuBar = () => {
  const { user, logOut, loader } = useContext(AuthContext);
  if (loader) {
    <Spinner animation="border" variant="warning" />;
  }

  console.log("from menu", user);
  return (
    <div className="sticky-top  ">
      <Navbar
        variant="dark"
        expand="lg"
        className=" px-5  "
        style={{ backgroundColor: "#00000080" }}
      >
        <Navbar.Brand as={Link} to="/" className="text-warning fw-bold fs-2">
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
                  ? " text-decoration-none mt-3 text-primary ps-5"
                  : "ps-5 text-decoration-none mt-3 text-light"
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
                  ? " text-decoration-none mt-3 text-primary ps-5"
                  : "ps-5 text-decoration-none mt-3 text-light"
              }
            >
              Blog
            </NavLink>
            <span className="mt-2">
              {user ? (
                <span className="ms-5">
                  <span
                    className="me-2"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                  >
                    <img
                      src={user?.photoURL}
                      alt=""
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,

                        border: "2px solid yellow",
                      }}
                    />
                  </span>
                  <Tooltip id="my-tooltip" />
                  <button className="btn btn-light " onClick={logOut}>
                    Log out
                  </button>
                </span>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? " text-decoration-none  text-primary ms-5 btn  btn-warning text-light"
                      : "ms-5 text-decoration-none  text-light btn btn-light text-dark"
                  }
                >
                  log in
                  {/* <span style={{ marginTop: 10 }}>Log in</span> */}
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
