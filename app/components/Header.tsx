import { Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import logoSrc from "../public/logo-temp.png"
import Mascot from "../public/mascot.png"
import cityBackground from "../public/city.png"

// Define a keyframes animation for a subtle effect
const subtlePulse = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 5px #fff600;
    }
    50% {
        transform: scale(1.04);
        box-shadow: 0 0 10px #fff600;
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 5px #fff600;
    }
`;

const StyledText = styled(Typography)`
    background-color: rgba(255, 246, 0, 0.8); 
    font-family: "ui-monospace", "Times New Roman", serif; 
    padding: 2% 1%;
    border: 1px solid #fff600;
    border-radius: 20px;
    font-size: 5.5rem; 
    text-align: center;
    width: 60%;
    z-index: 1;
`;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${cityBackground.src}) no-repeat center center;
    background-size: cover;
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
    width: 25vh;
    height: 27vh;
    margin-right: 5rem;
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