import { Card, Divider, Flex, Grid, Heading, Image, Text, View, useTheme } from '@aws-amplify/ui-react';
import React from 'react';
import QuoteCarousel from '../components/QuoteCarousel';
import jsonData from '../json/quotes.json';
import mainContent from '../json/mainContent.json';

const Home = () => {
    const {tokens} = useTheme();

    return (
        <Card>
            <Grid
                templateColumns="1fr 1fr"
                tempalteRows="10rem 10rem 10rem"
                gap={ tokens.space.small }
            >
                <View columnSpan={2} className="App-quote-box">
                    <QuoteCarousel data={jsonData}/>
                </View>
                <View columnSpan={2}>
                    <Divider />
                </View>

                {mainContent.map((content, index) => <>
                    <View rowSpan={2}>
                        <Heading level={3}>{content.heading}</Heading>
                    </View>
                    <View>
                        <Text>{content.first}</Text>
                    </View>
                    <View>
                        <Text>{content.second}</Text>
                    </View>
                </>)}
            </Grid>
        </Card>
    );
}

export default Home;