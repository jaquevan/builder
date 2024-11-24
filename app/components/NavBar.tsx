"use client"

import styled from "styled-components";
import Link from "next/link";



const StyledLink = styled(Link)`
    padding: 1rem 2rem;
    text-decoration: none;
    color: white; /* White text */
    font-family: "Arial", "Helvetica", sans-serif;
    font-size: 1.2rem; /* Increase font size */
    transition: color 0.3s, background-color 0.3s, text-shadow 0.3s; /* Smooth transitions */

    &:hover {
        color: #ffaf82;
        background: linear-gradient(90deg, rgba(255, 175, 130, 0.2), rgba(255, 246, 0, 0.2));
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);    
        border-radius: 15px;
    }
`;

const NavContainer = styled.nav`
    background-color: #333; /* Dark background */
    padding: 1.2rem 0; /* Add padding */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
`;

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export default function NavBar() {
    return (
        <NavContainer>
            <NavList>
                <li><StyledLink href="/">Home</StyledLink></li>
                <li><StyledLink href="/design">Design</StyledLink></li>
                <li><StyledLink href="/projects">Projects</StyledLink></li>
                <li><StyledLink href="/resume">Resume</StyledLink></li>
                <li><StyledLink href="/demo">Demo</StyledLink></li>

            </NavList>
        </NavContainer>
    );
}