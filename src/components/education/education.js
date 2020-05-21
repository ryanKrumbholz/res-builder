import React, { Component } from 'react';
import "./education.css";

var ResumeExperience = props => {
    const degree = props.degree;
    const gpa = props.gpa;
    const uniName = props.uniName;
    const uniStart = props.uniStart;
    const uniEnd = props.uniEnd;

    return (
        <div>
            <h3>Education</h3>
            <p>{degree}</p>
            <p>{gpa}</p>
            <p>{uniName}</p>
            <p>{`${uniStart} - ${uniEnd}`}</p>
        </div>
    )
}

export default ResumeExperience;