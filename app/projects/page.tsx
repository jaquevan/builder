"use client"


import {Typography, Container} from "@mui/material";
import styled from "styled-components";
import Mason from "@/app/components/Mason"

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
                        Projects
                    </Typography>
                </StyledDiv>

                <Mason/>


            </Container>
        </>

    );
}
