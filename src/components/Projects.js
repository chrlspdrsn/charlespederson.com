import { React, useState } from "react";
import '../styles/Projects.css'
import profile from '../images/profile.jpg';
import { Box, Fade, Modal } from "@mui/material";
import project1 from "../json/project1.json";
import { Flex } from "@aws-amplify/ui-react";

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return(
        <section id="projects">
            <h2 className="projectsTitle">My Projects</h2>
            <span className="projectsDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
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
                <img src={profile} alt="Charles Pederson" className="projectImage" onClick={() => {
                    setActiveProject(project1);
                    handleOpen();
                }} />
                <img src={profile} alt="Charles Pederson" className="projectImage" onClick={() => {
                    setActiveProject(project1);
                    handleOpen();
                }}/>
           </div>
           <button className="projectsButton">See More...</button>


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