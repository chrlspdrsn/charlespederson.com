import { Card, Divider, Flex, Grid, Heading, Image, Text, View, useTheme } from '@aws-amplify/ui-react';
import { RiCheckDoubleFill, RiComputerFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import React from 'react';
import QuoteCarousel from '../components/QuoteCarousel';
import jsonData from '../json/quotes.json';

const Home = () => {
    const {tokens} = useTheme();

    return (
        <Card>
            <Grid
                templateColumns="1fr 1fr"
                tempalteRows="10rem 10rem 10rem"
                gap={ tokens.space.small }
            >
                <View columnSpan={2}>
                    <Image className="App-image" src={require("../images/profile.jpg")}/>
                </View>
                <View columnSpan={2} className="App-quote-box">
                    <QuoteCarousel data={jsonData}/>
                </View>
                <View columnSpan={2}>
                    <Divider />
                </View>
                <View rowSpan={2}>
                    <Flex alignItems="center">
                        <Heading level={3}>Software and Tech</Heading>
                        <RiComputerFill />
                    </Flex>
                </View>
                <View>
                    <Text>I graduated Summa Cum Laude with a Bachelor's Degree of Computer Science and Minor in Business Administration from Biola University in 2021. My education focused on a range of topics, from Back-End programming with Java and C++ to Front-End development using HTML, CSS and Javascript frameworks and to Database management and an exploration of Artificial Intelligence.</Text>
                </View>
                <View>
                    <Text>Since then, I have been working in a professional capacity at Liferay Inc. developing custom tailored solutions for a variety of customers. I've used development frameworks ranging from Java and MySQL to React and CSS for full stack-development. I have been responsible for designing both complex Back-End logic and user friendly Front-End experiences. My work ethic and talent is proven by my promotions from Intern to Associate Engineer to Engineer.</Text>
                </View>
                <View rowSpan={2}>
                    <Flex alignItems="center">
                        <Heading level={3}>Customer Success</Heading>
                        <RiCheckDoubleFill />
                    </Flex>
                </View>
                <View>
                    <Text>From creating comprehensive documentation covering usage and technical implementation of software solutions, to leading meetings to plan features and demo the software, I've always provided tangible ways to enable cusotmers for success.</Text>
                </View>
                <View>
                    <Text>A primary example of this is when I was brought on a project by leadership to provide direct support to the development team and content creators. By helping the customer understand the software, develop custom resources and templates, and writing documentation to guide their processes, we were able to lead them to achieve their goals.</Text>
                </View>
                <View rowSpan={2}>
                    <Flex alignItems="center">
                        <Heading level={3}>Personal Growth</Heading>
                        <GiBrain />
                    </Flex>
                </View>
                <View>
                    <Text>Studying new material and learning new technologies has been a key part of my professional journey. Reading books including, but not limited to, <i>The Pragmatic Programmer</i> by Andy Hunt and Dave Thomas and <i>Clean Code</i> by Robert Martin have improved my programming skills and provided valuable insight into best practices for software development.</Text>
                </View>
                <View>
                    <Text>Through educational programs such as Udemy and LinkedIn Learning I have studied a wide array of technologies such as Docker, React, Object Oriented Programming, SprintBoot, NGINX, and more.</Text>
                </View>
            </Grid>
        </Card>
    );
}

export default Home;