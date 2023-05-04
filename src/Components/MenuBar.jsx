import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const MenuBar = () => {
  const { user, logOut } = useContext(AuthContext);

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
            <span className="mt-2">
              {user ? (
                <span className="ms-5">
                  <span
                    className="me-2"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Hello world!"
                  >
                    <img
                      src={user.user?.photoURL}
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
                      ? " text-decoration-none mt-2 text-primary ps-5"
                      : "ps-5 text-decoration-none mt-2 text-light"
                  }
                >
                  <span style={{ marginTop: 10 }}>Log in</span>
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
