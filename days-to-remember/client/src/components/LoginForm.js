// see SignupForm.js for comments
import React, { useState } from "react";
import "./Form.css";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";

// import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {


  return (
    <>
    <Form>
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
  </>
  );
};

export default LoginForm;
