import styled from "styled-components";

export const AsciiArt = styled.pre`
    font-size: calc(.7rem);
    width: 100%;
    white-space: pre;
    line-height: 1.2;
    margin: 0;
    color: #9e66ff;
    font-family: 'Roboto Mono', monospace;
`;

export const TerminalContainer = styled.div<{ isFullscreen?: boolean }>`
    width: ${props => props.isFullscreen ? '90vw' : '65vh'};
    height: ${props => props.isFullscreen ? '70vw' : '20vw'};
    position: ${props => props.isFullscreen ? 'fixed' : 'relative'};
    top: ${props => props.isFullscreen ? '0' : 'auto'};
    left: ${props => props.isFullscreen ? '0' : 'auto'};
    z-index: ${props => props.isFullscreen ? '9999' : '1'};
    background-color: #1e1e1e;
    font-family: 'Roboto Mono', monospace;
    padding: 5% 4%;
    cursor: text;
    color: white;
    display: flex;
    box-shadow: 0 4px 12px rgb(74, 2, 255);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    font-size: calc(.8rem);
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: ${props => props.isFullscreen ? '99vw' : '50vw'};
        height: ${props => props.isFullscreen ? '70vw' : '30vw'};
        font-size: ${props => props.isFullscreen ? '1rem' : '0.9rem'};
        margin: 0;
    }

    @media (max-width: 768px) {
        width: ${props => props.isFullscreen ? '99vw' : '85vw'};
        height: ${props => props.isFullscreen ? '70vw' : '40vw'};
        font-size: ${props => props.isFullscreen ? '0.9rem' : '0.8rem'};
    }

    @media (max-width: 480px) {
        width: ${props => props.isFullscreen ? '99vw' : '85vw'};
        height: ${props => props.isFullscreen ? '70vw' : '50vw'};
        font-size: ${props => props.isFullscreen ? '0.8rem' : '0.7rem'};
    }
`;

export const TerminalHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background-color: #2d2d2d;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    &::before {
        content: "aboutMe@evanjaquez";
        font-size: .8rem;
        color: rgba(255, 255, 255, 0.7);
        margin-left: 15px;
    }
`;

export const FullscreenButton = styled.button`
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 1px solid grey;
    color: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-right: 25px;

    &:hover {
        background-color: rgb(130, 241, 49);
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;

export const TerminalContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex: 1;
    margin-top: 8px;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for Firefox */
    scrollbar-width: none;

    /* Hide scrollbar for IE and Edge */
    -ms-overflow-style: none;
`;

export const TerminalLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.6;
    margin: 4px 0;
`;

export const PromptSpan = styled.span`
    color: #9e66ff;
    font-weight: bold;
    white-space: pre;
`;

export const OutputText = styled.span`
    white-space: pre-wrap;
    color: #cccccc;
`;

export const InputLine = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const InputField = styled.input`
    flex: 1;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    margin: 0;
`;