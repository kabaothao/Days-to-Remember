import React, { useState } from "react";
import "./Form.css";
import { Form, Button} from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
// import { HomePage } from "../pages/HomePage";
import Auth from "../utils/auth";

//TODO: I still need to work on LoginForm
const SignupForm = () => {
   // set initial form state
   const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

   //TODO: set addUser mutation
   const [addUser] = useMutation(ADD_USER);

   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setUserFormData({...userFormData, [name]: value });
   };

   const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //TODO: 
    try {
      //const response = await createUser(userFormData);
      //set up useMutation hook
      const {data} = await addUser({ variables: userFormData  });
      console.log(data);

      if (!data) {
        throw new Error("something went wrong!");
      }

      //pass in token recevied from mutation response
      Auth.login(data.addUser.token);
      //part of mutation use
      window.location.reload();
    } catch (err) {
      console.error(err);
      //setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
    
  };

  return (
    
    // Login Form
    <div className="form-wrapper">

      <div className="form-left">
        <Form onSubmit={handleFormSubmit}>
          <h1>Signup</h1>
          <Form.Group>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
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
              onChange={handleInputChange}
              value={userFormData.email}
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
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              {/* Password is required! */}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            type='submit'
          >
            Submit
          </Button>
        </Form>
      </div>


    </div>
  );
};

export default SignupForm;
