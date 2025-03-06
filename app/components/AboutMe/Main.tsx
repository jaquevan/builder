"use client"

import styled from "styled-components";
import SpotifyEmbed from "@/app/components/AboutMe/Spotify";
import Image from "next/image";
import pfp from "../../public/real_pfp.jpg";

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 120px 20px 60px;

    @media screen and (max-width: 768px) {
        padding-top: 100px;
    }
`;

const ProfileImage = styled.div`
    position: relative;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #00843D;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        width: 180px;
        height: 180px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 480px) {
        width: 150px;
        height: 150px;
        margin-bottom: 25px;
    }
`;

const Name = styled.h1`
    font-size: 2.8rem;
    font-family: 'Roboto Mono', monospace;
    background: linear-gradient(135deg, #00843D, rebeccapurple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.2rem;
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
        font-size: 2.2rem;
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
    color: #666;
    font-size: 1.3rem;
    font-family: "Arial", "Helvetica", sans-serif;
    font-weight: 700;
    margin-bottom: .5rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 1.2rem;
    }
`;

const Minor = styled.h2`
    color: #666;
    font-size: 1.3rem;
    font-family: "Arial", "Helvetica", sans-serif;
    font-weight: 600;
    margin-bottom: 2rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
        margin-bottom: 1.2rem;
    }
`;

export default function Main() {
    return (
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
            <SpotifyEmbed/>
        </ProfileContainer>
    );
}