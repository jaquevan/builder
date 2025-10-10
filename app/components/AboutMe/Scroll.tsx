"use client";

import styled from "styled-components";
import SpotifyEmbed from "@/app/components/AboutMe/Spotify";
import Gym from "./Gym";
import Background from "./Background";
import Drumline from "./Drumline";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 0 1rem;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        gap: 1.5rem;
    }
`;

const MusicContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 1rem;
    box-sizing: border-box;

    h1 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(2rem, 4vw, 2.5rem);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        margin: 2rem auto;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
        margin: 1.5rem auto;
    }
`;

export default function Scroll() {
    return (
        <>
            <Background />
            <Gym />
            <MusicContainer>
                <h1>Music</h1>
                <FlexContainer>
                    <SpotifyEmbed />
                    <Drumline />
                </FlexContainer>
            </MusicContainer>
        </>
    );
}
