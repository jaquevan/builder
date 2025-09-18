"use client"

import { Container, Box, Grid } from "@mui/material";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import ProjectCard from "../components/Projects/ProjectCard";
import CaseStudies from "../components/Projects/CaseStudies";
import projects from "../components/Projects/projects";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 0 3rem 0;
    font-family: 'JetBrains Mono', monospace;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

export default function Projects() {
    return (
        <>

        <Box sx={{ minHeight: "100vh" }}>
            <NavBar />
            <CaseStudies/>
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Title> Frontend Projects </Title>


                <Grid className="fade-in"
                    container
                    spacing={8}
                    justifyContent="center"
                >
                    {projects.map((project) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={project.id}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '24px 32px'
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: 320,
                                    position: 'relative',
                                }}
                            >
                                <ProjectCard project={project} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </Box>

        </>
    );
}