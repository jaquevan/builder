import styled, { keyframes } from 'styled-components';
import { FormGroup, Paper } from "@mui/material";

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const shimmer = keyframes`
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

export const SocialButtons = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
    justify-content: center;
`;

export const LeftSection = styled.div`
    padding: 2rem;

    p {
        color: #6b7280;
        font-size: 1.1rem;
        line-height: 1.6;
        margin-top: 1rem;
    }
`;

export const RightSection = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export const StyledDiv = styled(Paper)`
    width: 100%;
    padding: 1.5rem;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
    margin: 1.5rem auto;
    justify-content: center;
    max-width: 700px;

    @media (max-width: 768px) {
        width: 85%;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1rem 0;
    font-family: 'JetBrains Mono', monospace;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 1.5rem;
    width: 85%;
`;

export const Label = styled.label`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
`;

export const TextInput = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: border-color 0.2s ease;

    &:hover {
        border-color: #4361ee;
    }

    &:focus {
        outline: none;
        border-color: #4361ee;
        box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15);
    }
`;

export const Selections = styled(FormGroup)`
    background: white;
    padding: 1rem;
    border-radius: 8px;
    border: 2px solid #e5e7eb;
    width: 100%;

    .MuiFormControlLabel-root {
        margin: 0 1rem 0 0;

        .MuiCheckbox-root {
            color: #4361ee;
            padding: 6px;
        }

        .MuiTypography-root {
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            color: #4b5563;
        }
    }
`;

export const MessageInput = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 0.75rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    resize: vertical;
    transition: border-color 0.2s ease;

    &:hover {
        border-color: #4361ee;
    }

    &:focus {
        outline: none;
        border-color: #4361ee;
        box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15);
    }
`;

export const SendButton = styled.button`
    padding: 0.75rem 1.5rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background: #4361ee;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    align-self: center;

    &:hover {
        background: #3730a3;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(67, 97, 238, 0.25);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const SocialButton = styled.a<{ $gradient?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 500;
    font-family: 'JetBrains Mono', sans-serif;
    color: white;
    background: ${props => props.$gradient || "linear-gradient(135deg, #2c3e50, #4c6b8a)"};
    background-size: 200% 200%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    max-width: 160px;
    margin: 0 auto;

    &:hover, &:focus {
        transform: translateY(-3px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

        & .icon {
            animation: ${pulse} 1.5s ease-in-out infinite;
        }

        &::after {
            opacity: 1;
        }
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0) 100%);
        background-size: 200% 100%;
        opacity: 0;
        z-index: -1;
        animation: ${shimmer} 1.5s infinite;
        transition: opacity 0.3s ease-in-out;
        border-radius: inherit;
    }

    @media (max-width: 768px) {
        max-width: 140px;
    }

    @media (max-width: 480px) {
        max-width: 120px;
        padding: 0.5rem 0.75rem;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    transition: all 0.3s ease;
`;

export const ButtonText = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;

    @media (max-width: 380px) {
        font-size: 0.9rem;
    }
`;