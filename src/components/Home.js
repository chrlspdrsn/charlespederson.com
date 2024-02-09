import React from 'react';
import '../styles/Home.css';
import portrait from "../images/header.jpg"
import briefcase from "../images/briefcase.png"

import { Link } from '@aws-amplify/ui-react';

const Home = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="smallHeader">Hello,</span>
                <span className="largeHeader">
                    I'm <span className="emphasizedHeader">Charles</span><br/>Software Developer
                </span>
                <p className="introParagraph">
                    Innovative. Passionate. Driven.
                    </p>
                <Link>
                    <button className="homeButton">
                        <img src={briefcase} alt="Icon of briefcase with link to hire" className="homeButtonImage" />
                        Hire Me
                    </button>
                </Link>
            </div>
            <img src={portrait} alt="A portrait of Charles Pederson" className="portraitImage"/>
        </section>
    )
}

export default Home;