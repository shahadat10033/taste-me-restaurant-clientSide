import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="text-end me-5 mt-5">
        <button className="btn btn-warning mb-2">
          <span>
            <img
              src="google.svg"
              alt=""
              style={{ width: 20, height: 20 }}
            ></img>
          </span>
          google sign in
        </button>

        <br />
        <button className="btn btn-warning">
          <span className="pe-1">
            <img
              src="github.png"
              alt=""
              style={{ width: 20, height: 20 }}
            ></img>
          </span>
          github sign in
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center ">
        <Form className="w-50 border border-5  mb-5 p-5">
          <h3 className="text-center">Login Form</h3>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Form.Text className="text-danger">
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <Form.Text className="text-muted">
            New to this website?
            <Link to="/register">
              <span className="underline ">Register here</span>
            </Link>
          </Form.Text>
          <br />
        </Form>
      </div>
    </div>
  );
};

export default Login;
