"use client"

import { useState, FormEvent } from 'react';
import Nav from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { Container, Tooltip, FormControlLabel, Checkbox } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import {
    StyledDiv,
    Title,
    TextInput,
    InputDiv,
    SendButton,
    Selections,
    Label,
    MessageInput,
    ContentWrapper,
    LeftSection,
    RightSection,
    SocialButton,
    SocialButtons,
    IconWrapper,
    ButtonText,

} from './Contact.styles';

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
            <Container>
                <ContentWrapper>
                    <LeftSection>
                        <Title variant="h1">Contact Me</Title>
                        <SocialButtons>
                            <Tooltip title="View GitHub Profile" arrow>
                                <SocialButton
                                    href="https://github.com/jaquevan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    $gradient="linear-gradient(135deg, #24292e, #4a4a4a)"
                                >
                                    <IconWrapper>
                                        <GitHubIcon />
                                    </IconWrapper>
                                    <ButtonText>GitHub</ButtonText>
                                </SocialButton>
                            </Tooltip>
                            <Tooltip title="View LinkedIn Profile" arrow>
                                <SocialButton
                                    href="https://linkedin.com/in/evan-jaquez"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    $gradient="linear-gradient(135deg, #0077b5, #00a0dc)"
                                >
                                    <IconWrapper>
                                        <LinkedInIcon />
                                    </IconWrapper>
                                    <ButtonText>LinkedIn</ButtonText>
                                </SocialButton>
                            </Tooltip>
                        </SocialButtons>
                    </LeftSection>
                    <Container>
                        <RightSection>
                            <StyledDiv>
                                <form onSubmit={handleSubmit}>
                                    <InputDiv>
                                        <div>
                                            <Label>Name</Label>
                                            <TextInput
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label>Email</Label>
                                            <TextInput
                                                type="email"
                                                placeholder="your.email@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label>Subject</Label>
                                            <TextInput
                                                placeholder="What's this about?"
                                                value={formData.subject}
                                                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                                required
                                            />
                                        </div>
                                        <div>
                                        <Label>Areas of Interest</Label>
                                        <Selections>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={formData.interests.frontend}
                                                    onChange={(e) => setFormData(prev => ({
                                                        ...prev,
                                                        interests: { ...prev.interests, frontend: e.target.checked }
                                                    }))}
                                                />}
                                                label="Frontend Development"
                                            />

                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={formData.interests.uiux}
                                                    onChange={(e) => setFormData(prev => ({
                                                        ...prev,
                                                        interests: { ...prev.interests, uiux: e.target.checked }
                                                    }))}
                                                />}
                                                label="UX/UI"
                                            />


                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={formData.interests.projects}
                                                    onChange={(e) => setFormData(prev => ({
                                                        ...prev,
                                                        interests: { ...prev.interests, projects: e.target.checked }
                                                    }))}
                                                />}
                                                label="Project Collaboration"
                                            />

                                            <FormControlLabel
                                                control={<Checkbox
                                                    checked={formData.interests.chat}
                                                    onChange={(e) => setFormData(prev => ({
                                                        ...prev,
                                                        interests: { ...prev.interests, chat: e.target.checked }
                                                    }))}
                                                />}
                                                label="General Inquiry"
                                            />

                                        </Selections>
                                        </div>
                                        <div>
                                            <Label>Message</Label>
                                            <MessageInput
                                                placeholder="Your message here..."
                                                value={formData.message}
                                                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                                required
                                            />
                                        </div>
                                        <Tooltip title="Send via Gmail">
                                            <SendButton type="submit" aria-label="Open in Gmail">
                                                Send Message
                                            </SendButton>
                                        </Tooltip>
                                    </InputDiv>
                                </form>
                            </StyledDiv>
                        </RightSection>
                    </Container>

                </ContentWrapper>
            </Container>
            <Footer />
        </>
    );
}