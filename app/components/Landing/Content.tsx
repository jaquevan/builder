"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled, { keyframes, css } from "styled-components";

// Assets
import Train from "@/public/t.svg";
import City from "@/public/city.png";

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
    margin-bottom: 0;
    height: 30vh;
    background: url(${City.src}) no-repeat center;
    background-size: cover;
    overflow: hidden;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;

    @media (max-width: 768px) {
        height: 35vh;
        min-height: 200px;
    }

    @media (max-width: 480px) {
        height: 30vh;
        min-height: 180px;
    }
`;




const hop = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
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
    pointer-events: none;
`;

const TrainHitBox = styled.div<{
    $isAnimating: boolean;
}>`
    display: flex;
    align-items: flex-end;
    pointer-events: auto;
    position: relative;
    transform-origin: bottom center;
    padding: 10px;
    margin: -10px;
    will-change: transform;

    ${props => props.$isAnimating && css`
        animation: ${hop} 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    `}
`;

const TrainImageWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    pointer-events: none;
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
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Adjust number of train cars based on screen width
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1200) {
                setTrainCount(4);
            } else {
                setTrainCount(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleHover = () => {
        setIsAnimating(false);
        // Force reflow to restart animation
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsAnimating(true);
            });
        });
    };

    const handleAnimationEnd = () => {
        setIsAnimating(false);
    };

    return (
        <TrackContainer aria-label="Animated train scene with city background">
            <TrainContainer>
                <TrainHitBox
                    $isAnimating={isAnimating}
                    onMouseEnter={handleHover}
                    onAnimationEnd={handleAnimationEnd}
                >
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
                </TrainHitBox>
            </TrainContainer>
        </TrackContainer>
    );
}