import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/app/components/Footer"

const StyledScroll = styled(ParallaxLayer) `
    display: block;
    width: 90vh;
    height: auto;
    background-color: black;
    color: white;
    font-family: Arial, "Times New Roman", sans-serif;
    
`

const StyledScrollSwitch = styled(ParallaxLayer)`
    background-color: white;
    color: black;
    font-family: Arial, "Times New Roman", sans-serif;
`

const StyledParallax = styled(Parallax)`
    margin: 0 auto;
    padding: 0;
    text-align: center;
`

export default function Scroll() {
    return (
        <div>
            <StyledParallax pages={4} >
                <StyledScroll speed={1}>
                    <h2>Top</h2>
                </StyledScroll>

                <StyledScrollSwitch offset={1} speed={1}>
                    <h2>page 2</h2>
                </StyledScrollSwitch>

                <StyledScroll offset={2} speed={1}>
                    <h2>page 3</h2>
                </StyledScroll>

                <StyledScrollSwitch offset={3} speed={1}>
                    <h2>Bottom and Footer</h2>
                    <Footer/>
                </StyledScrollSwitch>

            </StyledParallax>
        </div>
    )
}
