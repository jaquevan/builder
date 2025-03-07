"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import logoSrc from "@/public/logo-temp.png";
import cityBackground from "@/public/header-night.jpg";

const subtlePulse = keyframes`
    0% { transform: scale(1); box-shadow: 0 0 4px #fff600; }
    50% { transform: scale(1.02); box-shadow: 0 0 8px #fff600; }
    100% { transform: scale(1); box-shadow: 0 0 4px #fff600; }
`;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    background: url(${cityBackground.src}) no-repeat center center;
    background-size: cover;
    background-position: center 27%; //adjust where on image header is 
    width: 100%;
    height: ${props => props.$scrolled ? '12vh' : '25vh'}; 
    padding: 0.8rem;
    position: relative;
    transition: all 0.25s ease;
    z-index: 90;

    @media (max-width: 768px) {
        flex-direction: column;
        height: ${props => props.$scrolled ? '10vh' : '22vh'}; 
    }
`;

const TextContainer = styled.div`
    flex: 1;
    margin-left: 5rem; /* Slightly reduced */

    @media (max-width: 768px) {
        margin: 0 auto;
        text-align: center;
    }
`;

const BrandText = styled(Typography)`
    font-family: "Arial", serif;
    color: white;
    font-size: ${props => props.$scrolled ? '2.8rem' : '3.6rem'}; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 1;

    @media (max-width: 768px) {
        font-size: ${props => props.$scrolled ? '1.8rem' : '2.5rem'}; 
    }
`;

const AuthorName = styled.div`
    font-family: "Arial", sans-serif;
    color: white;
    font-size: ${props => props.$scrolled ? '0.9rem' : '1.1rem'}; /* Slightly reduced */
    opacity: 0.9;
    margin-top: 0.3rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        font-size: ${props => props.$scrolled ? '0.7rem' : '0.9rem'};
    }
`;

// Logo container
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    @media (max-width: 768px) {
        margin: 0 auto;
    }
`;

const Logo = styled.div`
    width: ${props => props.$scrolled ? '16vh' : '20vh'}; 
    height: ${props => props.$scrolled ? '16vh' : '20vh'}; 
    background-color: #fff600;
    border: 4px solid #fff600; /* Slightly thinner */
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: ${subtlePulse} 4s infinite;

    @media (max-width: 768px) {
        width: ${props => props.$scrolled ? '10vh' : '14vh'}; 
        height: ${props => props.$scrolled ? '10vh' : '14vh'}; 
    }
`;

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <HeaderContainer $scrolled={scrolled}>
            <TextContainer>
                <BrandText $scrolled={scrolled}>builder co</BrandText>
                <AuthorName $scrolled={scrolled}>by Evan Jaquez</AuthorName>
            </TextContainer>

            <LogoContainer>
                <Logo $scrolled={scrolled}>
                    <Image
                        src={logoSrc}
                        alt="Builder Co Logo"
                        fill
                        priority
                        sizes="(max-width: 768px) 14vh, 20vh"
                        style={{ objectFit: 'cover' }}
                    />
                </Logo>
            </LogoContainer>
        </HeaderContainer>
    );
}