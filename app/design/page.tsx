"use client";

import React from 'react';
import styled from 'styled-components';
import Nav from '@/app/components/NavBar';
import Footer from "@/app/components/Footer";
import Image from 'next/image';

const DesignPageContainer = styled.div`
    font-family: 'Inter', 'Helvetica Neue', sans-serif;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    line-height: 1.6;
`;

const DesignHeader = styled.header`
    text-align: center;
    margin-bottom: 4rem;
    padding: 2rem 0;
`;

const DesignHeaderTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    background: linear-gradient(to right, #4a00e0, #8e2de2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Section = styled.section`
    margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        width: 60px;
        height: 4px;
        background: #8e2de2;
        bottom: -10px;
        left: 0;
    }
`;

const JourneyContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: center;
`;

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
`;

const SkillCard = styled.div`
    background: #f8f9fa;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
`;

const SkillIcon = styled.div`
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
`;

const ProjectCard = styled.div`
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const ProjectImage = styled.div`
    height: 200px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

const ProjectTitle = styled.h3`
    padding: 1.5rem 1.5rem 0.5rem;
    font-size: 1.25rem;
`;

const ProjectDescription = styled.p`
    padding: 0 1.5rem 1.5rem;
    color: #666;
`;

const ViewProjectButton = styled.button`
    background: #8e2de2;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    margin: 0 1.5rem 1.5rem;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;

    &:hover {
        background: #4a00e0;
    }
`;

const ResourcesList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`;

const Resource = styled.div`
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 15px;

    ul {
        padding-left: 1.5rem;
        margin-top: 1rem;
    }

    li {
        margin-bottom: 0.5rem;
    }
`;

const DesignPage: React.FC = () => {
    return (
        <>
            <Nav/>
            <DesignPageContainer>

                <DesignHeader>
                    <DesignHeaderTitle className="fade-in">UI/UX Design Portfolio</DesignHeaderTitle>
                </DesignHeader>
                <Section>
                    <SectionTitle>My Design Journey</SectionTitle>
                    <JourneyContent>
                        <div>
                            <p>
                                Although I&apos;m early in my UI/UX design journey, I&apos;m passionate about creating
                                interfaces that are both beautiful and functional. My background in
                                [your background - e.g., &quot;computer science&quot;, &quot;graphic design&quot;, etc.]
                                has given me a unique perspective on how users interact with digital products.
                            </p>
                            <p>
                                What fascinates me about UI/UX design is the perfect blend of creativity and
                                problem-solving. I enjoy the process of understanding user needs and translating
                                them into designs that are intuitive and engaging.
                            </p>
                        </div>
                    </JourneyContent>
                </Section>

                <Section>
                    <SectionTitle>Design Skills & Tools</SectionTitle>
                    <SkillsContainer>
                        <SkillCard>
                            <SkillIcon>🎨</SkillIcon>
                            <h3>UI Design</h3>
                            <p>Creating visually appealing interfaces with attention to color theory, typography, and visual hierarchy.</p>
                        </SkillCard>
                        <SkillCard>
                            <SkillIcon>🧠</SkillIcon>
                            <h3>UX Design</h3>
                            <p>Designing with user-centered approaches, focusing on usability and accessibility.</p>
                        </SkillCard>
                        <SkillCard>
                            <SkillIcon>🛠️</SkillIcon>
                            <h3>Design Tools</h3>
                            <p>Figma, Adobe Photoshop, Miro, Photopea</p>
                        </SkillCard>
                    </SkillsContainer>
                </Section>

                <Section>
                    <SectionTitle>Learning Projects</SectionTitle>
                    <p className="section-intro">
                        As I&apos;m building my experience, here are some design exercises and projects I&apos;ve worked on to develop my skills:
                    </p>
                    <ProjectsGrid>
                        <ProjectCard>
                            <ProjectImage>
                                <img src="../../public/camelitics.png" alt="Project 1" />
                            </ProjectImage>
                            <ProjectTitle>Boston Voter App</ProjectTitle>
                            <ProjectDescription>A concept redesign of a popular app focusing on improved navigation and visual hierarchy.</ProjectDescription>
                            <ViewProjectButton>View Process</ViewProjectButton>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectImage>
                                <img src="../../public/camelitics.png" alt="Project 2" />
                            </ProjectImage>
                            <ProjectTitle>MAPLE 3.0</ProjectTitle>
                            <ProjectDescription>Exploring the principles of creating a consistent design system by analyzing popular frameworks.</ProjectDescription>
                            <ViewProjectButton>View Process</ViewProjectButton>
                        </ProjectCard>
                    </ProjectsGrid>
                </Section>

                <Section>
                    <SectionTitle>Resources I&apos;m Learning From</SectionTitle>
                    <ResourcesList>
                        <Resource>
                            <h3>Courses</h3>
                            <ul>
                                <li>CS391 - Web and App Development</li>
                                <li>DS488/688 - UX Design Practicum</li>
                                <li>CS501 - Mobile App Development</li>
                            </ul>
                        </Resource>

                    </ResourcesList>
                </Section>
            </DesignPageContainer>
            <Footer/>
        </>
    );
};

export default DesignPage;