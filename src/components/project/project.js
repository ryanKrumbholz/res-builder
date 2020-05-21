import React, { Component } from 'react';
import "./project.css";

var ResumeExperience = props => {

    const itemTitle = props.title;
    const technologies = props.technologies;
    const date = props.date;
    const tagline = props.tagline;
    const bulletItems = (props.expContr) ? props.expContr.split(',') : [];
    let bullets = [];
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