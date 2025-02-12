import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/app/components/Footer";
import Content from "@/app/components/Content";
import Experience from "./Experience";
import { Typography } from "@mui/material";

const StyledScroll = styled(ParallaxLayer)`
    display: block;
    width: 90vw;
    height: auto;
    background-color: black;
    color: white;
    font-family: Arial, "Times New Roman", sans-serif;
`;

// const ExperienceScroll = styled(ParallaxLayer)`
//     background-color: #444;
//     color: black;
//     font-family: Arial, "Times New Roman", sans-serif;
// `;

const StyledScrollSwitch = styled(ParallaxLayer)`
    background-color: #444;
    color: black;
    font-family: Arial, "Times New Roman", sans-serif;
`;

const StyledParallax = styled(Parallax)`
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: 100vw;
    height: auto;
    background-color: #333;
`;

const StyledBody = styled.div`
    background-color: black;
    overflow-x: hidden;
    width: 100%;
    margin: 0;
`;

const StyledText = styled(Typography)`
    margin-top: 2%;
`;

export default function Scroll() {
    return (
        <StyledBody>
            <StyledParallax pages={2}>
                <StyledScroll speed={1}>
                    <StyledText variant="h3"> <i>Welcome Aboard</i> </StyledText>
                    <Content />
                </StyledScroll>

                {/*<ExperienceScroll offset={0} speed={1}>*/}
                {/*    <Experience />*/}
                {/*</ExperienceScroll>*/}

                <StyledScrollSwitch offset={1} speed={1}>
                    <h2>Bottom and Footer</h2>
                    <Footer />
                </StyledScrollSwitch>
            </StyledParallax>
        </StyledBody>
    );
}