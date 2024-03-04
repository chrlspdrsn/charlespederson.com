import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import liferayLogo from "../images/icons/liferay.png"
import biolaLogo from "../images/icons/biola.jpg"
import Reveal from "../animations/Reveal";

const ResumeItem = ( props ) => {
    let year = props.year;
    let org = props.org;
    let content = props.content;
    let jobTitle = props.jobTitle;
    let colorProp = props.color;
    let highlightColor = props.highlightColor;

    const matches = useMediaQuery("(min-width: 1000px)")

    return (
        <TimelineItem>
            <TimelineOppositeContent 
                sx={{ margin: 'auto' }}
                variant="h5"
                className="mobileHidden"
            >
                <span className="timelineHighlight" style={{ background: highlightColor }} >
                    {year}
                </span>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <a href={ org==="Liferay Inc." ? "https://www.liferay.com/" : "https://www.biola.edu/about"} target="_blank">
                    <TimelineDot className="timelineDot">
                        <img src={ org==="Liferay Inc." ? liferayLogo : biolaLogo } className="timelineDotImage" />
                    </TimelineDot>
                </a>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Reveal>
                <Typography variant={ matches ? "h4" : "h5" } className="timelineTitle">
                    {jobTitle}
                </Typography>
                <Typography variant={ matches ? "h6" : "" }>
                    <span className="timelineOrg" style={{ color: colorProp }}>{org}</span>
                    { matches ? 
                        <></> :
                        <div className="timelineYear">
                            <span className="timelineHighlight" style={{ background: highlightColor }}>
                                {year}
                            </span>
                        </div>
                    }
                </Typography>
                <Typography variant="body1">
                    <div dangerouslySetInnerHTML={{__html: content}}/>
                </Typography>
                </Reveal>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ResumeItem;