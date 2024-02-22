import { React, useEffect, useState } from "react";
import { Timeline } from "@mui/lab";
import '../styles/Resume.css'
import ResumeItem from "./ResumeItem";
import resumeItems from "../data/resumeItems.json"
import { useMediaQuery } from "@mui/material";

const Resume = () => {
    const matches = useMediaQuery("(min-width: 1000px)")

    return(
        <div id="resume">
            <h1 className="resumeTitle">Resume</h1>
            <Timeline position={ matches ? "alternate" : "vertical" }>
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