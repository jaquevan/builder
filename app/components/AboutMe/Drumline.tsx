"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import snare from "@/public/snareline.png";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const DrumlineContainer = styled.div`
    width: 90vw;
    max-width: 1200px;
    height: 100%;
    padding: 2.95rem 2rem;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 30px var(--shadow);
    font-family: "DM Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid var(--border);
    backdrop-filter: blur(6px);
    animation: ${fadeIn} 0.6s ease-out;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 1.5rem 1.5rem;
        border-radius: 12px;
        width: 90vw;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        border-radius: 8px;
        width: 90vw;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 1.5rem auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: #000;

    @media (max-width: 768px) {
        width: 95%;
        margin: 1rem auto;
    }

    @media (max-width: 480px) {
        width: 98%;
        margin: 0.7rem auto;
        border-radius: 8px;
    }
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    max-height: 620px; /* ← increase this to make it taller */
    object-fit: contain; /* ensures entire image is shown */
    border-radius: 12px;
    display: block;
`;

const Title = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.7rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    text-align: center;
    width: 100%;
    color: var(--text-primary);

    @media (max-width: 768px) {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
        padding-bottom: 0.5rem;
    }
`;

const Description = styled.div`
    font-size: 1rem;
    line-height: 1.5;
    margin: 1.8rem 0;
    font-weight: 400;
    width: 100%;
    max-width: 700px;
    box-sizing: border-box;
    color: var(--text-secondary);

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.7;
        margin: 1.2rem 0;
        max-width: 600px;
    }

    @media (max-width: 480px) {
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 1rem 0;
        max-width: 90%;
    }
`;

const YoutubeButton = styled.a`
    display: inline-flex;
    padding: 0.9rem 1.8rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    background-color: #222;
    border-radius: 10px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: background 0.25s ease;
    align-items: center;
    gap: 0.7rem;
    letter-spacing: 0.02em;
    box-shadow: none;
    border: none;

    &:hover {
        background-color: #444;
    }

    svg {
        width: 22px;
        height: 22px;
    }

    @media (max-width: 480px) {
        padding: 0.8rem 1.4rem;
        font-size: 0.95rem;
        gap: 0.5rem;
        margin-bottom: 0.3rem;

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export default function Drumline() {
    return (
        <DrumlineContainer>
            <Title>BU Drumline</Title>

            <ImageContainer>
                <StyledImage
                    src={snare}
                    alt="Snare drum line performance"
                    priority
                />
            </ImageContainer>

            <Description>
                Outside of professional experience, I am a proud member of the BU Drumline.
                Having no prior drumming experience before college, I worked my butt off to
                play the snare drum. And I love it. Switching instruments at this level
                demonstrated a lot of courage, and it&apos;s one of my proudest achievements.
            </Description>

            <YoutubeButton
                href="https://www.dropbox.com/scl/fi/bs1y1aj5300waev1ym5u3/1007252049.mp4?rlkey=rimy37xlmgo6kv28oskwdrrij&st=oavly9sq&dl=0"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Watch Performance
            </YoutubeButton>
        </DrumlineContainer>
    );
}
