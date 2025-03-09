"use client"

import styled from "styled-components";
import SpotifyEmbed from "@/app/components/AboutMe/Spotify";
import Gym from "./Gym"

const SpotifyContainer = styled.div`
    width: 95%;
    margin: 2rem auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Monospaced, sans-serif;

    @media screen and (max-width: 900px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        width: 95%;
    }

    @media screen and (max-width: 480px) {
        width: 98%;
        margin: 1.5rem auto;
    }
`;

export default function Scroll(){
    return(
        <>


            <SpotifyContainer>
                <h1>Music I am Listening To</h1>
                <SpotifyEmbed/>
            </SpotifyContainer>

            <Gym/>
        </>
    );
}