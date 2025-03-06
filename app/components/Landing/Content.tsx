"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

// Assets
import Train from "../../public/t.svg";
import City from "../../public/city.png";

// Animation keyframes
const moveTrain = keyframes`
    0% {
        transform: translateX(-100%);
    }
    15% {
        transform: translateX(-60%);
    }
    50% {
        transform: translateX(10%);
    }
    85% {
        transform: translateX(8%);
    }
    100% {
        transform: translateX(100%);
    }
`;


const TrackContainer = styled.div`
    position: relative;
    width: 100vw; 
    margin-left: calc(-50vw + 50%); 
    height: 37vh;
    background: url(${City.src}) no-repeat center;
    background-size: cover;
    overflow: hidden;
    min-height: 160px; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        height: 30vh;
    }

    @media (max-width: 480px) {
        height: 30vh;
    }
`;




const TrainContainer = styled.div`
    position: absolute;
    bottom: 4%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    animation: ${moveTrain} 10s ease-out infinite;
    will-change: transform; 
    z-index: 5;
`;

const TrainImageWrapper = styled.div`
    display: flex;
    align-items: flex-end; 
`;

const TrainImage = styled(Image)`
    width: 20vw;
    max-width: 250px;
    height: auto;
    margin-right: -1px; 

    @media (max-width: 1200px) {
        width: 22vw;
        max-width: 220px;
    }

    @media (max-width: 768px) {
        width: 25vw;
        max-width: 180px;
    }

    @media (max-width: 480px) {
        width: 30vw;
        max-width: 150px;
    }
`;

export default function TrainAnimation() {
    const [trainCount, setTrainCount] = useState(3);

    useEffect(() => {
        // Adjust number of train cars based on screen width
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1200) {
                setTrainCount(4);
            } else if (width >= 768) {
                setTrainCount(3);
            } else {
                setTrainCount(2);
            }
        };

        // Set initial count
        handleResize();


        window.addEventListener('resize', handleResize);


        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <TrackContainer aria-label="Animated train scene with city background">

            <TrainContainer>
                <TrainImageWrapper>
                    {[...Array(trainCount)].map((_, index) => (
                        <TrainImage
                            key={`train-car-${index}`}
                            src={Train}
                            alt={`Boston T Train Car ${index + 1}`}
                            priority={index === 0}
                        />
                    ))}
                </TrainImageWrapper>
            </TrainContainer>
        </TrackContainer>
    );
}