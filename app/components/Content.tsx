import styled, { keyframes } from "styled-components";
import Train from "../public/spr_train_0.png";
import Image from "next/image";
import { Paper, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import City from "../public/city.png";
import Sewer from "../public/sewer.webp";


// Define keyframes for side-to-side oscillation animation
const moveSideToSide = keyframes`
    0%, 100% {
        transform: translateX(-50px);
    }
    50% {
        transform: translateX(100px);
    }
`;

const StyledDiv = styled.div`
    padding: 5%;
    border: 5px solid white;
    width: 100%;
    height: 9vh;
    margin: 2% auto;
    color: white;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    background-color: mediumaquamarine !important;
    background: url(${City.src}) no-repeat center center;
    background-size: cover; /* Make the background image fill the entire div */
`;

const StyledSewer = styled.div`

    background: url(${Sewer.src}) no-repeat center center;
    background-size: cover; /* Make the background image fill the entire div */
    padding-bottom: 20%;
    margin-top: 0;
    `;


const TrainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vh; /* Add space between the trains */
    animation: ${moveSideToSide} 5s infinite ease-in-out; /* Apply side-to-side oscillation animation */
`;

const TrainImage = styled(Image)`
    width: 25vh;
    height: 25vh;
`;

const ButtonContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const StyledPaper = styled(Paper)`
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: background-color 0.2s;

    &:hover {
        background-color: steelblue; 
        cursor: pointer;
    }
`;

export default function Content() {
    return (
        <>
            {/* Train container */}
            <StyledDiv>
                <TrainContainer>
                    <TrainImage src={Train} alt="Train 1" objectFit="cover" />
                    <TrainImage src={Train} alt="Train 2" objectFit="cover" />
                    <TrainImage src={Train} alt="Train 3" objectFit="cover" />
                </TrainContainer>
            </StyledDiv>

            <ButtonContainer>
                <StyledPaper
                    href="https://www.linkedin.com/in/evan-jaquez-118b5b294/"
                    target="_blank"
                >
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                    LinkedIn
                </StyledPaper>
                <StyledPaper
                    href="https://www.github.com/jaquevan"
                    target="_blank"
                >
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                    GitHub
                </StyledPaper>

                <StyledPaper href="/" target="_blank">
                    Experience
                </StyledPaper>
            </ButtonContainer>

            <StyledSewer>
                <h1> Tasks and Status Section Here with Links to Projects </h1>
            </StyledSewer>
        </>
    );
}
