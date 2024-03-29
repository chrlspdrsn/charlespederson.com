import { React, useState } from "react";
import '../styles/Projects.css'
import profile from '../images/profile.jpg';
import { Box, Fade, Modal } from "@mui/material";
import project1 from "../data/project1.json";
import { Flex } from "@aws-amplify/ui-react";
import Reveal from "../animations/Reveal";
import FadeIn from "../animations/FadeIn";

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return(
        <section id="projects">
            <FadeIn duration="1" delay="0">
                <h2 className="projectsTitle">My Projects</h2>
                <span className="projectsDesc">The following projects demonstrate a range of skills and technologies I've used throughout my career.</span>
            </FadeIn>
            <Reveal>
                <div className="projectImages">
                    <img src={profile} alt="Charles Pederson" className="projectImage" onClick={() => {
                        setActiveProject(project1);
                        handleOpen();
                    }}/>
                    <img src={profile} alt="Charles Pederson" className="projectImage" onClick={() => {
                        setActiveProject(project1);
                        handleOpen();
                    }} />
                    <img src={profile} alt="Charles Pederson" className="projectImage" onClick={() => {
                        setActiveProject(project1);
                        handleOpen();
                    }} />
                    <img src={profile} alt="Charles Pederson" className="projectImage" onClick={() => {
                        setActiveProject(project1);
                        handleOpen();
                    }}/>
            </div>
           </Reveal>

            <a href="https://github.com/chrlspdrsn" className="projectsButton" target="_blank">See More...</a>
           
           <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box className="modalBox">
                        <Flex justifyContent="space-between" alignContent="center" alignItems="center"> 
                            <h2 id="modal-modal-title">
                                {activeProject.title}
                            </h2>
                            <p className="exit-button" onClick={handleClose}>X</p>
                        </Flex>
                        <div id="modal-modal-description">
                            <p>
                                {activeProject.description}
                            </p>
                        </div>
                        <div id="modal-modal-footer">
                            {activeProject.technologies ?
                                <>
                                    <h3 className="technologyTitle">Technologies Used:</h3>
                                    <Flex justifyContent="space-between" wrap="wrap">
                                        {activeProject.technologies.map( function(item) {
                                            return (<h3 className="technologyItem">{item}</h3>)
                                        })}
                                    </Flex>
                                </>
                                : <></>
                            }
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </section>
    )
}

export default Projects;