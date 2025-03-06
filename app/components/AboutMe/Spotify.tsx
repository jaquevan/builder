import styled from "styled-components";

const SpotifyContainer = styled.div`
    width: 100%;
    max-width: 650px;
    margin: 2rem auto 0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(76, 0, 153, 0.4);
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;
export default function SpotifyEmbed() {
    return (
        <SpotifyContainer>
            <iframe
                src="https://open.spotify.com/embed/album/4m2880jivSbbyEGAKfITCa?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </SpotifyContainer>
    );
}