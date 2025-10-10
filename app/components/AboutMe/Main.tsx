"use client";

import styled, { keyframes } from "styled-components";
import Terminal from "@/app/components/AboutMe/Terminal";
import Scroll from "@/app/components/AboutMe/Scroll";
import Image from "next/image";
import pfp2 from "@/public/pfp2.jpg";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const ProfileImage = styled.div`
    position: relative;
    width: clamp(180px, 12vw, 220px);
    height: clamp(180px, 12vw, 220px);
    border-radius: 12px;
    overflow: hidden;
    margin: 0 auto;
    animation: ${fadeIn} 0.7s ease-out;

    @media screen and (max-width: 768px) {
        width: clamp(140px, 30vw, 200px);
        height: clamp(140px, 30vw, 200px);
        margin-bottom: 1.5rem;
    }
`;

const InfoContainer = styled.div`
    animation: ${fadeIn} 0.8s ease-out;
    text-align: center;
    width: 100%;
    margin: 0 auto;
`;

const Subtitle = styled.h2`
    font-size: clamp(1rem, 1.2vw, 1.3rem);
    font-family: "DM Sans", sans-serif;
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: 0.02em;
    // Emphasized text only
    @media screen and (max-width: 768px) {
        font-size: clamp(0.95rem, 2.5vw, 1.1rem);
        margin-bottom: 0.6rem;
        text-align: center;
    }
`;

const Minor = styled.h3`
    font-size: clamp(0.9rem, 1vw, 1.1rem);
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    margin-bottom: 1.5rem;
    // Emphasized text only
    @media screen and (max-width: 768px) {
        font-size: clamp(0.85rem, 2.2vw, 1rem);
        margin-bottom: 1rem;
        text-align: center;
    }
`;

const TerminalContainer = styled.div`
    flex: 1;
    max-width: 700px;
    animation: ${fadeIn} 0.9s ease-out;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
`;

const ProfileContainer = styled.div`
    flex: 0 0 auto;
    width: clamp(250px, 30vw, 350px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 400px;
    }
`;

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: min(90%, 1200px);
    margin: 3rem auto;
    align-items: center;
    gap: 3rem;
    padding: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        margin: 2rem auto;
        padding: 0.5rem;
        align-items: center;
        text-align: center;
    }
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-height: 100vh;
`;

export default function Main() {
    return (
        <PageWrapper>
            <MainDiv>
                <ProfileContainer>
                    <ProfileImage>
                        <Image
                            src={pfp2}
                            alt="Evan Jaquez - Boston University Student"
                            fill
                            sizes="(max-width: 768px) 200px, 220px"
                            style={{ objectFit: "cover" }}
                            priority
                            quality={90}
                        />
                    </ProfileImage>
                    <InfoContainer>
                        <Subtitle>Boston University - Computer Science & Economics</Subtitle>
                        <Minor>Minor in Data Science</Minor>
                    </InfoContainer>
                </ProfileContainer>

                <TerminalContainer>
                    <Terminal/>
                </TerminalContainer>
            </MainDiv>
            <Scroll/>
        </PageWrapper>
    );
}