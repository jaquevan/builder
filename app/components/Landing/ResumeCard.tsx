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

    @media (max-width: 768px) {
        margin-top: -1rem;
        max-width: 85%;
    }
`;

const Card = styled.div`
    padding: 1.2rem;
    border-radius: 18px;
    background: rgba(30, 30, 30, 0.5);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    }
`;

const Title = styled.h3`
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    color: #fff;
    margin: 0 0 1rem;
    font-weight: 600;
`;

const ViewButton = styled(Button)`
    && {
        background: linear-gradient(90deg, #00843D, #34D399);
        color: white;
        padding: 0.7rem 2rem;
        font-size: 1rem;
        font-weight: 500;
        text-transform: none;
        border-radius: 10px;
        transition: all 0.3s ease;

        &:hover {
            background: linear-gradient(90deg, #00843D, #00843D);
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        &:active {
            transform: translateY(0);
        }

        .MuiSvgIcon-root {
            margin-right: 8px;
            font-size: 1.2rem;
        }
    }
`;

export default function ResumeCard() {
    const handleOpenResume = () => {
        window.open("/WebDev_Jaquez.pdf", '_blank', 'noopener,noreferrer');
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