import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { emailRegister, profileUpdate, logOut } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.username.value;
    const image = form.photoURL.value;
    const password = form.password.value;
    const email = form.email.value;
    console.log(name, image, password, email);
    // if (!/^.{0,5}$/.test(password)) {
    //   setError("Type at least 6 digit");

    //   return;
    // }
    emailRegister(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        // setUser(user);
        logOut();
        profileUpdate(name, image);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
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
            <Form.Text className="text-danger">{error}</Form.Text>
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
