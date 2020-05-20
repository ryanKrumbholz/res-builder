import React, { Component } from 'react';
import "./project.css";

var ResumeExperience = props => {

    const itemTitle = "Project";
    const technologies = ["Tech", "Tech", "Tech", "Tech"]
    const date = "date";
    const tagline = "tagline"
    let bullets = []

    const bulletItems = props.bulletItems
    bulletItems.forEach(item => {
        bullets.push(<li>{item}</li>)
    });
    
    return (
        <div>
            <h4>{itemTitle}</h4>
            <h5>{`${technologies} | ${date}`}</h5>
            <p>{tagline}</p>
            <ul>
                {bullets}
            </ul>
        </div>
    )
}

export default ResumeExperience;