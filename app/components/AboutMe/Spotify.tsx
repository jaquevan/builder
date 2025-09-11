"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const SpotifyContainer = styled.div`
    width: 45%;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.7);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    animation: ${fadeIn} 0.6s ease-out;

    @media screen and (max-width: 1024px) {
        width: 90%;
        min-width: 280px;
        padding: 1.5rem;
    }
`;

const ResponsiveIframe = styled.div`
    position: relative;
    padding-bottom: 80%;
    height: 0;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
`;

const StyledIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
`;

const Title = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 1.8rem;
    color: white;
    position: relative;
    padding-bottom: 0.7rem;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    text-align: left;
    letter-spacing: -0.01em;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 130px;
        width: 50px;
        height: 4px;
        background: #1DB954;
        border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const IframeWrapper = styled.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(26, 26, 26, 0.3);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(29, 185, 84, 0.5);
        border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
        background: rgba(29, 185, 84, 0.7);
    }
`;

const IframeStyle = {
    borderRadius: '12px'
};

export default function SpotifyEmbed() {
    return (
        <SpotifyContainer>
            <Title>Current Favorite Album</Title>
            <IframeWrapper>
                <ResponsiveIframe>
                    <StyledIframe
                        style={IframeStyle}
                        src="https://open.spotify.com/embed/album/4m2880jivSbbyEGAKfITCa?utm_source=generator&theme=0"
                        width="100%"
                        height="300px"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </ResponsiveIframe>
            </IframeWrapper>
        </SpotifyContainer>
    );
}