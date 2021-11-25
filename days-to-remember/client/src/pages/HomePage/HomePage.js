import React from "react";
import "./HomePage.css";
import PeopleList from '../PeopleList/PeopleList';
import Auth from "../../utils/auth";


const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-page-wrapper">
                <h3 className="dtr">Days To Remember</h3>
                <PeopleList/>
            </div>
        </div>
    );
}

export default HomePage;