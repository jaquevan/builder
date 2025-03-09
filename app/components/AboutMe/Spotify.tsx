import styled from "styled-components";

const SpotifyContainer = styled.div`
    width: 100%;
    max-width: 650px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgb(74, 2, 255);
    background: black;
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
                height= "152"
                frameBorder="0"
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                loading="lazy"
            ></iframe>
        </SpotifyContainer>
    );
}