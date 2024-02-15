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

                <h3 className="resumeJobTitle">Software Engineer/Consultant (2023 to Present)</h3>
                <ul className="resumeDescription">
                    <li className="resumePoint">Develop more advanced and complex software systems using Java microservices such as RESTful Web Services and APIs, React, Docker, Oracle database and more</li>
                    <li className="resumePoint">Thoroughly analyze software bugs using Linux to determine root causes of errors, including log analysis and debugging</li>
                    <li className="resumePoint">Mentor and train associate consultants on best practices for software development, maintaining clean code, SDLC best practices and managing customer interactions and collaboration</li>
                </ul>

                <h3 className="resumeJobTitle">Associate Software Engineer/Consultant (2021-2022)</h3>
                <ul className="resumeDescription">
                    <li className="resumePoint">Developed custom software solutions using Java and Java technologies such as JSP, MySQL, Jenkins and Git tailored to specific customer needs</li>
                    <li className="resumePoint">Work alongside team of 20 in SDLC process using Agile development methodology ensuring strong communication, both written and verbal, internally and with customers</li>
                    <li className="resumePoint">Design and test software solutions alongside other developers to ensure quality, dependable and readable code for purposes of scalability and performance</li>
                </ul>

                <h3 className="resumeJobTitle">Software Engineering Intern (2021)</h3>
                <ul className="resumeDescription">
                    <li className="resumePoint">Use Git, Java, JSP technology to develop efficient and high-quality code emphasizing web software and client-server communication</li>
                    <li className="resumePoint">Learn industry standards for SDLC process as well as Agile development, software development best practices, and professionalism concepts</li>
                    <li className="resumePoint">Shadow senior developers on a customer project and assist with code development that was used in final project for client</li>
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