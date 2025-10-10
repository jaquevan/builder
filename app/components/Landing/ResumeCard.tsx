"use client";
import styled, { keyframes } from "styled-components";
import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
    width: 100%;
    max-width: 360px;
    margin: -8.5vh auto 0;
    padding: 1rem;
    position: relative;
    z-index: 40;
    animation: ${fadeIn} 0.6s ease-out;

    @media (max-width: 1024px) {
        margin-top: -1rem;
        max-width: 90%;
    }

    @media (max-width: 768px) {
        margin-top: 0;
        max-width: 95%;
        padding: 0.5rem;
    }
`;

const Card = styled.div`
    padding: 1.5rem;
    border-radius: 12px;
    background: rgba(18, 18, 18, 0.6);
    backdrop-filter: blur(10px);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        padding: 1.2rem;
    }
`;

const Title = styled.h3`
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: #fff;
    margin: 0 0 1rem;
    font-weight: 500;
    font-family: 'JetBrains Mono', monospace;
`;

const ViewButton = styled(Button)`
    && {
        background: rgba(52, 211, 153, 0.15);
        color: #34D399;
        padding: 0.6rem 1.5rem;
        font-size: 0.95rem;
        font-weight: 500;
        text-transform: none;
        border-radius: 8px;
        border: 1px solid rgba(52, 211, 153, 0.3);
        transition: all 0.3s ease;
        font-family: 'JetBrains Mono', monospace;

        &:hover {
            background: rgba(52, 211, 153, 0.25);
            border-color: rgba(52, 211, 153, 0.5);
            color: #34D399;
        }

        &:active {
            transform: scale(0.98);
        }

        .MuiSvgIcon-root {
            margin-right: 8px;
            font-size: 1.1rem;
        }

        @media (max-width: 768px) {
            padding: 0.5rem 1.2rem;
            font-size: 0.9rem;
        }
    }
`;

export default function ResumeCard() {
    const handleOpenResume = () => {
        window.open("/Resume_Jaquez_Fa25.pdf", '_blank', 'noopener,noreferrer');
    };

    return (
        <Container>
            <Card>
                <Title>Want to see my resume?</Title>
                <ViewButton
                    onClick={handleOpenResume}
                    variant="contained"
                    startIcon={<DescriptionIcon />}
                >
                    View Resume
                </ViewButton>
            </Card>
        </Container>
    );
}