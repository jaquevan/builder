"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const scroll = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
`;

const TechContainer = styled.div`
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: auto 0;
    position: relative;
    height: 3.5rem;
    display: flex;
    align-items: center;

    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        z-index: 2;
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }
`;

const TechTrack = styled.div`
    display: flex;
    width: fit-content;
    animation: ${scroll} 35s linear infinite;
    padding: 0 2rem;
    align-items: center;
    height: 100%;
`;

const IconsGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;
    height: 100%;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: transform 0.2s ease;
    height: fit-content;

    &:hover {
        transform: translateY(-2px);
    }
`;

const IconWrapper = styled.div`
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    filter: grayscale(20%);
    transition: filter 0.2s ease;

    &:hover {
        filter: grayscale(0%);
    }
`;

const IconLabel = styled.span`
    font-size: 0.8rem;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
    opacity: 0.9;
    white-space: nowrap;

    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;

const TechIcons = () => {
    const technologies = [
        { name: "JavaScript", path: "/icons/js.svg" },
        { name: "TypeScript", path: "/icons/ts.svg" },
        { name: "React", path: "/icons/react.svg" },
        { name: "Next.js", path: "/icons/next.svg" },
        { name: "Figma", path: "/icons/figma.svg" },
        { name: "Jest", path: "/icons/jest.svg" },
        { name: "MUI", path: "/icons/mui.svg" },
        { name: "Tailwind", path: "/icons/tw.svg" },
        { name: "Three.js", path: "/icons/three.svg" },
        { name: "Vite", path: "/icons/vite.svg" },
        { name: "MongoDB", path: "/icons/mdb.svg" },
        { name: "Ubuntu", path: "/icons/ubuntu.svg" },
        { name: "Adobe", path: "/icons/adobe.svg" },
        { name: "Slack", path: "/icons/slack.svg" },
        { name: "Docker", path: "/icons/docker.svg" }


    ];

    return (
        <TechContainer>
            <TechTrack>
                {[...Array(2)].map((_, groupIndex) => (
                    <IconsGroup key={`group-${groupIndex}`} aria-hidden={groupIndex === 1}>
                        {technologies.map((tech, index) => (
                            <IconContainer key={`tech-${groupIndex}-${index}`}>
                                <IconWrapper>
                                    <Image
                                        src={tech.path}
                                        alt={`${tech.name} icon`}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        priority={groupIndex === 0}
                                    />
                                </IconWrapper>
                                <IconLabel>{tech.name}</IconLabel>
                            </IconContainer>
                        ))}
                    </IconsGroup>
                ))}
            </TechTrack>
        </TechContainer>
    );
};

export default TechIcons;