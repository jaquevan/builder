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

const TrackContainer = styled.div`
    position: relative;
    width: 100vw;
    margin-left: calc(-50vw + 50%); // breaks out of parent container to full viewport width
    margin-top: -120px; // negative margin pulls cityscape up to create overlap with content above
    margin-bottom: 0;
    padding-bottom: 0; // ensure no padding creates gaps
    height: clamp(200px, 20vh, 300px); // much smaller vh to eliminate gap
    background: url(${City.src}) no-repeat center bottom; // anchor city floor to bottom
    background-size: cover; // makes background fill the container, may crop edges
    background-position: center bottom; // ensures floor stays at bottom
    overflow: visible; // allow train to overflow if needed
    display: block; // block display prevents gap below
    line-height: 0; // removes line-height gap
    font-size: 0; // removes font-size gap
    z-index: 1; // lowest layer - background cityscape

    @media (max-width: 1024px) {
        margin-top: 0; // remove overlap on tablet/mobile for natural stacking
        height: clamp(110px, 15vh, 180px); // much smaller for mobile
        overflow: visible; // show train on mobile
    }

    @media (max-width: 768px) {
        height: clamp(100px, 14vh, 160px); // smaller for tablets
    }

    @media (max-width: 480px) {
        height: clamp(85px, 12vh, 135px); // smaller for phones
        min-height: 85px;
    }

    @media (max-width: 430px) {
        height: clamp(80px, 11.5vh, 130px); // iPhone 14 Pro Max, iPhone 15 Plus
        min-height: 80px;
    }

    @media (max-width: 393px) {
        height: clamp(75px, 11vh, 125px); // iPhone 16, iPhone 14 Pro
        min-height: 75px;
    }

    @media (max-width: 375px) {
        height: clamp(70px, 10.5vh, 115px); // smaller for small phones
        min-height: 70px;
    }

    @media (max-width: 320px) {
        height: clamp(65px, 10vh, 100px); // smallest for very small screens
        min-height: 65px;
    }
`;

const TrainContainer = styled.div`
    position: absolute;
    bottom: 0; // train sits on the city floor
    left: 0;
    display: flex;
    align-items: flex-end; // aligns train to bottom of container
    justify-content: flex-start;
    width: 100%;
    animation: ${moveTrain} 10s ease-out infinite; // train animation movement
    will-change: transform;
    z-index: 5; // keeps train above city background
    pointer-events: none;
    padding-bottom: 2px; // tiny padding for visual refinement

    @media (max-width: 1024px) {
        bottom: 0; // consistent floor placement on all screen sizes
    }
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
    width: 20vw; // responsive train car width based on viewport
    max-width: 250px; // maximum train car size
    height: auto;
    margin-right: -1px; // connects train cars seamlessly

    @media (max-width: 1200px) {
        width: 22vw; // slightly wider on medium screens
        max-width: 220px;
    }

    @media (max-width: 768px) {
        width: 22vw; // smaller on tablets
        max-width: 100px; // much smaller to fit container
    }

    @media (max-width: 480px) {
        width: 20vw; // smaller for phones
        max-width: 80px; // much smaller max
    }

    @media (max-width: 375px) {
        width: 18vw; // smaller for small phones
        max-width: 70px; // smaller to fit container
    }

    @media (max-width: 320px) {
        width: 16vw; // smallest for tiny screens
        max-width: 60px; // smallest max
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