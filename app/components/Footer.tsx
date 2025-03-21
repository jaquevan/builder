"use client";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Container, Tooltip } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Link from 'next/link';
import pfp from '@/public/real_pfp.jpg';
import githubPfp from '@/public/github_pfp.jpg';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

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
    font-family: 'Courier New', Courier, monospace;
`;

const SectionTitle = styled(Typography)`
    color: ${colors.lightText};
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.1rem;
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

const FooterLink = styled(Link)`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    align-items: center;
    color: #CCC;
    text-decoration: none;
    margin-bottom: 0.75rem;
    margin-top: 3%;
    font-size: 1.1rem;
    transition: all 0.2s ease;

    &:hover {
        color: ${colors.highlight};
        transform: translateX(2px); /* Reduced from 3px to 2px */
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

const SocialButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${colors.accent};
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
    perspective: 1200px; 
`;

const ProfileAvatar = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 50%;
    will-change: transform; 

    &:hover {
        transform: rotateY(180deg);
    }

    & > div {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 50%;
        overflow: hidden; /* Ensures children stay within border radius */
    }

    & .front {
        background-image: url(${pfp.src});
        background-size: cover;
        border: 3px solid ${colors.accent};
    }

    & .back {
        background-image: url(${githubPfp.src});
        background-size: cover;
        border: 3px solid ${colors.accent};
        transform: rotateY(180deg);
    }
`;

export default function Footer() {
    const [currentDateTime, setCurrentDateTime] = useState("2025-03-02 20:41:07");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'

            setCurrentDateTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <FooterWrapper>
            <ContentContainer maxWidth="lg">
                <BrandColumn>
                    <LogoText variant="h3">jaquevan | builder</LogoText>
                    <Tagline variant="body2">
                        Computer Science & Economics. <br />
                        Minor in Data Science <br />
                        Boston University, Boston MA
                    </Tagline>

                    <SocialIconsContainer>
                        <Tooltip title="LinkedIn Profile">
                            <Link href="https://www.linkedin.com/in/evan-jaquez-118b5b294/" target="_blank" aria-label="LinkedIn">
                                <SocialButton>
                                    <LinkedInIcon />
                                </SocialButton>
                            </Link>
                        </Tooltip>

                        <Tooltip title="GitHub Profile">
                            <Link href="https://github.com/jaquevan" target="_blank" aria-label="GitHub">
                                <SocialButton>
                                    <GitHubIcon />
                                </SocialButton>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Contact via Email">
                            <Link href="mailto:jaquevan@bu.edu" target="_blank" aria-label="Email">
                                <SocialButton>
                                    <EmailIcon />
                                </SocialButton>
                            </Link>
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
                    <FooterLink href="/about">
                        <CodeIcon fontSize="small" /> About Me
                    </FooterLink>
                    <FooterLink href="/experience">
                        <EmailIcon fontSize="small" /> Experience
                    </FooterLink>
                    <FooterLink href="/projects">
                        <DesignServicesIcon fontSize="small" /> Projects
                    </FooterLink>
                    <FooterLink href="/contact">
                        <ContactPageIcon fontSize="small" /> Contact
                    </FooterLink>
                </NavColumn>

                <ProfileColumn>
                    <SectionTitle variant="h6">Evan Jaquez</SectionTitle>
                    <ProfileContainer>
                        <ProfileAvatar>
                            <div className="front"></div>
                            <div className="back"></div>
                        </ProfileAvatar>
                    </ProfileContainer>
                </ProfileColumn>
            </ContentContainer>

            <BottomBar>
                © {new Date().getFullYear()} <span>Evan Jaquez</span>. All rights reserved. Built with React & Next.js
            </BottomBar>
        </FooterWrapper>
    );
}