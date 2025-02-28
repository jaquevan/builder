import React from "react";
import { Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import logoSrc from "../public/logo-temp.png";
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

const StyledText = styled(Typography)`
    font-family: "Arial", "Times New Roman", serif;
    color: white;
    font-size: 4rem;
    text-align: center;
    width: 70%;
    margin-left: 6rem;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: font-size 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        box-shadow: none;
    }

    @media (max-width: 768px) {
        font-size: 3rem;
        margin: 0 auto;
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${cityBackground.src}) no-repeat center center;
    background-size: cover;
    background-position: top;
    filter: brightness(.98);
    height: 30vh;
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

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
        margin-left: 0;
    }
`;

const Logo = styled.div`
    width: 22vh;
    height: 22vh;
    margin: 10px;
    background-color: #fff600;
    border: 5px solid #fff600;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: ${subtlePulse} 4s infinite;
    transition: width 0.3s ease, height 0.3s ease;


    @media (max-width: 768px) {
        postion: relative;
        margin: 0 auto;
        width: 15vh;
        height: 15vh;
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <StyledText>builder co</StyledText>
            <LogoContainer>
                <Logo>
                    <Image src={logoSrc} alt="Dirt" layout="fill" objectFit="cover" />
                </Logo>
            </LogoContainer>
        </HeaderContainer>
    );
}