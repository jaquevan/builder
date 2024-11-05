"use client"
import styled from "styled-components";

export default function Footer(){

    const StyledFooter = styled.footer`
    text-align: center;
        background-color: black;
        color: white;
        padding: 1%;
`
    return(
        <>
        <StyledFooter>
            All rights Reserved. Evan Jaquez
        </StyledFooter>
        </>
    )
}