import React from 'react';
import QuoteCarousel from './QuoteCarousel';
import quoteData from '../data/quotes.json';
import "../styles/About.css"
import { mainContent } from '../data/mainContent';
import FadeIn from '../animations/FadeIn';

const About = () => {
    return (
        <section id="about">
            <span className="aboutTitle">Who am I?</span>

            <div className="aboutBars">
                {mainContent.map((content, index) => {
                    return (
                        <FadeIn>
                            <div className="aboutBar">
                                <img src={content.icon} alt={content.iconAlt} className="aboutImage"/>
                                <div className="aboutBarText">
                                    <h2 className="aboutSubTitle">{content.heading}</h2>
                                    <p className="aboutContent">
                                        <div dangerouslySetInnerHTML={{__html: content.content}}/>
                                    </p>
                                    {content.skills && <>
                                        <h3 className="skillsTitle">Skills</h3>
                                            {Array.isArray(content.skills) ? 
                                                <div className="skillsLogos">
                                                    {content.skills.map((skill, index) => {
                                                        return(
                                                            <img src={skill.icon} alt={skill.alt} className="skillsLogoImg"/>
                                                        )
                                                    })}
                                                </div>
                                            :
                                            <div className="skillsText">{content.skills}<span className="skillsSpread" /></div>
                                            }
                                    </>}
                                </div>
                            </div>
                        </FadeIn>
                    )
                })}
            </div>

            <QuoteCarousel data={quoteData}/>
        </section>
    );
}

export default About;