"use client"
import styled from "styled-components";
import { Container } from "@mui/material";

const StyledFooter = styled.footer`
    text-align: center;
    background-color: #333;
    color: white;
    width: 100%;
    height: auto;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`;

const FooterSection = styled.div`
    flex: 1;
    margin: 1rem;
    min-width: 200px;
`;

const FooterTitle = styled.h4`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ff6600;
`;

const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Footer() {
    return (

        <StyledFooter>
            <FooterContent>
                <FooterSection>
                    <FooterTitle>Quick Navigation</FooterTitle>
                    <FooterLink href="#home">Home</FooterLink>
                    <FooterLink href="#projects">Projects</FooterLink>
                    <FooterLink href="#contact">Contact</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterTitle>Contact Me</FooterTitle>
                    <FooterLink href="https://www.linkedin.com/in/evan-jaquez-118b5b294/" target="_blank">LinkedIn</FooterLink>
                    <FooterLink href="https://github.com/jaquevan" target="_blank">Github</FooterLink>
                </FooterSection>
            </FooterContent>
            <p>&copy; 2024 Evan Jaquez. All rights reserved.</p>
        </StyledFooter>

    );
}