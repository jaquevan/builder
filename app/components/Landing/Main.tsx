"use client";
import styled, { keyframes } from "styled-components";
import Content from "@/app/components/Landing/Content";
import Buttons from "@/app/components/Landing/Buttons";
import GithubStatus from "@/app/components/Landing/GithubStatus";
import ResumeCard from "@/app/components/Landing/ResumeCard";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const StyledBody = styled.div`
    overflow-x: hidden;
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1rem 0;
`;

const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    width: min(90%, 1200px);
    margin: 0 auto;
    position: relative;
    flex: 1;
    font-family: monospace;
    max-height: calc(100vh - 2rem);
`;

const MainContentArea = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    gap: 2rem;

    @media (max-width: 1024px) {
        align-items: center;
    }
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start; 
    width: 100%;
    height: calc(54vh - 2rem);
    gap: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 1rem;
        min-height: auto; 
    }
`;

const ButtonDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: max(1rem, 2%);
    max-height: 100vh;
    align-items: center;

    @media (max-width: 1024px) {
        padding-right: 0;
        align-items: center;
        width: 100%;
        overflow: visible;
    }
`;

const StatusContainer = styled.div`
    position: sticky;
    top: 1rem;
    width: 40%;
    z-index: 30;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const MobileStatusContainer = styled.div`
    display: none;
    width: 100%;
    margin-top: 1rem;

    @media (max-width: 1024px) {
        display: block;
        width: 100%;
        max-width: 500px;
        margin: 1rem auto;
    }
`;

const ResumeSection = styled.div`
    width: clamp(300px, 25vw, 400px);
    animation: ${fadeIn} 0.8s ease-out 0.3s both;
    z-index: 40;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 500px;
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
                        <Content />
                        <MobileStatusContainer>
                            <GithubStatus />
                        </MobileStatusContainer>
                    </MainContentArea>
                </MainSection>
            </StyledBody>
        );
    }