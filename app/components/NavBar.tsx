"use client"

import styled from "styled-components";
import Link from "next/link";


const StyledDiv = styled.div`
    text-align: center;
`

const StyledLink = styled(Link)`
    padding: 0 3%;
    list-style-type: none;
    text-decoration: none;
    color: black;
    border-bottom: 1px solid;
    font-family: Arial, Helvetica, sans-serif;
    
    
    &:hover {
        border-bottom: 1px solid black;
        background-color: #ffaf82;
    }
`

export default function NavBar() {

    return (
        <>
            <StyledDiv>
                <nav>
                    <ul>
                        <StyledLink href="/">Home</StyledLink>
                        <StyledLink href="/design">Design</StyledLink>
                        <StyledLink href="/projects">Projects</StyledLink>
                        <StyledLink href="/design">Resume</StyledLink>
                    </ul>
                </nav>
            </StyledDiv>
        </>
    )
};