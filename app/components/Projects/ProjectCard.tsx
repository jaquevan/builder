"use client"

import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -8 }}
            style={{ width: "100%", height: "380px", position: "relative" }}
        >
            <AnimatePresence mode="wait">
                {!showLearnings ? (
                    <motion.div
                        key="front"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ width: "100%", height: "100%" }}
                    >
                        {/* Main card */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                borderRadius: "16px",
                                bgcolor: "white",
                                boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                                p: 3,
                                display: "flex",
                                flexDirection: "column",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    height: 200,
                                    position: "relative",
                                    mb: 2.5,
                                    backgroundColor: project.image ? "transparent" : "#7895ff",
                                    borderRadius: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: "hidden",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background: "linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,0.25) 100%)",
                                        zIndex: 1
                                    }
                                }}
                            >
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: 8,
                                        }}
                                        className="project-image"
                                    />
                                ) : (
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "white",
                                            fontWeight: 500,
                                            textShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        Coming Soon
                                    </Typography>
                                )}
                            </Box>

                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: "#3a46a7",
                                    mb: 1,
                                    fontSize: "1.35rem",
                                    letterSpacing: "-0.01em"
                                }}
                            >
                                {project.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#555",
                                    mb: 2,
                                    flexGrow: 1,
                                    lineHeight: 1.6,
                                    fontSize: "0.9rem",
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical"
                                }}
                            >
                                {project.description}
                            </Typography>

                            <Box sx={{
                                mt: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderTop: "1px solid #f0f0f0",
                                pt: 2
                            }}>
                                <Box>
                                    {project.github && (
                                        <Button
                                            size="small"
                                            startIcon={<GitHubIcon />}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                mr: 1,
                                                color: "#333",
                                                borderRadius: "8px",
                                                textTransform: "none",
                                                fontWeight: 500,
                                                "&:hover": {
                                                    backgroundColor: "rgba(0,0,0,0.04)"
                                                }
                                            }}
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
                                            sx={{
                                                mr: 1,
                                                color: "#4361ee",
                                                borderRadius: "8px",
                                                textTransform: "none",
                                                fontWeight: 500,
                                                "&:hover": {
                                                    backgroundColor: "rgba(67, 97, 238, 0.04)"
                                                }
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                </Box>

                                <Button
                                    variant="text"
                                    size="small"
                                    sx={{
                                        color: "#3a46a7",
                                        borderRadius: "8px",
                                        textTransform: "none",
                                        fontWeight: 500,
                                        border: "1px solid rgba(58, 70, 167, 0.15)",
                                        px: 2,
                                        "&:hover": {
                                            backgroundColor: "rgba(67, 97, 238, 0.08)"
                                        }
                                    }}
                                    onClick={toggleLearnings}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ width: "100%", height: "100%" }}
                    >
                        {/* Learnings card */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                borderRadius: "16px",
                                background: "linear-gradient(135deg, #4361ee 0%, #3a46a7 100%)",
                                color: "white",
                                boxShadow: "rgba(67, 97, 238, 0.3) 0px 10px 30px",
                                p: 3,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 2.5,
                                    fontWeight: 700,
                                    position: "relative",
                                    display: "inline-block",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: -8,
                                        left: 0,
                                        width: "40px",
                                        height: "3px",
                                        backgroundColor: "rgba(255,255,255,0.6)",
                                        borderRadius: "2px"
                                    }
                                }}
                            >
                                What I Learned
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    lineHeight: 1.7,
                                    fontSize: "0.95rem",
                                    opacity: 0.9,
                                    flexGrow: 1,
                                    overflow: "auto"
                                }}
                            >
                                {project.learnings}
                            </Typography>

                            <Button
                                variant="text"
                                size="small"
                                sx={{
                                    mt: "auto",
                                    color: "white",
                                    opacity: 0.7,
                                    alignSelf: "flex-start",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    py: 0.5,
                                    px: 2,
                                    "&:hover": {
                                        backgroundColor: "rgba(255,255,255,0.1)",
                                        opacity: 1
                                    }
                                }}
                                onClick={toggleLearnings}
                            >
                                Back to project
                            </Button>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .project-image {
                    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                }
                
                .project-image:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </motion.div>
    );
}