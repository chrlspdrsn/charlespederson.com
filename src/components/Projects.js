import React from "react";
import '../styles/Projects.css'
import profile from '../images/profile.jpg';

const Projects = () => {
    return(
        <section id="projects">
            <h2 className="projectsTitle">My Projects</h2>
            <span className="projectsDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            <div className="projectImages">
                <img src={profile} alt="Charles Pederson" className="projectImage" />
                <img src={profile} alt="Charles Pederson" className="projectImage" />
                <img src={profile} alt="Charles Pederson" className="projectImage" />
                <img src={profile} alt="Charles Pederson" className="projectImage" />
                <img src={profile} alt="Charles Pederson" className="projectImage" />
                <img src={profile} alt="Charles Pederson" className="projectImage" />
           </div>
           <button className="projectsButton">See More...</button>
        </section>
    )
}

export default Projects;