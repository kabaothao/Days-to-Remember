import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../utils/mutations";
import { QUERY_EVENTS, GET_ME } from "../../utils/queries";
import { FaPhoneAlt } from "react-icons/fa";
import { ImCalendar } from "react-icons/im";
import { BsPersonFill, BsPenFill } from "react-icons/bs";
import Auth from "../../utils/auth";

const HomePage = () => {
  //for datepicker
  // const [startDate, setStartDate] = useState(new Date());

  //declaring variables to useState
  const [SaveInput, SetSaveInput] = useState({
    title: "",
    message: "",
    name: "",
    phoneNum: "",
    date: "",
  });
  const [value, setValue] = useState();
  const [addEvent, { error, data }] = useMutation(ADD_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        const { events } = cache.readQuery({ query: QUERY_EVENTS });

        cache.writeQuery({
          query: QUERY_EVENTS,
          data: { events: [addEvent, ...events] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: GET_ME });
      cache.writeQuery({
        query: GET_ME,
        data: { me: { ...me, events: [...me.events, addEvent] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("=======", SaveInput);
      const { data } = await addEvent({
        variables: {
          title: SaveInput.title,
          message: SaveInput.message,
          name: SaveInput.name,
          phoneNum: SaveInput.phoneNum,
          date: SaveInput.date,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    SetSaveInput({ ...SaveInput, [name]: value });
  };

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  const Results = () => <div id="submit">Your event has been saved!</div>;

  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        {Auth.loggedIn() ? (
          <>
            <h3 className="dtr">Add an Event</h3>

            {/* User Form Beginning */}
            <div className="form">
              <Form className="formWrapper" onSubmit={handleFormSubmit}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalTo"
                >
                  <Form.Label column lg={6}>
                    Title <BsPenFill />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="input"
                      name="title"
                      onChange={handleChange}
                      placeholder="Event"
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalTo"
                >
                  <Form.Label column lg={6}>
                    Message <BsPenFill />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="input"
                      name="message"
                      onChange={handleChange}
                      placeholder="Your message here"
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalTo"
                >
                  <Form.Label column lg={6}>
                    To <BsPersonFill />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="input"
                      name="name"
                      onChange={handleChange}
                      placeholder="Name"
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalFrom"
                >
                  <Form.Label column lg={6}>
                    Phone Number <FaPhoneAlt />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="input"
                      name="phoneNum"
                      onChange={handleChange}
                      placeholder="+1-XXX-XXX-XXXX"
                    />
                  </Col>
                </Form.Group>

                {/* In place of a date-picker */}
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalFrom"
                >
                  <Form.Label column lg={6}>
                    Date <ImCalendar />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="input"
                      name="date"
                      onChange={handleChange}
                      placeholder="mm/dd/yyyy"
                    />
                  </Col>
                </Form.Group>
                {/* 
                <Form.Label column lg={6}>
                  Pick the date
                </Form.Label>
                <DatePicker
                className="date-picker"
                  type="input"
                  name="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  onChange={handleChange}
                /> */}

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" onClick={onClick}>
                      {" "}
                      Submit
                    </Button>
                  </Col>
                </Form.Group>
                <h4>{showResults ? <Results /> : null}</h4>
              </Form>
            </div>
            {/* User Form End */}
          </>
        ) : (
          <h2 className="welcome">
            Welcome to DAYS TO REMEMBER. Please <Link to="/login">login</Link> or{" "}
            <Link to="/signup">signup</Link> to add an
            event.
          </h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
