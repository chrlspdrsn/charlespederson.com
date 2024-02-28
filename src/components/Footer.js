import React from "react";
import '../styles/Footer.css'
import logo from '../images/logo.png'
import linkedInLogo from '../images/icons/linkedInLogo.png' 
import githubLogo from '../images/icons/skills/githubLogo.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="copyright">
                <img src={logo} alt="C P Logo" className="footerLogo" />
                <p className="footerText">&#169; Charles Pederson 2024</p>
            </div>
            <div className="social">
                <a href="https://github.com/chrlspdrsn" target="_blank">
                    <img src={githubLogo} alt="Github Logo" className="footerIcon"/>
                </a>
                <a href="https://www.linkedin.com/in/charpede/" target="_blank" >
                    <img src={linkedInLogo} alt="LinkedIn Logo" className="footerIcon" />
                </a>
            </div>
        </div>
    )
}

export default Footer;