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
    border-radius: 12px;
    animation: ${slideIn} 0.7s ease-out;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const CardHeader = styled.div`
    background: linear-gradient(135deg, ${(props) => props.color || colors.green} 0%, ${(props) => {
        const color = props.color || colors.green;
        // Darken the color slightly for gradient
        return color === colors.green ? '#006d31' :
               color === colors.orange ? '#d67500' :
               color === colors.blue ? '#002c7a' :
               color === colors.teal ? '#006666' : color;
    }} 100%);
    color: white;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 0.875rem 1.25rem;
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
    padding: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.7;
    font-size: 0.975rem;
    color: #333;

    ul {
        margin: 0.75rem 0;
        padding-left: 1.5rem;

        li {
            margin-bottom: 0.5rem;
            color: #444;
        }
    }

    p {
        margin: 0.75rem 0;
        color: #444;
    }

    @media (max-width: 600px) {
        padding: 1.25rem;
        font-size: 0.95rem;
    }
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: #666;
    font-size: 0.95rem;
`;

const Company = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
    color: #222;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid #f0f0f0;
`;

const TechTag = styled.span`
    background: #f5f5f5;
    color: #555;
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid #e0e0e0;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
        background-color: #ebebeb;
        border-color: #d0d0d0;
    }
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
                            <Company><Work/><span>Boston University Spark!</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Lead three cross-functional UX research and design teams (12+ members) through agile sprints, managing timelines, deliverables, and usability goals for civic and community-facing clients</li>
                                <li>Act as liaison between Spark! leadership, clients, and student designers, ensuring alignment across technical feasibility, user outcomes, and client expectations</li>
                                <li>Provide structured feedback on wireframes, prototypes, and user research while documenting sprint cadence and retrospectives to ensure design decisions evolve from user insights and team collaboration</li>
                            </ul>
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
                            <InfoItem><LocationOn fontSize="small" /><span>Chelsea, MA</span></InfoItem>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Designed and developed the organization&apos;s economic development platform, providing 3000+ community members with up-to-date access to programs and resources</li>
                                <li>Partnered with 10+ staff members across departments to gather insights on community needs, technology limitations, and budget considerations, translating findings into actionable platform requirements</li>
                                <li>Developed a Strapi-based CMS using Next.js, TypeScript, Tailwind, Figma, and Vercel empowering non-technical staff to independently maintain and update the organization&apos;s web platform</li>
                                <li>Created a two-month Digital Equity digital design curriculum in Canva, used in classes of 25+ community members</li>
                            </ul>
                            <TechStack>
                                <TechTag><TechIcon name="ts" />TypeScript</TechTag>
                                <TechTag><TechIcon name="next" />Next.js</TechTag>
                                <TechTag><TechIcon name="tw" />Tailwind</TechTag>
                                <TechTag><TechIcon name="figma" />Figma</TechTag>
                                <TechTag>Vercel</TechTag>
                                <TechTag>Strapi</TechTag>
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
                            <Company><Work/><span>Boston University Spark!</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Designed high-fidelity Figma prototypes and conducted user research for MAPLE Testimony and Boston Voter, two civic tech tools supporting community engagement and legislative transparency; work was selected by Spark! program directors for presentation at department showcase and to Massachusetts legislators</li>
                                <li>Conducted onboarding interviews with potential clients to understand project goals, technical capacity, and user needs, shaping how Spark! selects and collaborates with partner organizations</li>
                                <li>Lead client scoping and research for qualified leads, synthesizing findings into clear project proposals and UX research opportunities adopted into Spark!&apos;s active pipeline</li>
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
                            <JobTitle>Course Grader - CS411: Software Development Life Cycle</JobTitle>
                            <span>August 2025 - Present</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/><span>Boston University, College of Arts & Sciences</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Mentor 120+ students during weekly office hours on frontend technologies and UX design</li>
                                <li>Grade group projects with 3,000+ lines of code, providing actionable feedback on scalability, sprint planning, and system design</li>
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
                            <JobTitle>UI/UX Designer</JobTitle>
                            <span>May 2025 - Present</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/><span>Hack4Impact Boston University</span></Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Boston, MA</span></InfoItem>
                            <p>Redesigning the organization&apos;s website using Figma and Miro to improve navigation, accessibility, and visual consistency for 350+ club members</p>
                            <TechStack>
                                <TechTag><TechIcon name="figma" />Figma</TechTag>
                                <TechTag>Miro</TechTag>
                                <TechTag><TechIcon name="react" />React</TechTag>
                                <TechTag><TechIcon name="tw" />Tailwind CSS</TechTag>
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