import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import logoSrc from "../public/logo-temp.png";
import Mascot from "../public/mole.png";
import cityBackground from "../public/skyline.webp";


const subtlePulse = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 4px #fff600;
    }
    50% {
        transform: scale(1.03);
        box-shadow: 0 0 9px #fff600;
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 px #fff600;
    }
`;

const StyledText = styled(Typography)<{ isScrolled: boolean }>`
    font-family: "Arial", "Times New Roman", serif;
    color: white;
    font-size: ${({ isScrolled }) => (isScrolled ? "2rem" : "4rem")};
    text-align: center;
    width: 70%;
    margin-left: 6rem;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: font-size 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        box-shadow: none;
    }
`;

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${cityBackground.src}) no-repeat center center;
    background-size: cover;
    background-position: top; 
    filter: brightness(.98); 
    height: ${({ isScrolled }) => (isScrolled ? "15vh" : "30vh")};
    padding: 1.1rem 0.5rem;
    transition: height 0.3s ease;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    @media (min-width: 768px) {
        margin-left: 0;
    }
`;

const Logo = styled.div<{ isScrolled: boolean }>`
    width: ${({ isScrolled }) => (isScrolled ? "12vh" : "24vh")};
    height: ${({ isScrolled }) => (isScrolled ? "12vh" : "24vh")};
    background-color: #fff600;
    border: 5px solid #fff600;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position: relative;
    animation: ${subtlePulse} 4s infinite;
    transition: width 0.3s ease, height 0.3s ease;
    margin-right: 5%;
`;

// const MascotImage = styled(Image)<{ isScrolled: boolean }>`
//     width: ${({ isScrolled }) => (isScrolled ? "14vh" : "29vh")};
//     height: ${({ isScrolled }) => (isScrolled ? "13vh" : "27vh")};
//     margin-top: 0.5rem;
//     margin-right: 1rem;
//     transition: width 0.3s ease, height 0.3s ease;
// `;

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <HeaderContainer isScrolled={isScrolled}>
            <StyledText isScrolled={isScrolled}>builder co</StyledText>
            <LogoContainer>
                <Logo isScrolled={isScrolled}>
                    <Image src={logoSrc} alt="Dirt" layout="fill" objectFit="cover" />
                </Logo>
            </LogoContainer>
        </HeaderContainer>
    );
}