"use client"

import styled from "styled-components";
import Terminal from "@/app/components/AboutMe/Terminal";
import Scroll from "@/app/components/AboutMe/Scroll"
import Image from "next/image";
import pfp from "@/public/real_pfp.jpg";

const ProfileImage = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #00843D;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 160px;
        height: 160px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
        width: 140px;
        height: 140px;
        margin-bottom: 15px;
    }
`;

const Name = styled.h1`
    font-size: 2.5rem;
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
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #00843D, rebeccapurple);
        border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        &::after {
            width: 60px;
        }
    }

    @media screen and (max-width: 480px) {
        font-size: 1.8rem;
        &::after {
            width: 50px;
            height: 3px;
        }
    }
`;

const Subtitle = styled.h2`
    font-size: 1.2rem;
    font-family: "Arial", "Helvetica", sans-serif;
    font-weight: 700;
    margin-bottom: .5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 0.8rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 0.6rem;
    }
`;

const Minor = styled.h2`
    font-size: 1.2rem;
    font-family: "Arial", "Helvetica", sans-serif;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        margin-bottom: 1.2rem;
    }
`;


const TerminalContainer = styled.div`
    width: 55%;
    padding: 0;

    @media screen and (max-width: 900px) {
        width: 50%;
    }

    @media screen and (max-width: 768px) {
        width: 95%;
        margin: 0 auto;
    }
`;

const ProfileContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2rem;

    @media screen and (max-width: 1024px) {
        width: 45%;
        padding-right: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
        padding-right: 0;
        max-width: 400px;
    }
`;

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 1rem 0;
    }
`;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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