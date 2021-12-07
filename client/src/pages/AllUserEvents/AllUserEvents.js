import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./AllUserEvents.css";
import { Button } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_EVENTS, QUERY_EVENT, GET_ME } from "../../utils/queries";
import { REMOVE_EVENT } from "../../utils/mutations";
import { FaGrinStars } from "react-icons/fa";

const AllUserEvents = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me.events || [];
  const [removeEvent] = useMutation(REMOVE_EVENT);
  const [showResults, setShowResults] = React.useState(false);
  const Results = () => <div id="delete">Your event has been deleted! Pleas refresh the page =)</div>;

  const handleDeleteEvent = async (eventId) => {
    // const token = Auth.loggedIn() ? Auth.getToken() : null;
    try {
      const { data } = await removeEvent({
        variables: {
          eventId: eventId,
        },
      });
      console.log("data", data, "updated userdata", userData);
      setShowResults(true);
      window.location.reload();
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
          <>
            <div className="event-border">
              <div key={event._id} className="event-title">
                {event.title} <FaGrinStars />
              </div>
              <div key={event._id} className="event-name">
                of {event.name}
              </div>
              <div key={event._id} className="event-date">
                <Moment format="MM/DD/YYYY" unix>
                  {event.date / 1000}
                </Moment>
                <div>
                  <Button
                    onClick={() => handleDeleteEvent(event._id)}
                    className="event-delete-btn"
                    type="submit"
                  >
                    delete
                  </Button>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default AllUserEvents;
