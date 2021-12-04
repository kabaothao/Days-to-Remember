import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Modal, Tab } from "react-bootstrap";
import "./Navbar.css";
import { MdCake } from "react-icons/md";

// import SignUpForm from './SignupForm';

import Auth from "../utils/auth";

const AppNavbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="nav" fixed="top">
        <Container>
          <Navbar.Brand className="cake" as={Link} to='/'>
            DR <MdCake />{" "}
          </Navbar.Brand>
        </Container>
        {/* if user is logged in show saved books and logout */}
        {Auth.loggedIn() ? (
          <>
            <Nav.Item>
              <Nav.Link className="btn btn-lg btn-info m-2" to="/events">
              <Link to="/events">Events</Link> 
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="btn btn-lg btn-info m-2"
                onClick={Auth.logout}
              >
                Logout
              </Nav.Link>
            </Nav.Item>
          </>
        ) : (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </Navbar>
    </>
  );
};

export default AppNavbar;
