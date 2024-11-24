import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/app/components/Footer";
import Content from "@/app/components/Content";
import { Typography } from "@mui/material";

const StyledScroll = styled(ParallaxLayer)`
    display: block;
    width: 90vw; /* Changed from vh to vw */
    height: auto;
    background-color: black;
    color: white;
    font-family: Arial, "Times New Roman", sans-serif;
`;

const StyledScrollSwitch = styled(ParallaxLayer)`
    background-color: white;
    color: black;
    font-family: Arial, "Times New Roman", sans-serif;
`;

const StyledParallax = styled(Parallax)`
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: 100vw; /* Ensure it takes full viewport width */
    background-color: #333;
`;

const StyledBody = styled.div`
    background-color: black;
    overflow-x: hidden; /* Prevent horizontal overflow */
    width: 100%; /* Ensure it takes full width */
    margin: 0; /* Remove any default margin */
`;

const StyledText = styled(Typography)`
    margin-top: 2%;
`;

export default function Scroll() {
    return (
        <StyledBody>
            <StyledParallax pages={4}>
                <StyledScroll speed={1}>
                    <StyledText variant="h3"> <i>Welcome Aboard</i> </StyledText>
                    <Content />
                </StyledScroll>

                <StyledScrollSwitch offset={1} speed={1}>
                    <h2>Design Content</h2>
                </StyledScrollSwitch>

                <StyledScroll offset={2} speed={1}>
                    <h2>Interests and Motivation</h2>
                </StyledScroll>

                <StyledScrollSwitch offset={3} speed={1}>
                    <h2>Bottom and Footer</h2>
                    <Footer />
                </StyledScrollSwitch>
            </StyledParallax>
        </StyledBody>
    );
}