import React, { Component } from 'react';
import "./template.css";
import Experience from '../experience/experience';
import Project from '../project/project';

class ResumeTemplate extends Component {
    render () {
        const name = "Ryan Krumbholz";
        const title = "Full-Stack Developer";
        const phoneNumber = "(206) - 427 - 5234";
        const email = "rak535@nyu.edu";
        const linkedin = "linkedin.com/ryanKrumbholz";
        const github = "github.com/ryanKrumbholz";
        const website = "ryankrumbholz.me";
        const degree = "Bachelor's of Science, Computer Science";
        const gpa = "4.0";
        const uniName = "New York University";
        const uniStart = "2019";
        const uniEnd = "2022";
        let skillsList = ['JavaScript', 'Python', 'Java', 'Kotlin', 'C#', 'React', 'Node', 'Android', 'MongoDB', 'Redux', 'GraphQL', 'Rest', 'Html', 'CSS'];
        let skillsElemList = [];
        skillsList.forEach(skill => {
            skillsElemList.push(<li>{skill}</li>);
        });
        let experienceList = [<Experience bulletItems = {["item", "item", "item", "item"]}/>,
         <Experience bulletItems = {["item", "item", "item", "item"]}/>,  <Experience bulletItems = {["item", "item", "item", "item"]}/>];
        let projectsList = [<Project bulletItems = {["item", "item"]}/>,
        <Project bulletItems = {["item", "item"]}/>,
        <Project bulletItems = {["item", "item"]}/>];

        const header = 
                    <div id="header">
                        <h1>{name}</h1>
                        <h2>{title}</h2>
                    </div>

        const contact = 
                    <div id="contact">
                        <h3>Contact</h3>
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                        <p>{linkedin}</p>
                        <p>{github}</p>
                        <p>{website}</p>
                    </div>

        const education =
                    <div id="education">
                        <h3>Education</h3>
                        <p>{degree}</p>
                        <p>{gpa}</p>
                        <p>{uniName}</p>
                        <p>{`${uniStart} - ${uniEnd}`}</p>
                        <p>{degree}</p>
                        <p>{gpa}</p>
                        <p>{uniName}</p>
                        <p>{`${uniStart} - ${uniEnd}`}</p>
                    </div>

        const skills = 
                    <div id="skills">
                        <h3>Skills</h3>
                        <ul>
                            {skillsElemList}
                        </ul>
                    </div>

        const sideBody = 
                    <div id="sideBody">
                        {header}
                        {contact}
                        {education}
                        {skills}
                    </div>

        const experience = 
                    <div id="section"> 
                        <h3>Experience</h3>
                        {experienceList}
                    </div>

        const projects = 
                    <div>
                        <h3>Projects</h3>
                        {projectsList}
                    </div>

        const mainBody = 
                    <div id="mainBody">
                        {experience}
                        {projects}
                    </div>
        const body =
                    <div id="body">
                        {sideBody}
                        {mainBody}
                    </div>

        const resume = 
                    <div id="bg">
                        <div id="resume">
                            {/* {header} */}
                            {body}
                        </div>
                    </div>
                    

        return resume;
  }
}

export default ResumeTemplate;