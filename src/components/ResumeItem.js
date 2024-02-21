import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";
import liferayLogo from "../images/icons/liferay.png"
import biolaLogo from "../images/icons/biola.jpg"

const ResumeItem = ( props ) => {
    let year = props.year;
    let org = props.org;
    let content = props.content;
    let jobTitle = props.jobTitle;
    let colorProp = props.color;
    let highlightColor = props.highlightColor;

    return (
        <TimelineItem>
            
                <TimelineOppositeContent 
                    sx={{ margin: 'auto' }}
                    variant="h5"
                >
                    <span style={{ background: highlightColor, borderRadius: '0.5rem', padding: '0.5rem'}}>
                        {year}
                    </span>
                </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                    <TimelineDot className="timelineDot">
                        <img src={ org==="Liferay Inc." ? liferayLogo : biolaLogo } className="timelineDotImage" />
                    </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h4" className="timelineTitle">
                    {jobTitle}
                </Typography>
                <Typography variant="h6">
                    <span className="timelineOrg" style={{ color: colorProp }}>{org}</span>
                </Typography>
                <Typography variant="body1">
                    <div dangerouslySetInnerHTML={{__html: content}}/>
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ResumeItem;