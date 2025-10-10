"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const SpotifyContainer = styled.div`
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(18, 18, 18, 0.6);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: ${fadeIn} 0.6s ease-out;

    @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        padding: 1rem;
    }
`;

const ResponsiveIframe = styled.div`
    position: relative;
    padding-bottom: 25%;
    height: 0;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
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
    font-size: clamp(1.5rem, 3vw, 2rem);
    margin-bottom: 1rem;
    color: white;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    text-align: left;
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
    borderRadius: '8px'
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
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </ResponsiveIframe>
                <ResponsiveIframe>
                    <StyledIframe
                        style={IframeStyle}
                        src="https://open.spotify.com/embed/album/3Gt7rOjcZQoHCfnKl5AkK7?utm_source=generator"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </ResponsiveIframe>
                <ResponsiveIframe>
                    <StyledIframe
                        style={IframeStyle}
                        src="https://open.spotify.com/embed/album/4iN6TmJM1UT4AWWnuC6Jfn?utm_source=generator&theme=0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </ResponsiveIframe>
                <ResponsiveIframe>
                    <StyledIframe
                        style={IframeStyle}
                        src="https://open.spotify.com/embed/album/5Dbax7G8SWrP9xyzkOvy2F?utm_source=generator"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </ResponsiveIframe>
            </IframeWrapper>
        </SpotifyContainer>
    );
}
