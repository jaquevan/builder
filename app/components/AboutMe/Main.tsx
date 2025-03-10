"use client";

import styled from "styled-components";
import Terminal from "@/app/components/AboutMe/Terminal";
import Scroll from "@/app/components/AboutMe/Scroll";
import Image from "next/image";
import pfp from "@/public/real_pfp.jpg";

const ProfileImage = styled.div`
    position: relative;
    width: 12vw;
    height: 12vw;
    border-radius: 15px;
    overflow: hidden;
    border: 4px solid #00843D;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 32vw;
        height: 32vw;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
        width: 36vw;
        height: 36vw;
        margin-bottom: 15px;
    }
`;

const Name = styled.h1`
    font-size: 2.5vw;
    font-family: 'Roboto Mono', monospace;
    background: linear-gradient(135deg, #00843D, rebeccapurple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    padding-bottom: 0.5rem;
    text-align: center;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 8vw;
        height: 4px;
        background: linear-gradient(90deg, #00843D, rebeccapurple);
        border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
        font-size: 5vw;
        &::after {
            width: 12vw;
        }
    }

    @media screen and (max-width: 480px) {
        font-size: 7vw;
        &::after {
            width: 15vw;
            height: 3px;
        }
    }
`;

const Subtitle = styled.h2`
    font-size: 1.2vw;
    font-family: "Arial", "Helvetica", sans-serif;
    font-weight: 700;
    margin-bottom: .5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 2.5vw;
        margin-bottom: 0.8rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3.5vw;
        margin-bottom: 0.6rem;
    }
`;

const Minor = styled.h2`
    font-size: 1.2vw;
    font-family: "Arial", "Helvetica", sans-serif;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 2.5vw;
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 3.5vw;
        margin-bottom: 1.2rem;
    }
`;

const TerminalContainer = styled.div`
    width: 60vw;
    max-width: 700px;

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
    justify-content: left;
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
    gap: 2rem;

    @media (max-width: 1024px) {
        margin: 3rem auto;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 1vw 0;
    }
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
`;

export default function Main() {
    return (
        <PageWrapper>
            <MainDiv>
                <ProfileContainer>
                    <ProfileImage>
                        <Image src={pfp}
                               alt="profile picture"
                               fill
                               style={{ objectFit: "cover" }}
                               priority
                        />
                    </ProfileImage>
                    <Name>Evan Jaquez</Name>
                    <Subtitle>Boston University - Computer Science & Economics</Subtitle>
                    <Minor>Minor in Data Science</Minor>
                </ProfileContainer>

                <TerminalContainer>
                    <Terminal/>
                </TerminalContainer>
            </MainDiv>
            <Scroll/>
        </PageWrapper>
    );
}