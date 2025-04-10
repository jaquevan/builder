"use client";
import styled from "styled-components";
import { Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

const Container = styled.div`
    width: 100%;
    max-width: 400px;
    margin: -8.5vh auto 0; 
    padding: 1rem;
    position: relative;
    z-index: 40;

    @media (max-width: 768px) {
        margin-top: -1rem; 
    }
`;

const Card = styled.div`
    padding: 1.2rem;
    border-radius: 16px;
    background: rgba(30, 30, 30, 0.35);
    backdrop-filter: blur(5px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    text-align: center;
    margin-bottom: 0vh; 
`;

const Title = styled.h3`
    font-size: clamp(1.2rem, 2.5vw, 1.8rem); 
    color: #fff;
    margin: 0 0 0.8rem;
`;

const Description = styled.p`
    font-size: clamp(0.85rem, 1.8vw, 1rem);
    color: #fff;
    margin-bottom: 1.2rem;
    opacity: 0.9;
`;

const ViewButton = styled(Button)`
    && {
        background: linear-gradient(90deg, #00843D, #34D399);
        color: white;
        padding: 0.75rem 2rem;
        font-size: 1rem;
        font-weight: 500;
        text-transform: none;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:hover {
            background: linear-gradient(90deg, #00843D, #00843D);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .MuiSvgIcon-root {
            margin-right: 8px;
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
                <Title>Want a closer look?</Title>
                <Description>
                    View my resume to learn more about my experience and skills
                </Description>
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