import React from "react";
import './resume.css';
import PDF from './Resume.pdf'


function Resume() {
    return (
        <div className="container-custom">
            <div className="container-resume">
                <h1 className="heading">Let's Connect</h1>
                <p>I am currently building my resume in html but for the time being,</p>
                <p>Please Click the link below to be directed to my Resume</p>
                <a href="https://docs.google.com/document/d/e/2PACX-1vSC6VhSuWUBuCu3Um43gbKCPSIw2wZnK1qnM7C9HFXwc5_DfLmw-bGR7CiYh7RebOXvN2hkJFHhpGBr/pub" target="_blank" id="btn" className="button button-outline button-white">Resume</a>
            </div>
        </div>

    )
}

export default Resume;       