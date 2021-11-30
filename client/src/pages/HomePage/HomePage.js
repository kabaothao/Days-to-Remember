import React, { useState } from "react";
import "./HomePage.css";
// import userForm from '../userForm/userForm';
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import Auth from "../../utils/auth";

const HomePage = () => {

  const [startDate, setStartDate] = useState(new Date());
  

    return (
      <div className="home-page">
        <div className="home-page-wrapper">
          <h3 className="dtr">Generate Card</h3>

          {/* User Form Beginning */}
          <div className="form">
            <Form className="formWrapper">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalTo"
              >
                <Form.Label column lg={6}>
                  Title
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="input" placeholder="Event" />
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
                  <Form.Control type="input" placeholder="Name" />
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
                  <Form.Control type="input" placeholder="phone number" />
                </Col>
              </Form.Group>

              <Form.Label column lg={6}>
                Pick the date
              </Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

              {/* 
            <FloatingLabel controlId="floatingTextarea2">
              <Form.Control
                as="textarea"
                placeholder="Leave a personalized message"
                style={{ height: "100px" }}
              />
            </FloatingLabel> */}

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Submit</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
          {/* User Form End */}
        </div>
      </div>
    );
}

export default HomePage;