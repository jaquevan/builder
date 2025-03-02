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
    margin: 15px 0 5px 5.5%;
    max-width: 500px;
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
    backdrop-filter: blur(5px);
    padding: 16px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border-left: 4px solid #00843D;
    display: flex;
    flex-direction: column;
    gap: 12px;
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
    padding-top: 3.5%; // padding changed for tooltip to not cover text
    margin: 15px 0 5px 5.5%;
    animation: ${fadeSlideIn} 0.8s ease-out 0.3s both;
    z-index: 25;
    
    @media (max-width: 768px) {
        margin: 15px auto 20px;
        text-align: center;
        padding: 0 15px;
    }
`;

export default function ResumeCard() {
    return (

        <>

            <StyledText>
                <Typography variant="h4" color="#ffffff" fontWeight={600}>
                    Want a closer look?
                </Typography>
                <Typography variant="body1" color="#cccccc" sx={{ marginBottom: '8px' }}>
                    My resume includes experience in web development, UI/UX design,
                    and project management with cutting-edge technologies.
                </Typography>
            </StyledText>
            <ResumeSection>
                <StyledResumeCard elevation={3}>
                    <Typography variant="body1" color="#ffffff" fontWeight={500}>
                        Looking for my qualifications?
                    </Typography>
                    <Typography variant="body2" color="#cccccc" sx={{ marginBottom: '8px' }}>
                        View my resume to learn more about my skills and experience.
                    </Typography>
                    <a href="/WebDev_Jaquez.pdf" target="_blank" rel="noopener noreferrer">
                        <ResumeButton
                            variant="contained"
                            startIcon={<DescriptionIcon />}
                        >
                            View Resume
                        </ResumeButton>
                    </a>
                </StyledResumeCard>
            </ResumeSection>
        </>

    );
}