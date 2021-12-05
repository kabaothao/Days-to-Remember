import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import "./AllUserEvents.css";
import { Button } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
// import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { QUERY_EVENTS, QUERY_EVENT, GET_ME } from "../../utils/queries";
import { REMOVE_EVENT } from "../../utils/mutations";
import Auth from '../../utils/auth';

const AllUserEvents = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const userData = data?.events || [];
  // console.log("???", userData);
  const [removeEvent] = useMutation(REMOVE_EVENT);
  // console.log("removing", userData);

  const handleDeleteEvent = async (eventId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log("event", eventId);
    try {
      await removeEvent({
        variables: { 
          eventId: eventId
        },
      })
    } catch (err) {
      console.error(err);
    }
  };
  
  if (!userData.length) {
    return <h3 className="no-events">No Events Yet</h3>;
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
            <Moment unix>{event.date / 1000}</Moment>
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
