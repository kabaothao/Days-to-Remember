import React from "react";
import './PeopleList.css';

const PeopleList = () => {
    return (
      <div className="people-list-page">
        <div className="people-list-wrapper">
          <div className="people-list-container">
            <h2 className="container-title">Birthdays Today</h2>
            <li className="container-list">List of people here</li>
            <li className="container-list">List of people here</li>
            <li className="container-list">List of people here</li>
          </div>
        </div>
      </div>
    );
}

export default PeopleList;