"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import snare from "@/public/snareline.png";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const DrumlineContainer = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 2.5rem;
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.03);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    font-family: "DM Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(6px);
    animation: ${fadeIn} 0.6s ease-out;
    text-align: left;
    margin: 0 auto;
    transition: background 0.3s ease;

    @media (prefers-color-scheme: dark) {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
    }

    @media (max-width: 1024px) {
        width: 90%;
        padding: 2rem;
    }
`;

const ImageContainer = styled.div`
    width: 70%;
    height: 45%;
    margin: 1.5rem auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background: #000;
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

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 4px;
        background: #3631ff;
        border-radius: 2px;
    }

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const Description = styled.div`
    font-size: 1.15rem;
    line-height: 1.8;
    margin: 1.8rem 0;
    font-weight: 400;

    strong {
        color: #5d7df3;
        font-weight: 600;
    }
    

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.7;
    }
`;

const YoutubeButton = styled.a`
    display: inline-flex;
    padding: 0.9rem 1.8rem;
    margin-top: 1rem;
    background-color: #3631ff;
    border-radius: 10px;
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.25s ease;
    align-items: center;
    gap: 0.7rem;
    letter-spacing: 0.02em;
    box-shadow: 0 4px 12px rgba(54, 49, 255, 0.3);

    &:hover {
        background-color: #4540ff;
    }

    svg {
        width: 22px;
        height: 22px;
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
                As a proud member of the <strong>Boston University Drumline</strong>, I
                currently perform as a <strong>snare drummer</strong>, achieving a
                significant personal milestone since my freshman year. My musical
                journey includes experience with the <strong>bass drum</strong> in the
                drumline, as well as playing the <strong>trumpet</strong>,{" "}
                <strong>french horn</strong>, and <strong>mellophone</strong> during my
                high school years.
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
