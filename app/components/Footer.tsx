"use client";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Container, IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Image from 'next/image';
import pfp from '../public/real_pfp.jpg';


const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

// pfp glow animation
const profileGlow = keyframes`
    0% { box-shadow: 0 0 4px rgba(0, 132, 61, 0.5); }
    50% { box-shadow: 0 0 15px rgba(0, 132, 61, 0.8), 0 0 25px rgba(0, 132, 61, 0.4); }
    100% { box-shadow: 0 0 4px rgba(0, 132, 61, 0.5); }
`;

// Base colors
const colors = {
    darkBg: "#1A1A1A",
    accent: "#00843D",
    lightText: "#F8F8F8",
    midGray: "#333333",
    highlight: "#34D399"
};

const FooterWrapper = styled.footer`
  background-color: ${colors.darkBg};
  color: ${colors.lightText};
  padding: 2rem 0 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.6s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${colors.accent}, #34D399, ${colors.accent});
  }
`;

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Column = styled.div`
    flex: 1;
    min-width: 180px;

    @media (max-width: 768px) {
        margin-bottom: 0.5rem;
    }
`;

const BrandColumn = styled(Column)`
    display: flex;
    flex-direction: column;
    max-width: 350px;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        max-width: 100%;
    }
`;

const NavColumn = styled(Column)`
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const ProfileColumn = styled(Column)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 220px;

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;

const LogoText = styled(Typography)`
    color: ${colors.lightText};
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 0.75rem;
    font-size: 1.8rem;
`;

const Tagline = styled(Typography)`
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    max-width: 300px;
    line-height: 1.5;
`;

const SectionTitle = styled(Typography)`
    color: ${colors.lightText};
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 35px;
        height: 2px;
        background-color: ${colors.accent};
    }

    @media (max-width: 768px) {
        &::after {
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
        }
    }
`;

const FooterLink = styled.a`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    align-items: center;
    color: #CCC;
    text-decoration: none;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    transition: all 0.2s ease;

    &:hover {
        color: ${colors.highlight};
        transform: translateX(3px);
    }

    & svg {
        margin-right: 6px;
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
        justify-content: center;

        &:hover {
            transform: none;
        }
    }
`;

const SocialIconsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const SocialIconButton = styled(IconButton)`
    color: ${colors.lightText};
    background-color: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    padding: 8px;

    &:hover {
        background-color: ${colors.accent};
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(-1px);
    }
`;

const BottomBar = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    text-align: center;
    font-size: 0.85rem;
    color: #999;
    font-family: 'Roboto Mono', monospace;

    & span {
        color: ${colors.accent};
    }
`;

const CurrentTime = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 0.85rem;
    color: #777;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const ProfileAvatar = styled(Image)`
    margin-bottom: 1rem;
    border: 3px solid ${colors.accent};
    animation: ${profileGlow} 10s infinite;
    transition: transform 0.3s ease;
    border-radius: 50%;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 100px !important;
        height: 100px !important;
    }
`;

const ProfileName = styled(Typography)`
    color: ${colors.lightText};
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
`;


export default function Footer() {
    const [currentDateTime, setCurrentDateTime] = useState("2025-03-02 20:41:07");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            setCurrentDateTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <FooterWrapper>
            <ContentContainer maxWidth="lg">
                <BrandColumn>
                    <LogoText variant="h3">builder | Evan Jaquez</LogoText>
                    <Tagline variant="body2">
                        BA in Computer Science & Economics. <br />
                        Minor in Data Science <br />
                        Boston University, Boston MA
                    </Tagline>

                    <SocialIconsContainer>
                        <Tooltip title="LinkedIn Profile">
                            <a href="https://www.linkedin.com/in/evan-jaquez-118b5b294/" target="_blank" aria-label="LinkedIn">
                                <SocialIconButton>
                                    <LinkedInIcon />
                                </SocialIconButton>
                            </a>
                        </Tooltip>

                        <Tooltip title="GitHub Profile">
                            <a href="https://github.com/jaquevan" target="_blank" aria-label="GitHub">
                                <SocialIconButton>
                                    <GitHubIcon />
                                </SocialIconButton>
                            </a>
                        </Tooltip>

                        <Tooltip title="Contact via Email">
                            <a href="mailto:jaquevan@bu.edu" target="_blank" aria-label="Email">
                                <SocialIconButton>
                                    <EmailIcon />
                                </SocialIconButton>
                            </a>
                        </Tooltip>
                    </SocialIconsContainer>

                    <CurrentTime>
                        {currentDateTime}
                    </CurrentTime>
                </BrandColumn>

                <NavColumn>
                    <SectionTitle variant="h6">Mini Nav</SectionTitle>
                    <FooterLink href="/">
                        <HomeIcon fontSize="small" /> Home
                    </FooterLink>
                    <FooterLink href="/design">
                        <CodeIcon fontSize="small" /> Design
                    </FooterLink>
                    <FooterLink href="/projects">
                        <DesignServicesIcon fontSize="small" /> Projects
                    </FooterLink>
                    <FooterLink href="/demo">
                        <ContactPageIcon fontSize="small" /> Demo
                    </FooterLink>
                </NavColumn>

                <NavColumn>
                    <SectionTitle variant="h6">Resources</SectionTitle>
                    <FooterLink href="/resume">Resume</FooterLink>
                    <FooterLink href="/about">About Me</FooterLink>
                </NavColumn>

                <ProfileColumn>
                    <SectionTitle variant="h6">Developer</SectionTitle>
                    <ProfileContainer>
                        <ProfileAvatar
                            src={pfp}
                            alt="Evan Jaquez"
                            width={120}
                            height={120}
                        />
                        <ProfileName variant="h6">Evan Jaquez</ProfileName>

                    </ProfileContainer>
                </ProfileColumn>
            </ContentContainer>

            <BottomBar>
                © {new Date().getFullYear()} <span>Evan Jaquez</span>. All rights reserved. Built with React & Next.js
            </BottomBar>
        </FooterWrapper>
    );
}