"use client"

import Cube from "@/app/components/Cube";
import {Typography, Container} from "@mui/material";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
`

export default function Design() {
    return (
        <>
        <Container>
            <StyledDiv>
                <Typography variant={"h1"} sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "0 auto",
                    px: 1
                }}>
                    Loading...
                </Typography>
            </StyledDiv>

                <Typography variant={"caption"} sx={{
                    justifyContent: "center",
                    display: "flex",
                    pt: 3,
                    pb: 0
                }}>We Appreciate Your Patience</Typography>

                <Cube/>

        </Container>
        </>

    );
}
