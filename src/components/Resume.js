import React from "react";
import { Timeline } from "@mui/lab";
import '../styles/Resume.css'
import ResumeItem from "./ResumeItem";
import resumeItems from "../json/resumeItems.json"

const Resume = () => {
    return(
        <div id="resume">
            <h1 className="resumeTitle">Resume</h1>
            <Timeline position="alternate">
                {resumeItems.map((item, index) => {
                    return(
                        <ResumeItem {...item} />
                    )
                })}
            </Timeline>
        </div>
    )
}

export default Resume;