"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

// animation for continuous horizontal scrolling
const scroll = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const TechContainer = styled.div`
    width: 100%;
    overflow: hidden;
    background: transparent;
    padding: 5px 0;
    margin: 8px 0;
    position: relative;

    @media (max-width: 768px) {
        padding: 10px 0;
    }

    @media (max-width: 480px) {
        padding: 8px 0;
    }

    @media (max-width: 375px) {
        padding: 5px 0;
    }
`;

const TechTrack = styled.div`
    display: flex;
    width: 200%; // Ensure the track is wide enough for both sets of icons
    animation: ${scroll} 20s linear infinite;
`;

const IconsGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0 20px;

    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 480px) {
        gap: 25px;
        padding: 0 15px;
    }

    @media (max-width: 375px) {
        gap: 20px;
        padding: 0 10px;
    }
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;

`;

const IconLabel = styled.span`
    font-size: 0.5rem;
    margin-top: 1px;
    color: var(--text-primary);
    font-family: "Arial", sans-serif;

    @media (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

const TechIcons = () => {
    // tech stack data with names and image paths
    const technologies = [
        { name: "JavaScript", path: "/icons/js.svg" },
        { name: "TypeScript", path: "/icons/ts.svg" },
        { name: "React", path: "/icons/react.svg" },
        { name: "Figma", path: "/icons/figma.svg" },
        { name: "Jest", path: "/icons/jest.svg" },
        { name: "MUI", path: "/icons/mui.svg" },
        { name: "Tailwind", path: "/icons/tw.svg" },
        { name: "Three.js", path: "/icons/three.svg" },
        { name: "Vite", path: "/icons/vite.svg" },
        { name: "MongoDB", path: "/icons/mdb.svg" },
        { name: "Ubuntu", path: "/icons/ubuntu.svg" },
        { name: "Adobe", path: "/icons/adobe.svg" }







    ];

    return (
        <TechContainer>
            <TechTrack>
                {/* first set of icons */}
                <IconsGroup>
                    {technologies.map((tech, index) => (
                        <IconContainer key={`tech-${index}`}>
                            <Image
                                src={tech.path}
                                alt={`${tech.name} icon`}
                                width={40}
                                height={40}
                                priority
                            />
                            <IconLabel>{tech.name}</IconLabel>
                        </IconContainer>
                    ))}
                </IconsGroup>

                {/* duplicate set for seamless looping */}
                <IconsGroup aria-hidden="true">
                    {technologies.map((tech, index) => (
                        <IconContainer key={`tech-dup-${index}`}>
                            <Image
                                src={tech.path}
                                alt={`${tech.name} icon`}
                                width={40}
                                height={40}
                            />
                            <IconLabel>{tech.name}</IconLabel>
                        </IconContainer>
                    ))}
                </IconsGroup>
            </TechTrack>
        </TechContainer>
    );
};

export default TechIcons;