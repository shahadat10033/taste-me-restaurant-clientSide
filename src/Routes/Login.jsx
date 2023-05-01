import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-5 pt-5">
      <Form className="w-50 border border-5 mx-auto mt-5 p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
          New to this website?{" "}
          <Link to="/register">
            <span className="underline ">Register here</span>
          </Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;
