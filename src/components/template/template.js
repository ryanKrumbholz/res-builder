import React, { Component } from 'react';
import "./template.css";
import Experience from '../experience/experience';
import Project from '../project/project';

export default class ResumeTemplate extends Component {
    state = this.props.state;
    name = this.state['name'];
    title = this.state['title'];
    phoneNumber = this.state['phoneNumber'];
    email = this.state['email'];
    linkedin = this.state['linkedin'];
    github = this.state['github'];
    website = this.state['website'];
    skillsList = this.state['skills'].split(', ')
    skillsElemList = [];
    eduList = [];
    experienceList = [];
    projectsList = [];

    pushSkills = () => {
        for (let i = 0; i < this.skillsList.length; i++) {
        this.skillsElemList.push(<li>{this.skillsList[i]}</li>);
        this.skillsList.splice(i, 1)
    }}
    

    header = 
                    <div id="header">
                        <h1>{this.name}</h1>
                        <h2>{this.title}</h2>
                    </div>

    contact = 
                    <div id="contact">
                        <h3>Contact</h3>
                        <p>{this.phoneNumber}</p>
                        <p>{this.email}</p>
                        <p>{this.linkedin}</p>
                        <p>{this.github}</p>
                        <p>{this.website}</p>
                    </div>

     education =
                    <div id="education">
                        <h3>Education</h3>
                        <p>{this.degree}</p>
                        <p>{this.gpa}</p>
                        <p>{this.uniName}</p>
                        <p>{`${this.uniStart} - ${this.uniEnd}`}</p>
                        <p>{this.degree}</p>
                        <p>{this.sgpa}</p>
                        <p>{this.uniName}</p>
                        <p>{`${this.uniStart} - ${this.uniEnd}`}</p>
                    </div>

    skills = 
                    <div id="skills">
                        <h3>Skills</h3>
                        <ul>
                            {this.skillsElemList}
                        </ul>
                    </div>

    sideBody = 
                    <div id="sideBody">
                        {this.header}
                        {this.contact}
                        {this.education}
                        {this.skills}
                    </div>

    experience = 
                    <div id="section"> 
                        <h3>Experience</h3>
                        {this.experienceList}
                    </div>

    projects = 
                    <div>
                        <h3>Projects</h3>
                        {this.projectsList}
                    </div>

    mainBody = 
                    <div id="mainBody">
                        {this.experience}
                        {this.projects}
                    </div>
    body =
                    <div id="body">
                        {this.sideBody}
                        {this.mainBody}
                    </div>

    resume = 
                    <div id="bg">
                        <div id="resume">
                            {this.body}
                        </div>
                        <button onClick={window.print}>Download Resume</button>
                    </div>

    render () { 
        this.pushSkills();   
        return this.resume;
  }
}
