import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/app/components/Footer";
import Content from "@/app/components/Content";
import { Typography } from "@mui/material";

const StyledScroll = styled(ParallaxLayer)`
    display: block;
    width: 90vw;
    height: auto;
    background-color: black;
    color: white;
    font-family: Arial, "Times New Roman", sans-serif;
`;

const StyledParallax = styled(Parallax)`
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: 100vw;
    height: 10vw;
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
            <StyledParallax pages={1}>
                <StyledScroll speed={4}>
                    <StyledText variant="h3"><i>Welcome Aboard</i></StyledText>
                    <Content />
                </StyledScroll>
            </StyledParallax>
        </StyledBody>
    );
}