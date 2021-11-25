import React, { useState } from "react";
import "./Form.css";
import { Form, Button, Alert } from "react-bootstrap";
// import { useMutation } from "@apollo/client";
// import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  return (
    // Login Form
    <div className="form-wrapper">

      <div className="form-left">
        <Form>
          <h1>Signup</h1>
          <Form.Group>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              name="username"
              //   onChange={handleInputChange}
              //   value={username}
              required
            />
            <Form.Control.Feedback type="invalid">
              {/* Username is required! */}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email address"
              name="email"
              //   onChange={handleInputChange}
              //   value={email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {/* Email is required! */}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              name="password"
              //   onChange={handleInputChange}
              //   value={password}
              required
            />
            <Form.Control.Feedback type="invalid">
              {/* Password is required! */}
            </Form.Control.Feedback>
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </div>



      <div className="form-right">
        <Form>
          <h1>Login</h1>
          <Form.Group>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              name="username"
              //   onChange={handleInputChange}
              //   value={username}
              required
            />
            <Form.Control.Feedback type="invalid">
              {/* Username is required! */}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              name="password"
              //   onChange={handleInputChange}
              //   value={password}
              required
            />
            <Form.Control.Feedback type="invalid">
              {/* Password is required! */}
            </Form.Control.Feedback>
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
