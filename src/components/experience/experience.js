import React, { Component } from 'react';
import "./experience.css";

var ResumeExperience = props => {

    const itemTitle = props.title;
    const itemCompany = props.company;
    const itemLocation = props.location;
    const startDate = props.start;
    const endDate = props.end;
    const tagline = props.tagline;
    const bulletItems = (props.contr) ? props.contr.split(',') : [];
    let bullets = [];

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