"use client"
import styled from "styled-components";
import {Typography} from "@mui/material"


const StyledFooter = styled.footer`
    text-align: center;
    background-color: #333;
    color: white;
    width: 66.6%;
    height: 100%;
    
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 5%;
    font-family: Arial, sans-serif;
`;

const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    width: 50%;
    height: 25vh;
    margin: 1rem 0;
`;

const FooterTitle = styled.h4`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
    color: #ff6600;
    width: 50%;
`;

const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;
    width: 50%;

    &:hover {
        text-decoration: underline;
        color: darkorange;
        
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);

`

const Copyright = styled.p `
    text-align: center;
    background-color: #333;
    color: white;
    margin: 0;
`

const LogoDiv = styled.div `
    width: 33.3%;
    background-color: #333;
    color: white;
    text-align: left;
    
`


export default function Footer() {
    return (
        <>
        <StyledDiv>
            <StyledFooter>
                <FooterContent>
                    <FooterSection>
                        <FooterTitle>Breadcrumbs</FooterTitle>
                        <FooterLink href="/">Home</FooterLink>
                        <FooterLink href="/projects">Projects</FooterLink>
                        <FooterLink href="/demo">Contact</FooterLink>
                        <FooterLink href="/design">Design</FooterLink>
                    </FooterSection>
                    <FooterSection>
                        <FooterTitle>Contact Me</FooterTitle>
                        <FooterLink href="https://www.linkedin.com/in/evan-jaquez-118b5b294/"
                                    target="_blank">LinkedIn</FooterLink>
                        <FooterLink href="https://github.com/jaquevan" target="_blank">Github</FooterLink>
                    </FooterSection>
                </FooterContent>
            </StyledFooter>
            <LogoDiv>
                <Typography variant="h3"> Builder Co</Typography>
            </LogoDiv>
        </StyledDiv>
    <Copyright>&copy; 2024 Evan Jaquez. All rights reserved.</Copyright>

        </>

)
    ;
}