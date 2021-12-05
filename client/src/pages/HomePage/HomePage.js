import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../utils/mutations";
import { QUERY_EVENTS, GET_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const HomePage = () => {
  //for datepicker
  // const [startDate, setStartDate] = useState(new Date());

  //declaring variables to useState
  const [SaveInput, SetSaveInput] = useState({
    title: "",
    name: "",
    phoneNum: "",
    date: "11/7/2017",
  });

  const [addEvent, { error, data }] = useMutation(ADD_EVENT);
  //   update(cache, { data: { addEvent } }) {
  //     try {
  //       const { events } = cache.readQuery({ query: QUERY_EVENTS });

  //       cache.writeQuery({
  //         query: QUERY_EVENTS,
  //         data: { events: [addEvent, ...events] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }

  //     // update me object's cache
  //     const { me } = cache.readQuery({ query: GET_ME });
  //     cache.writeQuery({
  //       query: GET_ME,
  //       data: { me: { ...me, events: [...me.events, addEvent] } },
  //     });
  //   },
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("=======", SaveInput);
      const { data } = await addEvent({
        variables: {
          title: SaveInput.title,
          name: SaveInput.name,
          phoneNum: SaveInput.phoneNum,
          date: "11/1/2020",
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

  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <h3 className="dtr">Add an Event</h3>
        {Auth.loggedIn() ? (
          <>
            {/* User Form Beginning */}
            <div className="form">
              <Form className="formWrapper" onSubmit={handleFormSubmit}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalTo"
                >
                  <Form.Label column lg={6}>
                    Title
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="input"
                      name="title"
                      onChange={handleChange}
                      placeholder="Event"
                      // value={SaveInput}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalTo"
                >
                  <Form.Label column lg={6}>
                    To
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="input"
                      name="name"
                      onChange={handleChange}
                      placeholder="Name"
                      // value={SaveInput.name}
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalFrom"
                >
                  <Form.Label column lg={6}>
                    Phone Number
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="input"
                      name="phoneNum"
                      onChange={handleChange}
                      placeholder="phone number"
                      // value={SaveInput.phoneNum}
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
                    <Button type="submit">Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
            {/* User Form End */}
          </>
        ) : (
          <h2 className="welcome">
            Welcome to Days to Remember App. You need to be logged in to add an
            event. Please <Link to="/login">login</Link> or{" "}
            <Link to="/signup">signup.</Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default HomePage;
