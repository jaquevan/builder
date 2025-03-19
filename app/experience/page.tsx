"use client";
import Nav from '@/app/components/NavBar';
import Footer from "@/app/components/Footer";
import styled, { keyframes } from 'styled-components';
import { Container, Typography, Paper } from '@mui/material';
import { Work, School, LocationOn } from '@mui/icons-material';
import Image from 'next/image';

const colors = {
    green: "#00843D",
    blue: "#003DA5",
    red: "#DA291C",
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
    margin-bottom: 2rem;
    font-family: 'JetBrains Mono', monospace;
    text-align: center;


    @media (max-width: 600px) {
        font-size: 2rem;
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
const TechIcon = ({ name }) => {
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

                    {/* Our National Conversation */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.green}>
                            <JobTitle> Software Engineer Intern </JobTitle>
                            <span>July 2024 - Present</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/> Our National Conversation</Company>
                            <InfoItem><LocationOn fontSize="small" /><span>Remote, USA</span></InfoItem>
                            <p>Developed and optimized React-based front-end components, improving accessibility and user engagement. Worked closley with the design team to implement Figma designs.</p>
                            <TechStack>
                                <TechTag><TechIcon name="react" />React</TechTag>
                                <TechTag><TechIcon name="vite" />Vite</TechTag>
                                <TechTag><TechIcon name="jest" />Jest</TechTag>
                                <TechTag><TechIcon name="tw" />Tailwind CSS</TechTag>
                                <TechTag><TechIcon name="slack" />Slack</TechTag>


                            </TechStack>
                        </CardBody>
                    </ExpCard>


                    {/* Spark */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.orange}>
                            <JobTitle> UX Designer & Researcher</JobTitle>
                            <span>Jan 2023 - May 2026</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/> BU Spark! </Company>
                            <InfoItem><LocationOn fontSize="small"/><span>Boston, MA</span></InfoItem>

                            <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Client Projects:</Typography>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li><strong>Maple 3.0</strong> - Site to increase accesibility to bills and view/submit testimonies to the Massachusetts Legislature about the bills that will shape the future of Bostons community.</li>
                                <li><strong>Boston Voter App </strong>- City of Boston voter information app for BIPOC communities</li>
                            </ul>

                            <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '1rem' }}>Responsibilities:</Typography>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.25rem' }}>
                                <li>Conducted user research, interviews, and usability testing with real clients in Boston.</li>
                                <li>Presented in weekly client and team meetings to align project goals with business needs.</li>
                                <li>Created wireframes, prototypes, and high-fidelity designs in Figma for implementation.</li>
                                <li>Collaborated with the Software Engineering team to integrate designs into the final product.</li>
                            </ul>

                            <TechStack>
                                <TechTag><TechIcon name="figma" />Figma</TechTag>
                                <TechTag><TechIcon name="mui" />Material UI</TechTag>
                                <TechTag><TechIcon name="slack" />Slack</TechTag>
                                <TechTag><TechIcon name="react" />React</TechTag>
                            </TechStack>
                        </CardBody>
                    </ExpCard>


                    {/* Boston University */}
                    <ExpCard elevation={2}>
                        <CardHeader color={colors.red}>
                            <JobTitle><School fontSize="small" /> Boston University</JobTitle>
                            <span>Jan 2023 - May 2026</span>
                        </CardHeader>
                        <CardBody>
                            <Company><Work/> B.A. in Computer Science & Economics </Company>
                            <p>Minor in Data Science</p>
                            <InfoItem><LocationOn fontSize="small"/><span>Boston, MA</span></InfoItem>

                            <ul>
                                <li>Web & App Development</li>
                                <li>UX/UI Design Practicum</li>
                                <li>Software Engineering</li>
                                <li>Software Engineering Career Prep</li>
                                <li>Data Structures & Algorithms</li>
                                <li>Data Science & AI Ethics</li>
                            </ul>
                            <TechStack>
                                <TechTag><TechIcon name="js" />Javascript</TechTag>
                                <TechTag><TechIcon name="ts" />Typescript</TechTag>
                                <TechTag><TechIcon name="three" />Three.js</TechTag>
                                <TechTag><TechIcon name="docker" />Docker</TechTag>
                                <TechTag><TechIcon name="ubuntu" />Ubuntu</TechTag>
                            </TechStack>

                        </CardBody>
                    </ExpCard>


                </PageContent>
            </Container>
            <Footer />
        </>
    );
}
