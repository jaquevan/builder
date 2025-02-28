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
    position: relative; /* For the glow effect */

    &:hover {
        color: #ffaf82;
        background: linear-gradient(90deg, rgba(255, 175, 130, 0.2), rgba(255, 246, 0, 0.2));
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 15px;
    }

    &:hover::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(255, 175, 130, 0.5);
        z-index: -1;
    }

    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        padding: 0.3rem 0.5rem;
        font-size: 0.8rem;
    }
`;

const NavContainer = styled.nav`
    background-color: #333; 
    padding: 1.2rem 0; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap; 
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
                <li><StyledLink href="/status">Status</StyledLink></li>
            </NavList>
        </NavContainer>
    );
}