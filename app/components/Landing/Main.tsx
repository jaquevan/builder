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
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1rem 0 0;
    min-height: 100vh;

    @media (max-width: 768px) {
        padding: 0.5rem 0 0;
    }
`;

const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    width: min(90%, 1200px);
    margin: 0 auto;
    position: relative;
    flex: 1;
    font-family: monospace;

    @media (max-width: 1440px) {
        width: min(92%, 1200px);
    }

    @media (max-width: 1024px) {
        width: min(94%, 1000px);
    }

    @media (max-width: 768px) {
        width: 95%;
    }

    @media (max-width: 480px) {
        width: 96%;
    }

    @media (max-width: 375px) {
        width: 98%;
    }
`;

const MainContentArea = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    gap: 2rem;
    padding-bottom: 140px; /* Reserve space for city graphic */

    @media (max-width: 1024px) {
        align-items: center;
        gap: 0.5rem;
        padding-bottom: 100px;
        padding-top: 0;
    }

    @media (max-width: 768px) {
        gap: 1rem;
        padding-bottom: 80px;
        padding-top: 0.5rem;
    }

    @media (max-width: 480px) {
        gap: 0.75rem;
    }
`;

const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 50vh;
    gap: 2rem;
    z-index: 20;
    padding-top: 0;

    @media (min-height: 800px) {
        margin-top: 8vh;
    }

    @media (max-width: 1440px) {
        gap: 1.5rem;
    }

    @media (max-width: 1200px) {
        gap: 1.25rem;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 0.75rem;
        min-height: auto;
        align-items: center;
        justify-content: center;
        margin-top: 0;
    }

    @media (max-width: 768px) {
        gap: 1rem;
        margin-top: 1vh;
    }

    @media (max-width: 480px) {
        gap: 0.75rem;
        margin-top: 0;
    }
`;

const ButtonDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    width: 55vw;
    align-items: center;
    z-index: 30;
    align-self: flex-start;

    @media (max-width: 1440px) {
        width: 52vw;
    }

    @media (max-width: 1200px) {
        width: 50vw;
    }

    @media (max-width: 1024px) {
        padding-right: 0;
        max-width: 500px;
        width: 100%;
        align-self: center;
        gap: 0.5rem;
    }

    @media (max-width: 768px) {
        max-width: 90%;
        gap: 0.75rem;
    }

    @media (max-width: 480px) {
        max-width: 95%;
        gap: 0.5rem;
    }

    @media (max-width: 375px) {
        max-width: 98%;
    }
`;

const StatusContainer = styled.div`
    position: relative;
    width: 45vw;
    z-index: 30;
    margin-left: auto;
    padding-left: 7rem;
    align-self: flex-start;
    transform: translateY(.9rem);

    @media (max-width: 1440px) {
        width: 48vw;
        padding-left: 4rem;
    }

    @media (max-width: 1200px) {
        width: 50vw;
        padding-left: 2rem;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;




const MobileStatusContainer = styled.div`
    display: none;
    width: 100%;

    @media (max-width: 1024px) {
        display: block;
        width: 100%;
        max-width: 500px;
        margin: 0.2rem auto;
        z-index: 30;
    }

    @media (max-width: 768px) {
        max-width: 90%;
        margin: 0.4rem auto;
    }

    @media (max-width: 480px) {
        max-width: 95%;
        margin: 0.3rem auto;
    }

    @media (max-width: 375px) {
        max-width: 98%;
    }
`;

const ResumeSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${fadeIn} 0.8s ease-out 0.3s both;
    z-index: 30;
    position: relative;

    @media (max-width: 1024px) {
        max-width: 500px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        max-width: 90%;
        margin: 0 auto;
    }

    @media (max-width: 480px) {
        max-width: 95%;
    }

    @media (max-width: 375px) {
        max-width: 98%;
    }
`;

const CityWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none;
    line-height: 0;
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
                            <MobileStatusContainer>
                                <GithubStatus />
                            </MobileStatusContainer>
                        </ButtonDiv>
                        <StatusContainer>
                            <GithubStatus />
                        </StatusContainer>
                    </TopContainer>
                    <CityWrapper>
                        <Content />
                    </CityWrapper>
                </MainContentArea>
            </MainSection>
        </StyledBody>
    );
}
