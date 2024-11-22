// import styled from "styled-components";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";


export default function Scroll() {
    return (
        <div>
            <Parallax pages={4}>
                <ParallaxLayer>
                    <h2>page 1</h2>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                    <h2>page 2</h2>
                </ParallaxLayer>
                <ParallaxLayer offset={2}>
                    <h2>page 3</h2>
                </ParallaxLayer>
                <ParallaxLayer offset={3}>
                    <h2>page 4</h2>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}
