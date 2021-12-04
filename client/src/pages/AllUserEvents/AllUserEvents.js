import React, { useState, useEffect } from "react";
import "./AllUserEvents.css";
import { Button } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
// import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { QUERY_EVENTS, QUERY_EVENT } from "../../utils/queries";
import { REMOVE_EVENT } from "../../utils/mutations";

// import Auth from '../../utils/auth';

const AllUserEvents = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const userData = data?.events || [];
  // console.log("???", userData);
  // console.log("data", data);

  const [removeEvent] = useMutation(REMOVE_EVENT);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteEvent = (event) => {
    event.preventDefault();
    removeEvent({
      variables: { eventId: event._id },
    });
  };

  if (!userData.length) {
    return <h3>No Events Yet</h3>;
  }
  return (
    <div className="events-page">
      <h1 className="event-page-discr">Your Events</h1>

      {userData &&
        userData.map((event) => (
          <div className="event-border">
            <div key={event._id} className="event-title">
              {event.title}
            </div>
            <div key={event._id} className="event-date">
              {event.date}
              <div>
                <Button
                  onSubmit={handleDeleteEvent}
                  className="event-delete-btn"
                  type="submit"
                >
                  delete
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllUserEvents;
