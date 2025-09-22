"use client";
import styled, { keyframes } from "styled-components";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";

const buttons = [
    {
        id: "projects",
        text: "Projects",
        href: "/projects",
        icon: <WorkIcon />,
        gradient: "linear-gradient(135deg, #6a11cb, #2575fc)",
        tooltip: "View Projects"
    },
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
    }
];

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
`;

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

interface StyledButtonProps {
    $gradient?: string;
}

const ButtonContainer = styled.div`
    display: flex;
    gap: clamp(0.5rem, 2vw, 1.5rem);
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 100%;
    margin: 1.5rem 0 0.5rem;
    padding: 1% 0 clamp(1rem, 10%, 5rem);

    @media (max-width: 1024px) {
        justify-content: center;
        gap: clamp(0.4rem, 1.5vw, 1rem);
        margin-bottom: 0.25rem;
    }
`;

const Name = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 4rem;
    line-height: 1.2;
    letter-spacing: normal;
    transition: letter-spacing 0.3s ease;

    &:hover {
        letter-spacing: 0.15rem;
    }
`;

const SubText = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    color: #00843D;
    font-family: Monospaced, "JetBrains Mono", sans-serif;
    line-height: 1.2;
`;

const StyledButton = styled.a<StyledButtonProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem 2rem;
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
    min-width: 140px;
    max-width: 180px;
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
        background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0) 100%
        );
        background-size: 200% 100%;
        opacity: 0;
        z-index: -1;
        animation: ${shimmer} 1.5s infinite;
        transition: opacity 0.3s ease-in-out;
        border-radius: inherit;
    }

    @media (max-width: 1024px) {
        max-width: 300px;
        flex: 0 1 calc(80% - 1rem);
        padding: 0.8rem 1rem;
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        max-width: 120px;
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
    flex-shrink: 0;
`;

const ButtonText = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: calc(.5rem + 0.5vw);
`;

export default function EnhancedButtons() {
    return (
        <>
            <Name className="fade-in">Evan Jaquez</Name>
            <SubText className="fade-in">UI/UX Designer & Researcher</SubText>
            <ButtonContainer className="fade-in" role="navigation" aria-label="Social links and navigation">
                {buttons.map((button) => (
                    <Tooltip title={button.tooltip} key={button.id} arrow>
                        <StyledButton
                            href={button.href}
                            target={button.href.startsWith("http") ? "_blank" : "_self"}
                            rel={button.href.startsWith("http") ? "noopener noreferrer" : ""}
                            $gradient={button.gradient}
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