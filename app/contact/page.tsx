"use client"

import { useState, FormEvent } from 'react';
import Nav from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { Container, Tooltip, FormControlLabel, Checkbox, Paper, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        interests: {
            uiux: false,
            frontend: false,
            chat: false,
            projects: false
        }
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const interests = Object.entries(formData.interests)
            .filter(([, checked]) => checked)
            .map(([key]) => key)
            .join(', ');

        const mailtoLink = `mailto:jaquevan@bu.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Interests: ${interests}\n\n` +
            `Message:\n${formData.message}`
        )}`;

        window.open(mailtoLink, '_blank');
    };

    return (
        <>
            <Nav />
            <Container maxWidth="md" sx={{ py: 6 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        align="center"
                        sx={{
                            mb: 5,
                            fontWeight: 700,
                            color: "#3a46a7",
                            fontSize: { xs: '2.5rem', md: '3.5rem' }
                        }}
                    >
                        Lets Connect
                    </Typography>

                    <Paper
                        elevation={0}
                        sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            border: '1px solid #f0f0f0',
                            boxShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                            {/* Left Section */}
                            <Box
                                sx={{
                                    p: 4,
                                    width: { xs: '100%', md: '35%' },
                                    background: 'linear-gradient(135deg, #4361ee 0%, #3a46a7 100%)',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                                    Contact Information
                                </Typography>

                                <Typography sx={{ mb: 4, opacity: 0.9, lineHeight: 1.7 }}>
                                    Have a question or want to work together? Feel free to reach out.
                                </Typography>

                                <Box sx={{ mt: 'auto' }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                        Connect with me
                                    </Typography>

                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Tooltip title="GitHub">
                                            <motion.a
                                                href="https://github.com/jaquevan"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 42,
                                                    height: 42,
                                                    borderRadius: '50%',
                                                    background: 'rgba(255,255,255,0.15)',
                                                    color: 'white',
                                                    textDecoration: 'none'
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    background: 'rgba(255,255,255,0.25)'
                                                }}
                                            >
                                                <GitHubIcon />
                                            </motion.a>
                                        </Tooltip>

                                        <Tooltip title="LinkedIn">
                                            <motion.a
                                                href="https://linkedin.com/in/evan-jaquez"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 42,
                                                    height: 42,
                                                    borderRadius: '50%',
                                                    background: 'rgba(255,255,255,0.15)',
                                                    color: 'white',
                                                    textDecoration: 'none'
                                                }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    background: 'rgba(255,255,255,0.25)'
                                                }}
                                            >
                                                <LinkedInIcon />
                                            </motion.a>
                                        </Tooltip>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Right Section - Form */}
                            <Box sx={{ p: 4, width: { xs: '100%', md: '65%' } }}>
                                <form onSubmit={handleSubmit}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    component="label"
                                                    sx={{
                                                        display: 'block',
                                                        mb: 1,
                                                        fontWeight: 500,
                                                        color: '#374151'
                                                    }}
                                                >
                                                    Name
                                                </Typography>
                                                <input
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '0.75rem 1rem',
                                                        borderRadius: '8px',
                                                        border: '1px solid #e5e7eb',
                                                        fontSize: '1rem',
                                                        fontFamily: 'inherit'
                                                    }}
                                                />
                                            </Box>

                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    component="label"
                                                    sx={{
                                                        display: 'block',
                                                        mb: 1,
                                                        fontWeight: 500,
                                                        color: '#374151'
                                                    }}
                                                >
                                                    Email
                                                </Typography>
                                                <input
                                                    type="email"
                                                    placeholder="your.email@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '0.75rem 1rem',
                                                        borderRadius: '8px',
                                                        border: '1px solid #e5e7eb',
                                                        fontSize: '1rem',
                                                        fontFamily: 'inherit'
                                                    }}
                                                />
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Typography
                                                component="label"
                                                sx={{
                                                    display: 'block',
                                                    mb: 1,
                                                    fontWeight: 500,
                                                    color: '#374151'
                                                }}
                                            >
                                                Subject
                                            </Typography>
                                            <input
                                                placeholder="What's this about?"
                                                value={formData.subject}
                                                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem 1rem',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e5e7eb',
                                                    fontSize: '1rem',
                                                    fontFamily: 'inherit'
                                                }}
                                            />
                                        </Box>

                                        <Box>
                                            <Typography
                                                component="label"
                                                sx={{
                                                    display: 'block',
                                                    mb: 1,
                                                    fontWeight: 500,
                                                    color: '#374151'
                                                }}
                                            >
                                                Areas of Interest
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: 1,
                                                    p: 2,
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '8px'
                                                }}
                                            >
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={formData.interests.frontend}
                                                            onChange={(e) => setFormData(prev => ({
                                                                ...prev,
                                                                interests: { ...prev.interests, frontend: e.target.checked }
                                                            }))}
                                                            sx={{ color: '#4361ee' }}
                                                        />
                                                    }
                                                    label="Frontend Development"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={formData.interests.uiux}
                                                            onChange={(e) => setFormData(prev => ({
                                                                ...prev,
                                                                interests: { ...prev.interests, uiux: e.target.checked }
                                                            }))}
                                                            sx={{ color: '#4361ee' }}
                                                        />
                                                    }
                                                    label="UX/UI"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={formData.interests.projects}
                                                            onChange={(e) => setFormData(prev => ({
                                                                ...prev,
                                                                interests: { ...prev.interests, projects: e.target.checked }
                                                            }))}
                                                            sx={{ color: '#4361ee' }}
                                                        />
                                                    }
                                                    label="Project Collaboration"
                                                />
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={formData.interests.chat}
                                                            onChange={(e) => setFormData(prev => ({
                                                                ...prev,
                                                                interests: { ...prev.interests, chat: e.target.checked }
                                                            }))}
                                                            sx={{ color: '#4361ee' }}
                                                        />
                                                    }
                                                    label="General Inquiry"
                                                />
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Typography
                                                component="label"
                                                sx={{
                                                    display: 'block',
                                                    mb: 1,
                                                    fontWeight: 500,
                                                    color: '#374151'
                                                }}
                                            >
                                                Message
                                            </Typography>
                                            <textarea
                                                placeholder="Your message here..."
                                                value={formData.message}
                                                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem 1rem',
                                                    borderRadius: '8px',
                                                    border: '1px solid #e5e7eb',
                                                    minHeight: '150px',
                                                    resize: 'vertical',
                                                    fontSize: '1rem',
                                                    fontFamily: 'inherit'
                                                }}
                                            />
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <motion.button
                                                type="submit"
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                    padding: '0.75rem 1.5rem',
                                                    backgroundColor: '#4361ee',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Send Message
                                                <SendIcon fontSize="small" />
                                            </motion.button>
                                        </Box>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>
            </Container>
            <Footer />
        </>
    );
}