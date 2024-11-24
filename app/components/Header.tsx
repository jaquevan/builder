import { Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import logoSrc from "../public/logo-temp.png"
import Mascot from "../public/mole.png"
import cityBackground from "../public/skyline.webp"

// Define a keyframes animation for a subtle effect
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
    color:white;
    font-size: 4rem;
    text-align: center;
    width: 70%;
    margin-left: 6rem;
    z-index: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: none;
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${cityBackground.src}) no-repeat center center;
    background-size: cover;
    background-position: center top; /* Pan the image up */
    filter: brightness(1); /* Apply a filter to make it less distracting */
    padding: 1.2rem .5rem;

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

const Logo = styled.div`
    width: 24vh;
    height: 24vh;
    background-color: #fff600;
    border: 5px solid #fff600;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position: relative;
    animation: ${subtlePulse} 4s infinite;
`;

const MascotImage = styled(Image)`
    width: 29vh;
    height: 27vh;
    margin-top: .5rem;
    margin-right: 1rem;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <StyledText>builder co</StyledText>
            <LogoContainer>
                <MascotImage src={Mascot} alt="miner" objectFit="cover" />
                <Logo>
                    <Image src={logoSrc} alt="Dirt" layout="fill" objectFit="cover" />
                </Logo>
            </LogoContainer>
        </HeaderContainer>
    );
}