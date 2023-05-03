import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Register = () => {
  const { emailRegister, setUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const image = form.photoURL.value;
    const password = form.password.value;
    const email = form.email.value;
    console.log(name, image, password, email);

    emailRegister(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    form.reset();
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <Form
          className="w-50 border border-5 mx-auto mb-5 p-5"
          onSubmit={handleRegister}
        >
          <Form.Text className="fw-bold fs-3 ">Registration Form</Form.Text>
          <br />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photoURL"
              placeholder="photo url"
              required
            />
          </Form.Group>
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
            Already have an account?
            <Link to="/login">
              <span className="underline ">Login here</span>
            </Link>
          </Form.Text>
        </Form>
      </div>
    </>
  );
};

export default Register;
