import React, { Component } from 'react';
import "./landing.css";

var landing = () => {
    return (
        <div id="landing">
            <form>
            <label>
                Full Name:
                <input type="text" name="name" />
            </label>
            <label>
                Title:
                <input type="text" name="title" />
            </label>
            <label>
                Phone Number:
                <input type="text" name="phoneNumber" />
            </label>
            <label>
                Location:
                <input type="text" name="location" />
            </label>
            <label>
                email:
                <input type="text" name="email" />
            </label>
            <label>
                Linkedin:
                <input type="text" name="linkedin" />
            </label>
            <label>
                Github:
                <input type="text" name="github" />
            </label>
            <label>
                Website/Portfolio:
                <input type="text" name="website" />
            </label>
            <label>
                Degree:
                <input type="text" name="Degree" />
            </label>
            <label>
                GPA:
                <input type="text" name="gpa" />
            </label>
            <label>
                University:
                <input type="text" name="uniName" />
            </label>
            <label>
                Start Date:
                <input type="text" name="uniStart" />
            </label>
            <label>
                Graduation Date:
                <input type="text" name="uniGrad" />
            </label>
            <label>
                Skills:
                <input type="text" name="skills" />
            </label>
            <label>
                Job Title:
                <input type="text" name="jobTitle" />
            </label>
            <label>
                Job Company:
                <input type="text" name="jobCompany" />
            </label>
            <label>
                Job Location:
                <input type="text" name="jobLocation" />
            </label>
            <label>
                Job Start Date:
                <input type="text" name="jobStart" />
            </label>
            <label>
                Job End Date:
                <input type="text" name="jobEnd" />
            </label>
            <label>
                Description:
                <input type="text" name="jobDesc" />
            </label>
            <label>
                Contributions:
                <input type="text" name="jobContributions" />
            </label>
            <label>
                Project Title:
                <input type="text" name="projectTitle" />
            </label>
            <label>
                Project Technologies used:
                <input type="text" name="projectTech" />
            </label>
            <label>
                Project Date:
                <input type="text" name="projectDate" />
            </label>
            <label>
                Project Description:
                <input type="text" name="projectDesc" />
            </label>
            <label>
                Project Contributions:
                <input type="text" name="projectContributions" />
            </label>
            </form>
            <input type="submit" value="Submit" />
        </div>
    )
}

export default landing;