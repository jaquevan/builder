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
    width: 12vw;
    height: 12vw;
    border-radius: 15px;
    overflow: hidden;
    border: 3px solid #00843D;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    animation: ${fadeIn} 0.7s ease-out;

    @media screen and (max-width: 768px) {
        width: 30vw;
        height: 30vw;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
        width: 35vw;
        height: 35vw;
        margin-bottom: 20px;
    }
`;

const InfoContainer = styled.div`
    animation: ${fadeIn} 0.8s ease-out;
    text-align: center;
`;

const Subtitle = styled.h2`
    font-size: 1.2vw;
    font-family: "DM Sans", sans-serif;
    font-weight: 600;
    margin-bottom: 0.5rem;
    letter-spacing: 0.02em;

    @media screen and (max-width: 768px) {
        font-size: 2.5vw;
        margin-bottom: 0.8rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3.2vw;
        margin-bottom: 0.6rem;
    }
`;

const Minor = styled.h3`
    font-size: 1vw;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 768px) {
        font-size: 2.2vw;
        margin-bottom: 1.2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3vw;
        margin-bottom: 1rem;
    }
`;


const TerminalContainer = styled.div`
    width: 60vw;
    max-width: 700px;
    animation: ${fadeIn} 0.9s ease-out;

    @media screen and (max-width: 900px) {
        width: 70vw;
        margin-right: 5%;
    }

    @media screen and (max-width: 768px) {
        width: 95vw;
        margin: 0 auto;
    }
`;

const ProfileContainer = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2vw;

    @media (max-width: 1024px) {
        width: 40vw;
        padding: 0;
    }
    @media screen and (max-width: 768px) {
        width: 80vw;
        margin: 0 auto;
        padding: 0;
        max-width: 400px;
    }
`;

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    max-width: 1200px;
    margin: 5rem auto;
    align-items: center;
    gap: 2.5rem;

    @media (max-width: 1024px) {
        margin: 3rem auto;
        gap: 2rem;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 2vw 0;
        gap: 1.5rem;
    }
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
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
                            alt="profile picture"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
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