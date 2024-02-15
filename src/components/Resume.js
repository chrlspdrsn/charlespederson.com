import React from "react";
import '../styles/Resume.css'

const Resume = () => {
    return(
        <section id="resume">
            <h1 className="resumeTitle">Resume</h1>
            <hr/>
            <div className="resumeSection">
                <h2 className="resumeHeader">Professional Experience</h2>

                <div className="resumeSubsection">
                    <h3 className="resumeSubhead">Liferay Inc.</h3>
                    <h3 className="resumeSubhead">2021 to Present</h3>
                </div>

                <h3 className="resumeJobTitle">Consultant (2023 to Present)</h3>
                <ul className="resumeDescription">
                    <li className="resumePoint"></li>
                    <li className="resumePoint"></li>
                    <li className="resumePoint"></li>
                </ul>

                <h3 className="resumeJobTitle">Associate Consultant (2021-2022)</h3>
                <ul className="resumeDescription">
                    <li className="resumePoint"></li>
                    <li className="resumePoint"></li>
                    <li className="resumePoint"></li>
                </ul>

                <h3 className="resumeJobTitle">Software Engineering Intern (2021)</h3>
                <ul className="resumeDescription">
                    <li className="resumePoint"></li>
                    <li className="resumePoint"></li>
                    <li className="resumePoint"></li>
                </ul>
            </div>
            <div className="resumeSection">
                <h2 className="resumeHeader">Education</h2>
                <div className="resumeSubsection">
                    <h3 className="resumeSubhead">Bachelors of Computer Science at Biola University</h3>
                    <h3 className="resumeSubhead">2017-2021</h3>
                </div>
                 <ul className="resumeDescription">
                    <li className="resumePoint">I graduated Summa Cum Laude with 3.92 GPA in May 2021 with a Bachelors of Computer Science</li>
                    <li className="resumePoint">Completed additional Minors in Business Administration and Theological Studies, for a total of 60 additional units</li>
                    <li className="resumePoint">While a student, I participated in a variety of extracurricular activities such as volunteering for on campus conferences, working as a Teachers Assistant, RA and the Director of Administration for a student run organization. Additionally participated in intermural sports and other clubs</li>
                </ul>
            </div>
            <div className="resumeSection">
                <h2 className="resumeHeader">Skills</h2>

                <div className="skillsFlex">
                    <h3 className="resumeSubhead">Backend</h3>
                    <h3 className="resumeSubhead">Frontend</h3>
                    <h3 className="resumeSubhead">Tools and Software</h3>
                    <h3 className="resumeSubhead">Interpersonal</h3>
                </div>
            </div>
        </section>
    )
}

export default Resume;