import React from 'react';
import '../styles/Home.css';
import briefcase from "../images/icons/briefcase.png"

import { Link } from '@aws-amplify/ui-react';

const Home = () => {
    return (
        <section id="home">
            <div className="introContent">
                <span className="smallHeader"><span className="mobileEmphasis">Hello,</span></span>
                <span className="largeHeader">
                    <span className="mobileEmphasis">I'm <span className="emphasizedHeader">Charles</span><br/>Software Developer</span>
                </span>
                <p className="introParagraph">
                    <span className="mobileEmphasis">Innovative. Passionate. Driven.</span>
                </p>
                <a href="https://www.linkedin.com/in/charpede/" target="_blank" className="homeButton">
                    <img src={briefcase} alt="Icon of briefcase with link to hire" className="homeButtonImage" />
                    Hire Me
                </a>
            </div>
        </section>
    )
}

export default Home;