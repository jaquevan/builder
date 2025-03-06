"use client";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";


const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;


const ButtonContainer = styled.div`
    display: flex;
    gap: clamp(0.5rem, 2vw, 1.5rem);
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 100%;
    margin: 1.5rem 0 0.5rem; 
    padding: 0 clamp(1rem, 10%, 5rem);
    padding-top: 3%;

    @media (max-width: 768px) {
        justify-content: center;
        gap: clamp(0.4rem, 1.5vw, 1rem);
        margin-bottom: 0.25rem; 
    }
`;

const Name = styled.h1`
    margin: 0 auto;
    padding-top: 4%;
    padding-bottom: 0;
    font-size: 4rem;

    `;

const StyledButton = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: clamp(0.6rem, 1.5vw, 1rem) clamp(1rem, 2vw, 2rem);
    border-radius: 10px;
    font-size: clamp(0.85rem, 1.5vw, 1.1rem);
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    background: ${props => props.$gradient || "linear-gradient(135deg, #2c3e50, #4c6b8a)"};
    background-size: 200% 200%;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    flex: 1;
    min-width: 0;
    max-width: ${props => props.$maxWidth || "160px"};
    overflow: hidden;
    z-index: 2; 

    &:hover, &:focus {
        transform: translateY(-3px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        color: white;

        & .icon {
            animation: ${pulse} 1.5s ease-in-out infinite;
        }

        &::after {
            opacity: 1;
        }
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 100%);
        background-size: 200% 100%;
        opacity: 0;
        z-index: -1;
        animation: ${shimmer} 1.5s infinite;
        transition: opacity 0.3s ease-in-out;
        border-radius: inherit;
    }

    @media (max-width: 768px) {
        max-width: ${props => props.$mobileMaxWidth || "140px"};
        flex: ${props => props.$mobileFlex || "0 1 calc(50% - 1rem)"};
    }

    @media (max-width: 480px) {
        max-width: ${props => props.$smallMobileMaxWidth || "120px"};
        padding: 0.5rem 0.75rem;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(1.5rem, 2.5vw, 2.5rem);
    height: clamp(1.5rem, 2.5vw, 2.5rem);
    font-size: clamp(1.2rem, 2vw, 1.6rem);
    transition: all 0.3s ease;
`;

const ButtonText = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 380px) {
        font-size: clamp(0.75rem, 3vw, 0.9rem);
    }
`;

const SubText = styled.h2`
    margin: 0 auto;
    padding-top: 0.5rem;
    font-size: 1.5rem;
    color: #00843D; /* Use the same green color as other components */
    font-family: Monospaced, "JetBrains Mono", sans-serif; /* Monospaced font */
    text-align: left; 
`;

export default function EnhancedButtons() {
    const [hoveredButton, setHoveredButton] = useState(null);

    const buttons = [
        {
            id: "linkedin",
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/evan-jaquez-118b5b294/",
            icon: <LinkedInIcon />,
            gradient: "linear-gradient(135deg, #0077b5, #00a0dc)",
            tooltip: "Connect on LinkedIn"
        },
        {
            id: "github",
            text: "GitHub",
            href: "https://www.github.com/jaquevan",
            icon: <GitHubIcon />,
            gradient: "linear-gradient(135deg, #24292e, #4a4a4a)",
            tooltip: "View GitHub Projects"
        },
        {
            id: "experience",
            text: "Experience",
            href: "/",
            icon: <WorkIcon />,
            gradient: "linear-gradient(135deg, #6a11cb, #2575fc)",
            tooltip: "View Work Experience"
        }
    ];

    return (
        <>

        <Name>Evan Jaquez</Name>
            <SubText>UX Designer and Frontend Developer</SubText>

        <ButtonContainer role="navigation" aria-label="Social links and navigation">
            {buttons.map((button) => (
                <Tooltip title={button.tooltip} key={button.id} arrow>
                    <StyledButton
                        href={button.href}
                        target={button.href.startsWith("http") ? "_blank" : "_self"}
                        rel={button.href.startsWith("http") ? "noopener noreferrer" : ""}
                        $gradient={button.gradient}
                        onMouseEnter={() => setHoveredButton(button.id)}
                        onMouseLeave={() => setHoveredButton(null)}
                        onFocus={() => setHoveredButton(button.id)}
                        onBlur={() => setHoveredButton(null)}
                        aria-label={button.tooltip}
                    >
                        <IconWrapper className="icon">
                            {button.icon}
                        </IconWrapper>
                        <ButtonText>{button.text}</ButtonText>
                    </StyledButton>
                </Tooltip>
            ))}
        </ButtonContainer>
    </>
    );

}