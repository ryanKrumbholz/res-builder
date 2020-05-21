import React, { Component, useState, ReactDOM } from 'react';
import "./landing.css";
import ResumeTemplate from '../template/template';

var Landing = (props) => {
    const experience = (count) => {
        return (
        <div>
        <label>
                Job Title:
                <input type="text" name={`jobTitle${count}`} onChange={e => props.setValue(e)} placeholder="ex. Software Engineer"/>
            </label>
            <label>
                Job Company:
                <input type="text" name={`jobCompany${count}`} onChange={e => props.setValue(e)} placeholder="ex. NotFacebook"/>
            </label>
            <label>
                Job Location:
                <input type="text" name={`jobLocation${count}`} onChange={e => props.setValue(e)} placeholder="ex. Menlo Park, CA"/>
            </label>
            <label>
                Job Start Date:
                <input type="text" name={`jobStart${count}`} onChange={e => props.setValue(e)} placeholder="ex. 2020"/>
            </label>
            <label>
                Job End Date:
                <input type="text" name={`jobEnd${count}`} onChange={e => props.setValue(e)} placeholder="ex. Present"/>
            </label>
            <label>
                Description:
                <input type="text" name={`jobDesc${count}`} onChange={e => props.setValue(e)} placeholder="ex. Stuff about your job."/>
            </label>
            <label>
                Contributions:
                <input type="text" name={`jobContr${count}`} onChange={e => props.setValue(e)} placeholder="ex. What you contributed to."/>
            </label>
            </div>
        )}
    
    const education = (count) =>
        <div>
            <label>
                Degree:
                <input type="text" name={`degree${count}`} onChange={e => props.setValue(e)} placeholder="ex. Bachelor's of Science, Computer Science"/>
            </label>
            <label>
                GPA:
                <input type="text" name={`GPA${count}`} onChange={e => props.setValue(e)} placeholder="ex. 4.0"/>
            </label>
            <label>
                University:
                <input type="text" name={`uni${count}`} onChange={e => props.setValue(e)} placeholder="ex. New York University"/>
            </label>
            <label>
                Start Date:
                <input type="text" name={`eduStart${count}`} onChange={e => props.setValue(e)} placeholder="ex. 2019"/>
            </label>
            <label>
                Graduation Date:
                <input type="text" name={`eduGrad${count}`} onChange={e => props.setValue(e)} placeholder="ex. 2022"/>
            </label>
        </div>

    const project =  (count) => {
    return (
        <div>
            <label>
                Project Title:
                <input type="text" name={`projTitle${count}`} onChange={e => props.setValue(e)} placeholder="ex. Cool Project"/>
            </label>
            <label>
                Project Technologies used:
                <input type="text" name={`projTech${count}`} onChange={e => props.setValue(e)} placeholder="ex. Javascript, React, Redux"/>
            </label>
            <label>
                Project Date:
                <input type="text" name={`projDate${count}`} onChange={e => props.setValue(e)} placeholder="ex. 2020"/>
            </label>
            <label>
                Project Description:
                <input type="text" name={`projDesc${count}`} onChange={e => props.setValue(e)} placeholder="ex. Stuff about your project"/>
            </label>
            <label>
                Project Contributions:
                <input type="text" name={`projContr${count}`} onChange={e => props.setValue(e)} placeholder="ex. Your contributions to project "/>
            </label>
        </div>
        )};

    const [jobCount, setJC] = useState(1);
    const [eduCount, setEC] = useState(0);
    const [projectCount, setPC] = useState(1);
    const [experienceElems, addExp] = useState([experience(0)]);
    const [educationElems, addEdu] = useState([]);
    const [projectElems, addProj] = useState([project(0)]);
    
    return (
        <div id="landing">
            <form onSubmit={e => e.preventDefault()}>
            <h2>Contact</h2>
            <label>
                Full Name:
                <input type="text" name="name" onChange={e => props.setValue(e)} placeholder="ex. Tyrell Zhang"/>
            </label>
            <label>
                Title:
                <input type="text" name="title" onChange={e => props.setValue(e)} placeholder="ex. Full Stack Engineer"/>
            </label>
            <label>
                Phone Number:
                <input type="text" name="phoneNumber" onChange={e => props.setValue(e)} placeholder="ex. 1234567890"/>
            </label>
            <label>
                Location:
                <input type="text" name="location" onChange={e => props.setValue(e)} placeholder="ex. Washington, D.C."/>
            </label>
            <label>
                email:
                <input type="text" name="email" onChange={e => props.setValue(e)} placeholder="ex. johhsmith@email.com"/>
            </label>
            <label>
                Linkedin:
                <input type="text" name="linkedin" onChange={e => props.setValue(e)} placeholder="ex. linkedin.com/in/yourname"/>
            </label>
            <label>
                Github:
                <input type="text" name="github"onChange={e => props.setValue(e)} placeholder="ex. github.com/yourname" />
            </label>
            <label>
                Website/Portfolio:
                <input type="text" name="website" onChange={e => props.setValue(e)} placeholder="ex. www.ryankrumbholz.me"/>
            </label>
            <h2>Education</h2>
            {educationElems}
            <button onClick={
                e => {
                    if (eduCount < 2)  {setEC(eduCount + 1); addEdu(educationElems.concat(education(eduCount)))}
                }}>Add Education</button>
            <h2>Experience</h2>
            {experienceElems}
            <button onClick={
                e => {
                    if (jobCount + projectCount < 6) {setJC(jobCount + 1); addExp(experienceElems.concat(experience(jobCount)))}
                }}>Add Experience</button>
            <h2>Projects</h2>
            {projectElems}
            <button onClick={
                e => {
                    if (jobCount + projectCount < 6) {setPC(projectCount + 1); addProj(projectElems.concat(project(projectCount)))}
                }}>Add Project</button>
            <h2>Skills</h2>
            <label>
                Skills:
                <input type="text" name="skills" onChange={e => props.setValue(e)} placeholder="ex. Python, Java, Kotlin, etc"/>
            </label>
            </form>
            <button  onClick={e => {props.setCount('eduCount', eduCount); props.setCount('jobCount', jobCount); props.setCount('projectCount', projectCount); props.presentResume()}}>Submit</button>
        </div>
    )
}

export default Landing;