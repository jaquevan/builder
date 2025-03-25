"use client";
import styled from "styled-components";

const SpotifyContainer = styled.div`
    width: 45%;
    margin: 0 auto;   
    border-radius: 10px;
    overflow: hidden;
    background: black;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1024px) {
        width: 90%;
        min-width: 280px;
        padding: 1rem;
    }
`;

const ResponsiveIframe = styled.div`
    position: relative;
    padding-bottom: 80%; 
    height: 0;
    overflow: hidden;
    border-radius: 12px;
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
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: white;
    position: relative;
    padding-bottom: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    text-align: center;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #6c757d, #343a40);
        border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.75rem;
    }
`;

const IframeWrapper = styled.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: #1a1a1a;
    }

    &::-webkit-scrollbar-thumb {
        background: #444;
        border-radius: 3px;
    }
`;

const IframeStyle = {
    borderRadius: '12px'
};

export default function SpotifyEmbed() {
    return (
        <SpotifyContainer>
            <Title>Current Favorite Albums</Title>
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