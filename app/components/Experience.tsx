import React, { useState } from "react";
import styled from "styled-components";
import { Card, CardContent, Typography } from "@mui/material";
import DirtImage from "../public/dirt.png";

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    padding: 2rem;
    height: 50vh;

    @media screen and (max-width: 750px) {  
        flex-direction: column;
    }
`;

const StyledCard = styled(Card)`
    width: 40vh;
    height: 110%;
    background-color: #333; 
    color: white; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
    cursor: pointer;
    
`;

const CardFront = styled.div<{ flipped: boolean }>`
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: auto;
    transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

const CardBack = styled.div<{ flipped: boolean }>`
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    transform: ${({ flipped }) => (flipped ? "rotateY(0)" : "rotateY(180deg)")};
    background-color: darkorange; 
    color: white; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ExperienceTitle = styled(Typography)`
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    height: 20%;
`;

const ExperienceSubtitle = styled(Typography)`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #777;
`;

const ExperienceDescription = styled(Typography)`
    font-size: 1rem;
    color: #ccc;
`;

const StyledImage = styled.img`
    width: 80%;
    height: auto;
    border-radius: 50%; 
    margin-bottom: 1rem;
`;

const StyledDiv = styled.div`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #ffaf82; 
    color: black;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 10px;
`;

const StyledButton = styled.button`
    width: 30%;
    height: auto;
    padding: 1%;
    border-radius: 15px;
    border: 1px solid #ff6600;
    background-color: #ff6600;
    margin-top: 1rem;

    &:hover {
        background-color: steelblue;
        border: 1px solid steelblue;
        color: black;
        cursor: pointer;
    }
`;

const StyledTitle = styled.div`
    margin-top: 2%;
    font-family: "Times New Roman", sans-serif;

`

const experiences = [
    {
        title: "Frontend Developer",
        subtitle: "Blue Dev Digital",
        // description: "UI/UX consultant and frontend designer for applications using React and Node.js.",
        image: DirtImage.src,
    },
    {
        title: "Software Engineer",
        subtitle: "Our National Conversation",
        // description: "Implemented responsive UI components using Figma designs at a large scale non-profit organization",
        image: DirtImage.src,
    },
    {
        title: " BU Course Assistant",
        subtitle: "CS391",
        // description: "Held office hours, graded assignments, and lead discussion sections in 300 level CS course at Boston University.",
        image: DirtImage.src,
    },
];

export default function Experience() {
    const [flipped, setFlipped] = useState(Array(experiences.length).fill(false));

    const handleFlip = (index: number) => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    };

    return (
        <>
            <StyledTitle>
                <Typography variant="h3">Work Experience</Typography>
                <Typography variant="body2">Click to see more</Typography>
            </StyledTitle>

            <CardContainer>

                {experiences.map((experience, index) => (
                    <StyledCard key={index} onClick={() => handleFlip(index)}>
                        <CardFront flipped={flipped[index]}>
                            <CardContent>
                                <StyledImage src={experience.image} alt={experience.title} />
                                <ExperienceTitle>{experience.title}</ExperienceTitle>
                                <ExperienceSubtitle>{experience.subtitle}</ExperienceSubtitle>
                                {/*<ExperienceDescription>{experience.description}</ExperienceDescription>*/}
                            </CardContent>
                        </CardFront>
                        <CardBack flipped={flipped[index]}>
                            <CardContent>
                                <Typography variant="h5">{experience.title}</Typography>
                                <br/>
                                <Typography variant="subtitle1">{experience.subtitle}</Typography>
                                <StyledButton>View</StyledButton>
                            </CardContent>
                        </CardBack>
                    </StyledCard>
                ))}
            </CardContainer>

            <StyledDiv>
                <Typography variant="h4">Check out my latest projects!</Typography>
                <StyledButton>Projects</StyledButton>
            </StyledDiv>
        </>
    );
}