"use client"

import styled from "styled-components";
import SpotifyEmbed from "@/app/components/AboutMe/Spotify";
import Gym from "./Gym"
import Background from "./Background"
import Drumline from "./Drumline"


const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    max-width: 1400px;
    height: calc(100vh - 200px); // Subtract space for margins and header
    margin: 0 auto;
    padding: 0 2rem;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        height: auto;
        align-items: center;
        padding: 0 1rem;
    }
`;

const MusicContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 1rem 0;
    font-family: Monospaced, sans-serif;

    h1 {
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0.5rem 0;
    }
`;

export default function Scroll(){
    return(
        <>
            <Background/>
            <Gym/>
            <MusicContainer>
                <h1>Music</h1>
                <FlexContainer>
                    <SpotifyEmbed/>
                    <Drumline/>
                </FlexContainer>
            </MusicContainer>

        </>
    );
}