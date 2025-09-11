// Terminal.styles.tsx
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const AsciiArt = styled.pre`
    font-size: calc(.7rem);
    width: 100%;
    white-space: pre;
    line-height: 1.2;
    margin: 0;
    color: #9e66ff;
    font-family: 'Roboto Mono', monospace;
    animation: ${fadeIn} 0.6s ease-in;
`;

export const TerminalContainer = styled.div<{ isFullscreen?: boolean }>`
    width: 65vh;
    height: 20vw;
    position: relative;
    background-color: #1e1e1e;
    font-family: 'Roboto Mono', monospace;
    padding: 40px 4% 5% 4%;
    cursor: text;
    color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    font-size: calc(.8rem);
    margin: 0 auto;
    transition: all 0.3s ease-in-out;

    @media (max-width: 1024px) {
        width: 50vw;
        height: 30vw;
        font-size: 0.9rem;
        margin: 0;
    }

    @media (max-width: 768px) {
        width: 85vw;
        height: 40vw;
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        width: 85vw;
        height: 50vw;
        font-size: 0.7rem;
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const HeaderTitle = styled.div`
    font-size: .8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 15px;
    display: flex;
    align-items: center;
    font-family: 'monospace';
    font-weight: bold;

    &::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #50fa7b;
        margin-right: 8px;
        box-shadow: 0 0 4px #50fa7b;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 8px;
`;

export const FullscreenButton = styled.button`
    width: 22px;
    height: 22px;
    background-color: rgba(60, 60, 60, 0.7);
    border: 1px solid rgba(128, 128, 128, 0.7);
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: rgba(130, 241, 49, 0.2);
        border-color: rgb(130, 241, 49);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px);
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
    padding-right: 4px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(158, 102, 255, 0.5);
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: rgba(158, 102, 255, 0.8);
    }

    scrollbar-width: thin;
    scrollbar-color: rgba(158, 102, 255, 0.5) transparent;
`;

export const TerminalLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    line-height: 1.6;
    margin: 4px 0;
    animation: ${fadeIn} 0.3s ease-out;
`;

export const PromptSpan = styled.span`
    color: #9e66ff;
    font-weight: bold;
    white-space: pre;
`;

export const OutputText = styled.span<{ isError?: boolean }>`
    white-space: pre-wrap;
    color: ${props => props.isError ? '#ff5555' : '#cccccc'};
    animation: ${fadeIn} 0.4s ease-out;
`;

export const InputLine = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    margin: 4px 0;
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

export const NotificationBadge = styled.span`
    background: #50fa7b;
    color: #282a36;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 10px;
    margin-left: 8px;
    font-weight: bold;
    animation: ${fadeIn} 0.3s ease;
`;