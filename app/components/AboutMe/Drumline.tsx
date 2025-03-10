"use client";

import styled from "styled-components";
import Image from "next/image";
import bass from "@/public/bassline.png";

const DrumlineContainer = styled.div`
    width: 45%;
    max-height: 1055px;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    text-align: left;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1024px) {
        width: 90%;
        min-height: auto;
        padding: 1.5rem;
    }
`;

const ImageContainer = styled.div`
    width: 80%;
    border-radius: 10px;
    overflow: hidden;
    margin: 1.5rem 0;

    @media screen and (max-width: 768px) {
        margin-top: 1rem;
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #6c757d, #828b96);
        border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.75rem;
    }
`;

const Description = styled.div`
    font-size: 1.1rem;
    line-height: 1.8;
    margin: 1.5rem 0;
    font-weight: 400;
    text-align: justify;

    strong {
        color: #468f0d;
        font-weight: 600;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6;
    }
`;

const YoutubeButton = styled.a`
    display: inline-block;
    padding: 0.8rem 1.5rem;
    margin-top: 1rem;
    background-color: #3631ff;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background-color: #cc0000;
        transform: translateY(-2px);
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export default function Drumline() {
    return (
        <DrumlineContainer>
            <Title>BU Drumline</Title>
            <ImageContainer>
                <Image
                    src={bass}
                    alt="Bass drum line performance"
                    width={400}
                    height={200}
                    layout="responsive"
                    style={{
                        objectFit: 'cover',
                        borderRadius: '10px'
                    }}
                    priority
                />
            </ImageContainer>
            <Description>
                As a proud member of the <strong>Boston University Drumline</strong>, I currently perform as a
                <strong> snare drummer</strong>, achieving a significant personal milestone since my freshman year.
                My musical journey includes experience with the <strong>bass drum</strong> in the drumline, as well as
                playing the <strong>trumpet</strong>, <strong>french horn</strong>, and <strong>mellophone</strong> during
                my high school years.
            </Description>
            <YoutubeButton
                href="https://youtu.be/vyq-H2ZBphM"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Performance
            </YoutubeButton>
        </DrumlineContainer>
    );
}