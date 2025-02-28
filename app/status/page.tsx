"use client"

import React from "react";
import styled from "styled-components";
import { Typography, Card, CardContent, Box, Avatar } from "@mui/material";
import Nav from "@/app/components/NavBar";

const Container = styled.div`
    background-color: #f0f0f0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section = styled.div`
    width: 80%;
    margin-bottom: 2rem;
`;

const SectionTitle = styled(Typography)`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

const StyledCard = styled(Card)`
    margin-bottom: 1rem;
    background-color: #fff;
`;

const OnlineStatus = styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-size: 1rem;
    color: green;
`;

const StatusLight = styled(Avatar)`
    width: 1rem;
    height: 1rem;
    background-color: green;
    margin-right: 0.5rem;
`;

export default function Status() {
    return (
        <>
            <Nav />

        <Container>

            <Section>
                <SectionTitle variant="h4">Currently Learning</SectionTitle>
                <StyledCard>
                    <CardContent>
                        <Typography variant="body1">React</Typography>
                        <Typography variant="body1">TypeScript</Typography>
                        <Typography variant="body1">GraphQL</Typography>
                    </CardContent>
                </StyledCard>
            </Section>

            <Section>
                <SectionTitle variant="h4">Current Coursework</SectionTitle>
                <StyledCard>
                    <CardContent>
                        <Typography variant="body1">DS488: UX Design Practicum</Typography>
                    </CardContent>
                </StyledCard>
            </Section>

            <Section>
                <SectionTitle variant="h4">Online Status</SectionTitle>
                <OnlineStatus>
                    <StatusLight />
                    <Typography variant="body1">Online</Typography>
                </OnlineStatus>
            </Section>

            <Section>
                <SectionTitle variant="h4">Projects </SectionTitle>
                <StyledCard>
                    <CardContent>
                        <Typography variant="body1">Open Source Contributions</Typography>
                    </CardContent>
                </StyledCard>
            </Section>
        </Container>
        </>
    );
}