import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Navbar,Container, Nav, Modal, Tab } from 'react-bootstrap';
import "./Navbar.css";

import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="nav" fixed="top">
        <Container>
          <Navbar.Brand>Days To Remember</Navbar.Brand>
        </Container>
        {/* if user is logged in show saved books and logout */}
        {Auth.loggedIn() ? (
          <>
          <Nav.Item>
            <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
          </Nav.Item>
          </>
        ) : (
          <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
        )}
      </Navbar>
    </>
  );
};

export default AppNavbar;
