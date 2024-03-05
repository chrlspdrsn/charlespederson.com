import React from 'react';
import '../styles/Home.css';
import linkedInIcon from "../images/icons/linkedInLogo.png"
import Reveal from '../animations/Reveal';

const Home = () => {
    return (
        <section id="home">
            <div className="introContent">
                <Reveal>
                    <span className="smallHeader">Hello,</span>
                </Reveal>
                <Reveal>
                    <div className="mobileCenter">
                        <span className="largeHeader">
                            I'm <span className="emphasizedHeader">Charles</span><br/>
                            Software Developer
                        </span>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="additionalContent">
                        <p className="introParagraph">Innovative. Passionate. Driven.</p>
                        <a href="https://www.linkedin.com/in/charpede/" target="_blank" className="homeButton">
                            <img src={linkedInIcon} alt="LinkedIn Logo" className="homeButtonImage" />
                            Connect with Me
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Home;