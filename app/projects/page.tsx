"use client"

import { Container, Typography, Box, Grid } from "@mui/material";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import ProjectCard from "../components/Projects/ProjectCard";
import projects from "../components/Projects/projects";

export default function Projects() {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <NavBar />
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h3" component="h1" align="center"
                            sx={{
                                mb: 6,
                                fontWeight: 700,
                                borderBottom: "3px solid #4361ee",
                                pb: 2,
                                display: "inline-block",
                                mx: "auto"
                            }}>
                    Frontend Projects
                </Typography>

                <Grid
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
    );
}