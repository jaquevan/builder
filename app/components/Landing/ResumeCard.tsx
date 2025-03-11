import styled, { keyframes } from "styled-components";
import { Button, Typography, Paper } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

const fadeSlideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const ResumeSection = styled.div`
    margin: 25px 0 5px 5.5%;
    animation: ${fadeSlideIn} 0.8s ease-out 0.3s both;
    z-index: 25;

    @media (max-width: 768px) {
        margin: 15px auto 20px;
        text-align: center;
        padding: 0 15px;
    }
`;

const StyledResumeCard = styled(Paper)`
    background-color: rgba(30, 30, 30, 0.7) !important;
    backdrop-filter: blur(10px);
    padding: 16px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border-left: 4px solid #00843D;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const ResumeButton = styled(Button)`
    align-self: flex-start;
    background: linear-gradient(90deg, #00843D, #34D399);
    color: white;
    padding: 6px 16px;
    text-transform: none;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(90deg, #00843D, #00843D);
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        align-self: center;
    }
`;

const StyledText = styled.div`
    margin: -5% auto;
    padding: 0;
    animation: ${fadeSlideIn} 0.8s ease-out 0.3s both;
    
    @media (max-width: 768px) {
        margin: 15px auto 20px;
        text-align: center;
        padding: 0 15px;
    }
`;

export default function ResumeCard() {
    const handleOpenResume = () => {
        window.open("/WebDev_Jaquez.pdf", '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <StyledText>
                <Typography variant="h5" fontWeight={700}>
                    Want a closer look?
                </Typography>
            </StyledText>
            <ResumeSection>
                <StyledResumeCard elevation={3}>
                    <Typography variant="body1" color="#ffffff" fontWeight={500}>
                        Click here to view my resume in a new tab.
                    </Typography>
                    <ResumeButton
                        onClick={handleOpenResume}
                        variant="contained"
                        color="primary"
                        startIcon={<DescriptionIcon />}
                    >
                        View Resume
                    </ResumeButton>
                </StyledResumeCard>
            </ResumeSection>
        </>
    );
}