"use client";

import Nav from '@/app/components/NavBar';
import Footer from "@/app/components/Footer";
import styled, { keyframes } from 'styled-components';
import { Container, Typography, Paper } from '@mui/material';
import { Work, School, CalendarToday, LocationOn } from '@mui/icons-material';
import Image from 'next/image';

const colors = {
    green: "#00843D",
    blue: "#003DA5",
    orange: "#ED8B00",
    lightGray: "#F8F9FA",
};

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const slideIn = keyframes`
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
`;

const PageContent = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    animation: ${fadeIn} 0.8s ease;
`;

const Title = styled(Typography)`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1rem 0 2rem;
    position: relative;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;
    text-align: center;

    &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        background-color: ${colors.green};
    }

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

const JobTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: #555;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
`;

const TechTag = styled.span`
    background-color: ${colors.lightGray};
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;
    border-left: 3px solid ${colors.blue};
    border-bottom: 1px solid ${colors.orange};
    border-top: 1px solid ${colors.orange};
    border-right: 3px solid ${colors.blue};
    display: flex;
    align-items: center;
    gap: 6px;
`;

// Fix for TypeScript error - add type to name parameter
const TechIcon = ({ name }: { name: string }) => {
    const iconPath = `/icons/${name.toLowerCase()}.svg`;

    return (
        <div style={{ width: 16, height: 16, position: 'relative' }}>
            <Image
                src={iconPath}
                alt={`${name} icon`}
                width={16}
                height={16}
                style={{ objectFit: 'contain' }}
            />
        </div>
    );
};

export default function ExperiencePage() {
    return (
        <>
            <Nav />
            <Container>
                <PageContent>
                    <Title>
                        Relevant Experience
                    </Title>

                    <ExpCard elevation={2}>
                        <CardHeader color={colors.blue}>
                            <JobTitle><Work fontSize="small" /> Front-End Developer | Blue Dev Digital</JobTitle>
                            <span>Fall 2024 - Present</span>
                        </CardHeader>
                        <CardBody>
                            <InfoItem>
                                <LocationOn fontSize="small" />
                                <span>Boston, MA</span>
                            </InfoItem>
                            <p>Led development of key features for the company's flagship application. Implemented robust solutions that improved user experience.</p>
                            <TechStack>
                                <TechTag><TechIcon name="react" />React</TechTag>
                                <TechTag><TechIcon name="ts" />NextJS</TechTag>
                                <TechTag><TechIcon name="mui" />TypeScript</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>

                    <ExpCard elevation={2}>
                        <CardHeader color={colors.blue}>
                            {/* Fixed closing tag issue */}
                            <JobTitle><Work fontSize="small" /> Software Developer Intern (React)</JobTitle>
                            <JobTitle><Work fontSize="small" />Our National Conversation</JobTitle>
                            <span>July 2024 - Present</span>
                        </CardHeader>
                        <CardBody>
                            <InfoItem>
                                <CalendarToday fontSize="small" />
                                <span>Previous Company</span>
                            </InfoItem>
                            <InfoItem>
                                <LocationOn fontSize="small" />
                                <span>Cambridge, MA</span>
                            </InfoItem>
                            <p>Developed responsive web applications with focus on performance optimization. Reduced page load times by 35%.</p>
                            <TechStack>
                                <TechTag><TechIcon name="jest" />JavaScript</TechTag>
                                <TechTag><TechIcon name="adobe" />React</TechTag>
                                <TechTag><TechIcon name="figma" />Redux</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>

                    <ExpCard elevation={2}>
                        <CardHeader color={colors.orange}>
                            <JobTitle><School fontSize="small" /> Computer Science, B.S.</JobTitle>
                            <span>2014 - 2018</span>
                        </CardHeader>
                        <CardBody>
                            <InfoItem>
                                <CalendarToday fontSize="small" />
                                <span>Boston University</span>
                            </InfoItem>
                            <InfoItem>
                                <LocationOn fontSize="small" />
                                <span>Boston, MA</span>
                            </InfoItem>
                            <p>Graduated with honors. Coursework included algorithms, data structures, and web development.</p>
                            <TechStack>
                                <TechTag><TechIcon name="js" />JS</TechTag>
                                <TechTag><TechIcon name="tw" />Tailwind CSS</TechTag>
                                <TechTag><TechIcon name="vite" />Vite+</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>
                </PageContent>
            </Container>
            <Footer />
        </>
    );
}