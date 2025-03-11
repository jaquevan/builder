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


const StyledBody = styled.div`
    overflow-x: hidden;
    width: 100vw;
    height: 50%;
    margin: 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        height: auto;
        min-height: 100vh;
    }
`;

const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    font-family: Monospaced, "JetBrains Mono", sans-serif;
    margin: 0 auto;
    position: relative;
    flex: 1;
    padding-bottom: 0;

    @media (max-width: 480px) {
        width: 95%;
        padding: 1rem 0;
    }

    @media (max-width: 375px) {
        width: 98%;
        padding: 0.5rem 0;
    }
`;

const MainContentArea = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;

    @media (width: 1024px) {
    }
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 0;
    z-index: 20;

    @media (max-width: 1024px) {
        flex-direction: column;
        width: 100%;
    }
`;

const ButtonDiv = styled.div`
    flex: 1;
    margin-top: -10px;
    padding-right: clamp(10px, 2%, 20px);

    @media (max-width: 1024px) {
        padding-right: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 375px) {
        margin-top: -5px;
    }
`;

const StatusContainer = styled.div`
    z-index: 30;
    position: absolute;
    top: 1vw;
    right: 1vw;
    width: 40%;

    @media (max-width: 1024px) {
        display: none;
    }
`;

/* mobile-only status container that appears after content */
const MobileStatusContainer = styled.div`
    display: none;
    z-index: 30;
    width: 100%;
    margin: 20px auto;
    padding: 0 20px;

    @media (width: 1024px) {
        display: block;
        order: 3;
    }

    @media (width: 768px) {
        padding: 0 15px;
    }

    @media (width: 480px) {
        padding: 0 10px;
    }
`;

const ResumeSection = styled.div`
    width: 25vw;
    padding: 0;
    animation: ${fadeIn} 0.8s ease-out 0.3s both;
    z-index: 25;

    @media (max-width: 768px) {
        margin: 15px auto 20px;
        text-align: center;
        padding: 0;
        width: 100%;
    }

    @media (max-width: 375px) {
        margin: 10px auto 15px;
        padding: 0;
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

                        {/* desktop status */}
                        <StatusContainer>
                            <GithubStatus />
                        </StatusContainer>
                    </TopContainer>

                    {/* train animation component */}
                    <Content />

                    {/* mobile status appears after content */}
                    <MobileStatusContainer>
                        <GithubStatus />
                    </MobileStatusContainer>

                </MainContentArea>
            </MainSection>
        </StyledBody>
    );
}