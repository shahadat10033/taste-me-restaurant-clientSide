import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { googleSignUp, githubSignUp, emailLogin, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(`login page`, location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    console.log(password, email);

    emailLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <div className="text-end me-5 mt-5">
        <button className="btn btn-warning mb-2" onClick={googleSignUp}>
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
        <button className="btn btn-warning" onClick={githubSignUp}>
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
        <Form className="w-50 border border-5  mb-5 p-5" onSubmit={handleLogin}>
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
            <Form.Text className="text-danger">{error}</Form.Text>
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
