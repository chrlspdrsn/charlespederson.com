import React from 'react';
import QuoteCarousel from './QuoteCarousel';
import quoteData from '../data/quotes.json';
import "../styles/About.css"
import { mainContent } from '../data/mainContent';

const About = () => {
    return (
        <section id="about">
            <span className="aboutTitle">Who am I?</span>

            <div className="aboutBars">
                {mainContent.map((content, index) => {
                    return (
                        <div className="aboutBar">
                            <img src={content.icon} alt={content.iconAlt} className="aboutImage"/>
                            <div className="aboutBarText">
                                <h2 className="aboutSubTitle">{content.heading}</h2>
                                <p className="aboutContent">
                                    <div dangerouslySetInnerHTML={{__html: content.content}}/>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <QuoteCarousel data={quoteData}/>
        </section>
    );
}

export default About;