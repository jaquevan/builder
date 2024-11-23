"use client"

import { Typography, Container } from "@mui/material";
import styled from "styled-components";
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar"

// images for planit
import timer from "../public/timer.png"
import task from "../public/plantasks.png"
import journal from "../public/journal.png"
import planit from "../public/planitHome.png"

// images for camelitics
import header from "../public/header.png";
import data from "../public/data.png"
import about from "../public/about.png";
import doc from "../public/data.png";
import camel from "../public/camelitics.png";

import Image from "next/image";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledSub = styled(Typography)`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    padding: 1%;
    font-size: 2rem;
    font-weight: bold;
    color: #ff6600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const MainImage = styled(motion(Image))`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    padding: 1%;
    width: 80%;
    height: auto;
    border: 5px solid orange; /* Make the main image stand out */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const SubImage = styled(motion(Image))`
    width: 48%; /* Adjust width to fit inline */
    height: auto;
    margin: 1%;
`;

const GridContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    
`;

const NavLink = styled(ScrollLink)`
    margin: 0 1rem;
    cursor: pointer;
    color: blue;
    text-decoration: none;
    font-family: "Arial Black","Malgun Gothic", "Monospaced", sans-serif;

    &:hover {
        text-decoration: underline;
    }
`;

const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Design() {
    return (
        <>
            <NavBar/>
            <NavContainer>
                <NavLink to="planit" smooth={true} duration={500}>Plan It</NavLink>
                <NavLink to="camelitics" smooth={true} duration={500}>Camelitics</NavLink>
                <NavLink to="onc" smooth={true} duration={500}>Our National Conversation</NavLink>
            </NavContainer>
            <Container>
                <Element name="planit">
                    <StyledDiv>
                        <Typography variant={"h1"} sx={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            margin: "0 auto",
                            px: 1
                        }}>
                            Projects
                        </Typography>
                        <StyledSub>Plan It</StyledSub>
                        <MainImage src={planit} alt="Plan It" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />
                        <GridContainer>
                            <SubImage src={timer} alt="Timer" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />
                            <SubImage src={journal} alt="Journal" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />
                        </GridContainer>
                        <MainImage src={task} alt="Task" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />

                    </StyledDiv>
                </Element>
                <Element name="camelitics">
                    <StyledDiv>
                        <StyledSub>Camelitics</StyledSub>
                        <MainImage src={camel} alt="Camelitics" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />
                        <GridContainer>
                            <SubImage src={header} alt="Header" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />
                            <SubImage src={data} alt="Data" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />
                            <SubImage src={about} alt="About" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />
                            <SubImage src={doc} alt="Doc" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />
                        </GridContainer>
                    </StyledDiv>
                </Element>
                <Element name="onc">
                    <StyledDiv>
                        <StyledSub>Our National Conversation - Modern Site</StyledSub>
                        <h1>add images here</h1>
                        {/*<MainImage src={onc} alt="Responsive forums page" objectFit="cover" initial="hidden" whileInView="visible" variants={imageVariants} />*/}
                    </StyledDiv>
                </Element>
            </Container>
            <Footer />
        </>
    );
}