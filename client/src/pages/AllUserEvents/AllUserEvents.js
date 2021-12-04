import React, { useState, useEffect } from "react";
import "./AllUserEvents.css";
import { Button } from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../../utils/queries';


const AllUserEvents = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];

  // const [events, setEvents] = useState();

  //logic for deleting one of the events
  // const handleDelete = (id) => {
  //   const newEvents = events.filter((event) => event.id !== id);
  //   setEvents(newEvents);
  // };

  // useEffect(() => {
  //     console.log('use effect ran');
  //     fetch('http://')
  //         .then(res => {
  //             return res.json()
  //         })
  //         .then((data) => {
  //             console.log("data", data);
  //             setEvents(data);
  //         })
  // }, []);

  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
    <div className="events-page">
      <h1 className="event-page-discr">This are All user's Events</h1>

      {/* <div className="events-container">
        {events &&
          events.map((event) => (
            <div className="event-border">
            <div key={event._id} className="event-title"></div>
            <div className="event-date">
              {event.date}
              <Button
            className="event-delete-btn"
            type="submit"
            // handleDelete={handleDelete}
          >
            delete
          </Button>
            </div>
            </div>
          ))} */}

        <div className="event-border">
          <div className="event-title">Bob's birthday</div>
          <div className="event-date">11/11/1991</div>
          <Button
            className="event-delete-btn"
            type="submit"
            // handleDelete={handleDelete}
          >
            delete
          </Button>
        </div>
      </div>

  );
};

export default AllUserEvents;
