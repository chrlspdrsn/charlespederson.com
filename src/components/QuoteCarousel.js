import React, { useState, useEffect, useRef } from 'react';
import { Flex, View } from '@aws-amplify/ui-react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsQuote } from "react-icons/bs"

import "../styles/Carousel.css"

export default function QuoteCarousel({ data }) {
    const [slide, setSlide] = useState(0);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const previousSlide = () => {        
        setSlide(slide === 0 ? data.length - 1 : slide -1);
    }

    function resetTimeout() {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setSlide((prevIndex) =>
                    prevIndex === data.length -1 ? 0 : prevIndex + 1
                ),
            10000
        );

        return () => {
            resetTimeout();
        };
    }, [slide]);

    return (
        <View className="carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={previousSlide}/>
                {data.map((quote, index) =>
                    <div className={slide === index ? "slide": "slide slide-hidden"}>
                        <Flex alignItems={'baseline'}>
                            <BsQuote className="quotation"/>
                            <p>{quote.detail}</p>
                        </Flex>
                        <div className="author">
                            <p className="author-name">{quote.author}</p>
                            <p className="author-role">{quote.authorRole}</p>
                        </div>
                    </div>
                )}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />

            <span className="indicators">
                {data.map((_, index) => {
                    return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
                })}
            </span>
        </View>
    )    
};