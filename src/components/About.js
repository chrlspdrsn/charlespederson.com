import { Card, Divider, Flex, Grid, Heading, Image, Text, View, useTheme } from '@aws-amplify/ui-react';
import React from 'react';
import QuoteCarousel from './QuoteCarousel';
import quoteData from '../json/quotes.json';
import mainContent from '../json/mainContent.json';
import "../styles/About.css"
import customer from "../images/icons/customer.png"

const About = () => {
    const {tokens} = useTheme();

    return (
        <section id="about">
            <span className="aboutTitle">Who am I?</span>

            <div className="aboutBars">
                {mainContent.map((content, index) => {
                    return (
                        <div className="aboutBar">
                            <img src={customer} alt={content.iconAlt} className="aboutImage"/>
                            <div className="aboutBarText">
                                <h2 className="aboutSubTitle">{content.heading}</h2>
                                <p className="aboutContent">
                                    {content.first} <br/><br/>
                                    {content.second}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default About;