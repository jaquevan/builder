"use client";
import styled, { keyframes } from "styled-components";
import Content from "@/app/components/Landing/Content";
import Buttons from "@/app/components/Landing/Buttons";
import Status from "@/app/components/Landing/Status";
import ResumeCard from "@/app/components/Landing/ResumeCard";
import {Typography} from "@mui/material";


const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const glow = keyframes`
    0% {
        text-shadow: 0 0 5px rgba(255,255,255,0.6), 0 0 10px rgba(255,255,255,0.4);
    }
    50% {
        text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6);
    }
    100% {
        text-shadow: 0 0 5px rgba(255,255,255,0.6), 0 0 10px rgba(255,255,255,0.4);
    }
`;

const fadeSlideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const StyledBody = styled.div`
    background-color: black;
    overflow-x: hidden;
    width: 100%;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    background-color: black;
    color: white;
    font-family: Arial, "Times New Roman", sans-serif;
    margin: 0 auto;
    position: relative;
    flex: 1;
`;

const WelcomeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: clamp(10px, 2%, 20px);
    z-index: 10;
    animation: ${fadeIn} 1.5s ease-out;
`;

const WelcomeText = styled.h2`
    color: white;
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 700;
    text-align: left;
    letter-spacing: 2px;
    animation: ${glow} 3s infinite;
    text-shadow: 0 0 10px rgba(255,255,255,0.6);
    margin-bottom: clamp(10px, 2vh, 15px);
    padding-top: 0;
    
    @media (max-width: 480px) {
        letter-spacing: 1px;
    }
`;

const MainContentArea = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0;
    z-index: 20;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`;

const ButtonDiv = styled.div`
    flex: 1;
    margin-top: -10px;
    padding-right: clamp(10px, 2%, 20px);
    
    @media (max-width: 768px) {
        padding-right: 0;
    }
`;

const StatusContainer = styled.div`
    margin-right: clamp(10px, 3%, 30px);
    z-index: 30;
    padding-top: 1%;
    margin-bottom: 0;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: -30px;
        align-self: center;
    }
`;

const ResumeSection = styled.div`
    margin: 15px 0 5px 5.5%;
    max-width: 500px;
    animation: ${fadeSlideIn} 0.8s ease-out 0.3s both;
    z-index: 25;
    
    @media (max-width: 768px) {
        margin: 15px auto 20px;
        text-align: center;
        padding: 0 15px;
    }
`;



// Content wrapper to position the train animation properly
const ContentWrapper = styled.div`
    margin-top: clamp(-30px, -5vh, -20px);
    width: 100%;
    z-index: 10;
    position: relative;
    flex: 1;

    @media (max-width: 768px) {
        margin-top: clamp(-20px, -3vh, -10px);
    }
`;

// Current time component
const TimeDisplay = styled.div`
    position: absolute;
    top: 10px;
    right: 15px;
    padding-top: 1%;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    z-index: 40;

    @media (max-width: 768px) {
        position: relative;
        text-align: center;
        top: auto;
        right: auto;
        margin-bottom: 10px;
    }
`;

export default function Main() {
    return (
        <StyledBody>
            <StyledSection>
                <MainContentArea>
                    <TopContainer>
                        <ButtonDiv>
                            <Buttons />
                            <ResumeSection>
                                <ResumeCard />
                            </ResumeSection>
                        </ButtonDiv>
                        <StatusContainer>
                            <Status />
                        </StatusContainer>
                    </TopContainer>

                    <ContentWrapper>
                        <WelcomeContainer>
                            <WelcomeText>Welcome Aboard</WelcomeText>
                        </WelcomeContainer>

                        <Content />

                    </ContentWrapper>
                </MainContentArea>
            </StyledSection>
        </StyledBody>
    );
}