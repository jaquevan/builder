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
// import ContactPageIcon from '@mui/icons-material/ContactPage';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from 'next/link';
import Image from 'next/image';
import pfp from '@/public/real_pfp.jpg';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

const float = keyframes`
    0% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-8px) rotate(2deg); }
    50% { transform: translateY(0px) rotate(0deg); }
    75% { transform: translateY(5px) rotate(-2deg); }
    100% { transform: translateY(0px) rotate(0deg); }
`;

const colors = {
    darkBg: "#111111",
    accent: "#4bb97d",
    lightText: "#F8F8F8",
    midGray: "#333333",
    highlight: "#34D399",
    darkAccent: "#006631"
};

const FooterWrapper = styled.footer`
    background-color: ${colors.darkBg};
    color: ${colors.lightText};
    padding: 3rem 0 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.3);
    animation: ${fadeIn} 0.8s ease-out;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, ${colors.accent}, ${colors.highlight}, ${colors.accent});
        background-size: 200% 100%;
        animation: ${shimmer} 5s infinite linear;
    }
`;

const ContentContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3rem;
    padding-bottom: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        padding: 0 1.5rem 2rem;
    }
`;

const Column = styled.div`
    flex: 1;
    min-width: 180px;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-1px);
    }

    @media (max-width: 768px) {
        margin-bottom: 1rem;
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
    letter-spacing: 1px;
    margin-bottom: 1rem;
    font-size: 2rem;
    background: linear-gradient(90deg, ${colors.lightText} 0%, ${colors.highlight} 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;

    &:hover {
        letter-spacing: 3px;
    }
`;

const Tagline = styled(Typography)`
    color: #aaa;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    max-width: 300px;
    line-height: 1.6;
    font-family: 'Courier New', Courier, monospace;
`;

const SectionTitle = styled(Typography)`
    color: ${colors.lightText};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 40px;
        height: 3px;
        background-color: ${colors.accent};
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        &::after {
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
        }

        &:hover::after {
            width: 100px;
        }
    }
`;

const FooterLink = styled(Link)`
    font-family: 'Roboto Mono', monospace;
    display: flex;
    align-items: center;
    color: #CCC;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    padding: 8px 0;
    border-radius: 4px;

    &:hover {
        color: ${colors.highlight};
        transform: translateX(5px);
        padding-left: 5px;
    }

    & svg {
        margin-right: 8px;
        font-size: 1rem;
        transition: transform 0.2s ease;
    }

    &:hover svg {
        transform: scale(1.2);
        color: ${colors.accent};
    }

    @media (max-width: 768px) {
        justify-content: center;

        &:hover {
            transform: translateY(-9px);
            padding-left: 0;
        }
    }
`;

const SocialIconsContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const SocialButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    color: #111;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: ${colors.accent};
        color: black;
        transform: translateY(-5px) rotate(5deg);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const BottomBar = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 1.2rem;
    text-align: center;
    font-size: 0.9rem;
    color: #aaa;
    font-family: 'Roboto Mono', monospace;
    position: relative;

    & span {
        color: ${colors.highlight};
        font-weight: 600;
    }
`;

const CurrentTime = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 0.9rem;
    color: #999;
    margin-top: 1rem;
    padding: 8px 12px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.05);
    display: inline-block;

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
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: radial-gradient(circle, ${colors.accent}33 0%, transparent 70%);
        z-index: -1;
        animation: ${pulse} 3s infinite ease-in-out;
    }
`;

const ProfileAvatar = styled.div`
    width: 160px;
    height: 160px;
    position: relative;
    border-radius: 50%;
    border: 4px solid ${colors.accent};
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    animation: ${float} 8s infinite ease-in-out;
    transform-style: preserve-3d;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%);
        z-index: 2;
        pointer-events: none;
    }

    &:hover {
        transform: scale(1.05) rotate(5deg);
    }
`;

const ProfileName = styled.div`
    margin-top: 1rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
    color: ${colors.lightText};
    font-weight: 500;
    letter-spacing: 1px;
    text-align: center;
    opacity: 0.9;

    &::before, &::after {
        content: '{ ';
        color: ${colors.highlight};
    }

    &::after {
        content: ' }';
    }
`;

// const ScrollToTopButton = styled(IconButton)`
//     position: absolute;
//     right: 20px;
//     bottom: 20px;
//     background-color: ${colors.accent} !important;
//     color: white !important;
//     width: 45px;
//     height: 45px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//     transition: all 0.3s ease !important;
//     animation: ${pulse} 2s infinite;
//
//     &:hover {
//         background-color: ${colors.highlight} !important;
//         transform: translateY(-5px);
//     }
// `;

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
            hours = hours ? hours : 12;

            setCurrentDateTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // };

    return (
        <FooterWrapper>
            <ContentContainer maxWidth="lg">
                <BrandColumn>
                    <LogoText variant="h3">jaquevan</LogoText>
                    <Tagline variant="body2">
                        Computer Science & Economics. <br />
                        Minor in Data Science <br />
                        Boston University, Boston MA
                    </Tagline>

                    <SocialIconsContainer>
                        <Tooltip title="Connect on LinkedIn">
                            <Link href="https://www.linkedin.com/in/evan-jaquez-118b5b294/" target="_blank" aria-label="LinkedIn">
                                <SocialButton>
                                    <LinkedInIcon />
                                </SocialButton>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Check my GitHub">
                            <Link href="https://github.com/jaquevan" target="_blank" aria-label="GitHub">
                                <SocialButton>
                                    <GitHubIcon />
                                </SocialButton>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Send me an Email">
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
                    <SectionTitle variant="h6">Quick Links</SectionTitle>
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
                    {/*<FooterLink href="/contact">*/}
                    {/*    <ContactPageIcon fontSize="small" /> Contact*/}
                    {/*</FooterLink>*/}
                </NavColumn>

                <ProfileColumn>
                    <ProfileContainer>
                        <ProfileAvatar>
                            <Image
                                src={pfp}
                                alt="Profile Picture"
                                layout="fill"
                                objectFit="cover"
                            />
                        </ProfileAvatar>
                        <ProfileName>Evan Jaquez</ProfileName>
                    </ProfileContainer>
                </ProfileColumn>
            </ContentContainer>

            <BottomBar>
                © {new Date().getFullYear()} <span>Evan Jaquez</span>. All rights reserved. Built with React & Next.js
                {/*<ScrollToTopButton onClick={scrollToTop} aria-label="Scroll to top">*/}
                {/*    <ArrowUpwardIcon />*/}
                {/*</ScrollToTopButton>*/}
            </BottomBar>
        </FooterWrapper>
    );
}