"use client";
import styled, { keyframes } from "styled-components";
import Content from "@/app/components/Landing/Content";
import Buttons from "@/app/components/Landing/Buttons";
import GithubStatus from "@/app/components/Landing/GithubStatus";
import ResumeCard from "@/app/components/Landing/ResumeCard";


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



const StyledBody = styled.div`
    overflow-x: hidden;
    width: 100vw;
    height: 47.5vw;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    color: black;
    font-family: Monospaced, "JetBrains Mono", sans-serif;
    margin: 0 auto;
    position: relative;
    flex: 1;
    padding-bottom: 0;
    
`;

const WelcomeContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: -11%; // space between train animation content and above 
    z-index: 10;
    animation: ${fadeIn} 1.5s ease-out;
`;

const WelcomeText = styled.h2`
    color: white;
    font-size: clamp(1.8rem, 5vw, 3rem);
    font-weight: 700;
    text-align: left;
    letter-spacing: 2px;
    animation: ${glow} 4s infinite;
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
    z-index: 30;
    position: absolute;
    top: 1vw;
    right: 1vw;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: -30px;
        align-self: center;
    }
`;

const ResumeSection = styled.div`
    margin: 15px 0 5px 5.5%;
    max-width: 500px;
    animation: ${fadeIn} 0.8s ease-out 0.3s both;
    z-index: 25;
    
    @media (max-width: 768px) {
        margin: 15px auto 20px;
        text-align: center;
        padding: 0 15px;
    }
`;

export default function Main() {
    return (
        <StyledBody>
            <MainSection>

                <MainContentArea>

                    <TopContainer>

                        <ButtonDiv>

                            <Buttons />

                            <ResumeSection>
                                <ResumeCard />
                            </ResumeSection>
                        </ButtonDiv>

                        <StatusContainer>
                            <GithubStatus />
                        </StatusContainer>

                    </TopContainer>

                        <WelcomeContainer>
                            <WelcomeText>Welcome Aboard</WelcomeText>
                        </WelcomeContainer>

                        {/*content refers to the train animation component*/}
                        <Content />

                </MainContentArea>
            </MainSection>
        </StyledBody>
    );
}