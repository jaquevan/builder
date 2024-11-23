"use client"
import styled from "styled-components";
import {Typography} from "@mui/material";
const StyledText = styled(Typography)`
    color: blue;
    font-size: 5rem;
    text-align: center;
`

export default function Resume(){
    return(
        <StyledText variant="h1">Resume</StyledText>
    )
}