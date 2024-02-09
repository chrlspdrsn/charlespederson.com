import { Card, Divider, Flex, Grid, Heading, Image, Text, View, useTheme } from '@aws-amplify/ui-react';
import React from 'react';
import QuoteCarousel from './QuoteCarousel';
import jsonData from '../json/quotes.json';
import mainContent from '../json/mainContent.json';

const About = () => {
    const {tokens} = useTheme();

    return (
        <Card>
            <View className="App-quote-box">
                <QuoteCarousel data={jsonData}/>
            </View>

            <div className="App-content">
                <View>
                    <Divider />
                </View>

                {mainContent.map((content, index) => <>
                    <View>
                        <Heading level={3}>{content.heading}</Heading>
                    </View>
                    <View>
                        <Text>{content.first}</Text>
                    </View>
                    <View>
                        <Text>{content.second}</Text>
                    </View>
                </>)}
            </div>
        </Card>
    );
}

export default About;