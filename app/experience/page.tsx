"use client";

import Nav from '@/app/components/NavBar';
import Footer from "@/app/components/Footer";
import styled, { keyframes } from 'styled-components';
import { Container, Paper } from '@mui/material';
import { Work, LocationOn, VolunteerActivism } from '@mui/icons-material';
import Image from 'next/image';

const colors = {
    green: "#00843D",
    blue: "#003DA5",
    red: "#DA291C",
    orange: "#ED8B00",
    purple: "#8A2BE2",
    teal: "#008080",
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

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1rem 0;
    font-family: 'JetBrains Mono', monospace;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

const SectionTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    margin: 2rem 0 1rem;
    font-family: 'JetBrains Mono', monospace;
    text-align: center;
    width: 100%;
    max-width: 700px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${colors.blue}, transparent);
    }

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

//card styles
const ExpCard = styled(Paper)`
    width: 100%;
    max-width: 700px;
    margin: 1.5rem auto;
    border-radius: 0.75rem;
    animation: ${slideIn} 0.7s ease-out;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const CardHeader = styled.div`
    background-color: ${(props) => props.color || colors.green};
    color: white;
    padding: 0.75rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

const JobTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const CardBody = styled.div`
    padding: 1.25rem;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    font-size: 1rem;

    @media (max-width: 600px) {
        padding: 1rem;
    }
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: #555;
`;

const Company = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
`;

const TechTag = styled.span`
    background-color: lightslategrey;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-family: 'JetBrains Mono', monospace;
    display: flex;
    align-items: center;
    gap: 6px;
`;

// icons
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
                    <Title>Relevant Experience</Title>

                    {/* BU Spark UX PM */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.green}>
                            <JobTitle>UX Design Project Manager</JobTitle>
                            <span>September 2025 - Present</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/><span>BU Spark!</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <p>Lead student teams focused on UX research and design, serve as the primary liaison between clients and BU leadership, and drive agile project delivery through regular client meetings and team check-ins.</p>
                            <TechStack>
                                <TechTag><TechIcon name="figma" />Figma</TechTag>
                                <TechTag><TechIcon name="slack" />Slack</TechTag>
                                <TechTag>Notion</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>

                    {/* La Colaborativa */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.orange}>
                            <JobTitle>UI/UX Design and Web Development Intern</JobTitle>
                            <span>May 2025 - August 2025</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/><span>La Colaborativa</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Designed and developed UI/UX for the organization&apos;s primary website, ensuring community members have up-to-date access to program information and resources.</li>
                                <li>Created a 2-month Digital Equity Curriculum focused on Canva, empowering local community members with essential digital and design skills.</li>
                                <li>Developed a dedicated webpage to highlight and support the work of 12 participants in the organization&apos;s culinary entrepreneurship program.</li>
                                <li>Worked closely with the Economic Stability and Mobility Department, receiving regular supervision and feedback from leadership to drive impactful results.</li>
                            </ul>
                            <TechStack>
                                <TechTag><TechIcon name="ts" />Typescript</TechTag>
                                <TechTag><TechIcon name="next" />Next.js</TechTag>
                                <TechTag><TechIcon name="figma" />Figma</TechTag>
                                <TechTag>Canva</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>

                    {/* BU Spark UX Intern */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.green}>
                            <JobTitle>UX Intern - Special Initiatives</JobTitle>
                            <span>January 2025 - Present</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/><span>BU Spark!</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Support project scoping for civic tech initiatives by conducting UX research, client engagement, and preparing technical deliverables for future development.</li>
                                <li>Create user personas, conduct stakeholder interviews, and map user journeys to improve product accessibility and engagement.</li>
                                <li>Develop high-fidelity prototypes in Figma, collaborating in hybrid teams to iterate on designs.</li>
                                <li>Delivered design work that was recognized as a representative UX project within the department.</li>
                            </ul>
                            <TechStack>
                                <TechTag><TechIcon name="figma" />Figma</TechTag>
                                <TechTag><TechIcon name="mui" />Material UI</TechTag>
                                <TechTag><TechIcon name="slack" />Slack</TechTag>
                                <TechTag><TechIcon name="react" />React</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>

                    {/* Blue Dev Digital */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.blue}>
                            <JobTitle>Front-End Developer & UX Researcher</JobTitle>
                            <span>Aug 2024 - Present</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/><span>Blue Dev Digital</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <p>Conducted user research and interviews to guide UX/UI decisions. Developed web applications with React, Next.js, Styled Components, and Tailwind CSS, ensuring responsiveness and branding consistency.</p>
                            <TechStack>
                                <TechTag><TechIcon name="react" />React</TechTag>
                                <TechTag><TechIcon name="vite" />Vite</TechTag>
                                <TechTag><TechIcon name="next" />Next.js</TechTag>
                                <TechTag><TechIcon name="mdb" />MongoDB</TechTag>
                                <TechTag><TechIcon name="figma" />Figma</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>

                    <SectionTitle>Volunteer & Other</SectionTitle>

                    {/* Course Grader */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.teal}>
                            <JobTitle><VolunteerActivism fontSize="small" /> Course Grader - CS411</JobTitle>
                            <span>May 2025 - September 2025</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/><span>BU College of Arts and Sciences</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Hold weekly Office Hours in which I serve as the UX mentor, guiding students on frontend technologies and best practices for large-scale software engineering projects.</li>
                                <li>Evaluate and provide feedback on complex group projects, including applications with thousands of lines of code.</li>
                            </ul>
                            <TechStack>
                                <TechTag><TechIcon name="react" />React</TechTag>
                                <TechTag><TechIcon name="js" />JavaScript</TechTag>
                                <TechTag><TechIcon name="ts" />TypeScript</TechTag>
                                <TechTag>HTML</TechTag>
                                <TechTag>CSS</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>

                    {/* Hack4impact */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.teal}>
                            <JobTitle><VolunteerActivism fontSize="small" /> UI/UX Designer</JobTitle>
                            <span>May 2025 - September 2025</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/><span>Hack4impact BU</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Created wireframes, user flows, and high-fidelity prototypes in Figma, iterating designs based on feedback from stakeholders and end users.</li>
                                <li>Contributed to the redesign of Hack4impact&apos;s organizational website, improving usability and visual consistency.</li>
                            </ul>
                            <TechStack>
                                <TechTag><TechIcon name="figma" />Figma</TechTag>
                                <TechTag><TechIcon name="react" />React</TechTag>
                                <TechTag><TechIcon name="tw" />Tailwind CSS</TechTag>
                                <TechTag>Notion</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>

                    {/* Our National Conversation */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.teal}>
                            <JobTitle>Software Engineer Intern</JobTitle>
                            <span>July 2024 - May 2025</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/> Our National Conversation</Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Remote, USA</span></InfoItem>
                            <p>Worked on front-end features to improve user engagement and accessibility on new sites. Implemented front-end interfaces and integrated back-end logic using React and Python.</p>
                            <TechStack>
                                <TechTag><TechIcon name="react" />React</TechTag>
                                <TechTag><TechIcon name="vite" />Vite</TechTag>
                                <TechTag><TechIcon name="jest" />Jest</TechTag>
                                <TechTag><TechIcon name="tw" />Tailwind CSS</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>
                </PageContent>
            </Container>
            <Footer />
        </>
    );
}