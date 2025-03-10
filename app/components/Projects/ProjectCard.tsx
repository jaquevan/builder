"use client"

import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import SchoolIcon from '@mui/icons-material/School';
import Image from "next/image";

export interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    learnings: string;
    github: string | null;
    liveLink: string | null;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [showLearnings, setShowLearnings] = useState(false);

    const toggleLearnings = () => {
        setShowLearnings(!showLearnings);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: 380,
                position: "relative",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    borderRadius: 3,
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.5)"
                },
            }}
        >
            {/* Main card */}
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 3,
                    bgcolor: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    transition: "opacity 0.3s ease",
                    opacity: showLearnings ? 0 : 1,
                    zIndex: showLearnings ? 0 : 1,
                }}
            >
                <Box
                    sx={{
                        height: 180,
                        position: "relative",
                        mb: 2,
                        backgroundColor: project.image ? "transparent" : "#4361ee",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover", borderRadius: 8 }}
                        />
                    ) : (
                        <Typography variant="h6" sx={{ color: "white" }}>Coming Soon</Typography>
                    )}
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 600, color: "#4361ee", mb: 1 }}>
                    {project.title}
                </Typography>

                <Typography variant="body2" sx={{ color: "#555", mb: 2, flexGrow: 1 }}>
                    {project.description}
                </Typography>

                <Box sx={{ mt: "auto", display: "flex", alignItems: "center" }}>
                    {project.github && (
                        <Button
                            size="small"
                            startIcon={<GitHubIcon />}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ mr: 1, color: "#333" }}
                        >
                            Repo
                        </Button>
                    )}

                    {project.liveLink && (
                        <Button
                            size="small"
                            startIcon={<LaunchIcon />}
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ mr: 1, color: "#4361ee" }}
                        >
                            Live
                        </Button>
                    )}

                    <Button
                        size="small"
                        endIcon={<SchoolIcon />}
                        sx={{ ml: "auto", color: "#4361ee" }}
                        onClick={toggleLearnings}
                    >
                        More
                    </Button>
                </Box>
            </Box>

            {/* Learnings card */}
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: 3,
                    bgcolor: "#4361ee",
                    color: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    opacity: showLearnings ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    zIndex: showLearnings ? 1 : 0,
                }}
                onClick={toggleLearnings}
            >
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    What I Learned
                </Typography>

                <Typography variant="body1" sx={{ mb: 3 }}>
                    {project.learnings}
                </Typography>

                <Typography variant="body2" sx={{ mt: "auto", textAlign: "center", opacity: 0.8 }}>
                    (Click anywhere to go back)
                </Typography>
            </Box>
        </Box>
    );
}