import styled from "styled-components";
import { Paper, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: left;
    padding-left: 5.5%;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        justify-content: center;
        padding-left: 0;
        gap: 0.5rem;
    }
`;

const StyledPaper = styled(Paper)`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: background-color 0.2s;
    text-decoration: none;
    font-size: 1rem;
    width: 160px;

    &:hover {
        background-color: steelblue;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
        width: 120px;
    }

    @media (max-width: 480px) {
        padding: 0.3rem 0.6rem;
        font-size: 0.7rem;
        width: 100px;
    }
`;

const StyledIconButton = styled(IconButton)`
    @media (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

export default function Buttons() {
    return (
        <ButtonContainer>
            <StyledPaper
                component="a"
                href="https://www.linkedin.com/in/evan-jaquez-118b5b294/"
                target="_blank"
            >
                <StyledIconButton>
                    <LinkedInIcon />
                </StyledIconButton>
                LinkedIn
            </StyledPaper>
            <StyledPaper
                component="a"
                href="https://www.github.com/jaquevan"
                target="_blank"
            >
                <StyledIconButton>
                    <GitHubIcon />
                </StyledIconButton>
                GitHub
            </StyledPaper>
            <StyledPaper component="a" href="/" target="_blank">
                Experience
            </StyledPaper>
        </ButtonContainer>
    );
}
