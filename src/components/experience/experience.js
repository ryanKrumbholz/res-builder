import React, { Component } from 'react';
import "./experience.css";

var ResumeExperience = props => {

    const itemTitle = "ItemTitle";
    const itemCompany = "Company"
    const itemLocation = "Location";
    const startDate = "Start";
    const endDate = "End";
    const tagline = "tagline"
    let bullets = []

    const bulletItems = props.bulletItems
    bulletItems.forEach(item => {
        bullets.push(<li>{item}</li>)
    });
    
    return (
        <div>
            <h4>{itemTitle}</h4>
            <h5>{`${itemCompany} | ${itemLocation} | ${startDate} - ${endDate}`}</h5>
            <p>{tagline}</p>
            <ul>
                {bullets}
            </ul>
        </div>
    )
}

export default ResumeExperience;