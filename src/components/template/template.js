import React, { Component } from 'react';
import "./template.css";
import Experience from '../experience/experience';
import Project from '../project/project';
import Education from '../education/education';

export default class ResumeTemplate extends Component {
    state = this.props.state;
    name = this.state['name'];
    title = this.state['title'];
    phoneNumber = this.state['phoneNumber'];
    email = this.state['email'];
    linkedin = this.state['linkedin'];
    github = this.state['github'];
    website = this.state['website'];
    skillsList = (this.state['skills']) ? this.state['skills'].split(',') : '';
    jobCount = this.state['jobCount'];
    eduCount = this.state['eduCount'];
    projCount = this.state['projectCount'];
    skillsElemList = [];
    eduList = [];
    experienceList = [];
    projectsList = [];

    pushSkills = () => {
        for (let i = 0; i < this.skillsList.length; i++) {
            console.log(i)
            this.skillsElemList.push(<li>{this.skillsList[i]}</li>);
    }
    this.skillsList = [];
}

    pushExperiences = () => {
        for (let i = 0; i < this.jobCount; i++) {
            this.experienceList.push(<Experience title = {this.state[`jobTitle${i}`]} company = {this.state[`jobCompany${i}`]} location = {this.state[`jobLocation${i}`]} start = {this.state[`jobStart${i}`]} end = {this.state[`jobEnd${i}`]} tagline = {this.state[`jobDesc${i}`]} contr = {this.state[`jobContr${i}`]}/>)
        }
        this.jobCount = 0;
    }

    pushEdu = () => {
        for (let i = 0; i < this.eduCount; i++) {
            this.eduList.push(<Education degree = {this.state[`degree${i}`]} gpa = {this.state[`GPA${i}`]} uniName = {this.state[`uni${i}`]} uniStart = {this.state[`eduStart${i}`]} uniEnd ={this.state[`eduGrad${i}`]}/>)
        }
        this.eduCount =  0;
    }

    pushProjects = () => {
        for (let i = 0; i < this.projCount; i++) {
            this.projectsList.push(<Project title  = {this.state[`projTitle${i}`]} technologies = {this.state[`projTech${i}`]} date  = {this.state[`projDate${i}`]} tagline = {this.state[`projDesc${i}`]} expContr = {this.state[`projContr${i}`]}/>)
        }
        this.projCount = 0;
    }

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
                        {/* <p>{this.linkedin}</p>   */}
                        <p>{this.github}</p>
                        <p>{this.website}</p>
                    </div>

     education =
                    <div id="education">
                        {this.eduList}
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
                        <div id="buttons">
                            {/* <button onClick={() => this.props.reviseResume()}>Revise</button> */}
                            <button onClick={window.print}>Download Resume</button>
                        </div>
                    </div>

    render () { 
        this.pushSkills();  
        this.pushEdu();
        this.pushExperiences();
        this.pushProjects();
        return this.resume;
  }
}
