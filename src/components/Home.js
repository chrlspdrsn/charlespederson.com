import React from 'react';
import '../styles/Home.css';
import linkedInIcon from "../images/icons/linkedInLogo.png"
import Reveal from '../animations/Reveal';

const Home = () => {
    return (
        <section id="home">
            <div className="introContent">
                <Reveal>
                    <span className="smallHeader"><span className="mobileEmphasis">Hello,</span></span>
                </Reveal>
                <Reveal>
                    <div className="mobileCenter">
                        <span className="largeHeader">
                            <span className="mobileEmphasis">
                                I'm <span className="emphasizedHeader">Charles</span><br/>
                                Software Developer
                            </span>
                        </span>
                    </div>
                </Reveal>
                <Reveal>
                    <p className="introParagraph">
                        <span className="mobileEmphasis">Innovative. Passionate. Driven.</span>
                    </p>
                    <a href="https://www.linkedin.com/in/charpede/" target="_blank" className="homeButton">
                        <img src={linkedInIcon} alt="LinkedIn Logo" className="homeButtonImage" />
                        Connect with Me
                    </a>
                </Reveal>
            </div>
        </section>
    )
}

export default Home;