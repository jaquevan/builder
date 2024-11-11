import { Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import logoSrc from "@/app/public/images/dirt.png";

// Define a keyframes animation for a subtle effect
const subtlePulse = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 5px #fff600;
    }
    50% {
        transform: scale(1.02);
        box-shadow: 0 0 10px #fff600;
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 5px #fff600;
    }
`;

const StyledText = styled(Typography)`
    background-color: #fff600;
    font-family: Arial, Helvetica, sans-serif; /* Change font, add a custom one later */
    padding: 2% 0;
    border: 1px solid #fff600;
    border-radius: 20px;
    animation: ${subtlePulse} 4s infinite;
    font-size: 4rem; /* Increase text size */
    text-align: center;
    width: 75%;
    @media (min-width: 768px) {
        text-align: left;
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;

    padding-bottom: 2rem; /* Add padding underneath the header */

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const LogoContainer = styled.div`
    width: 15vh;
    height: 15vh;
    margin-left: .5rem;
    background-color: #fff600;
    border: 5px solid #fff600;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    position: relative;

    @media (min-width: 768px) {
        margin-left: 0;
    }
`;

// Building a Header that will use Material UI Typography and implement a logo behind the typography
export default function Header() {
    return (
        <HeaderContainer>
            <StyledText>Builder Co</StyledText>
            <LogoContainer>
                <Image src={logoSrc} alt="Dirt" layout="fill" objectFit="cover" />
            </LogoContainer>
        </HeaderContainer>
    );
}