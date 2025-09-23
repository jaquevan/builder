'use client';

import Image from 'next/image';
import styled from 'styled-components';
import BackToProjects from "@/app/components/Projects/BackToProjects";
import NavBar from '@/app/components/NavBar';

// images used in case study
import Poster from '../../../public/WW-thumb.png';
import team from '../../../public/word/team.png';
import problem from '../../../public/word/problem.png';
import persona from '../../../public/word/persona.png';
import interview from '../../../public/word/interview.png';
import hypothesis from '../../../public/word/hypothesis.png';
import validation from '../../../public/word/validation.png';
import crazy8 from '../../../public/word/crazy8.jpg';
import jobmap from '../../../public/word/jobmap.jpg';
import floop from '../../../public/word/floop.jpg';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  height: 100%;
  
  @media (prefers-color-scheme: dark) {
    background-color: #2a2a2a;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 6px;
  overflow: hidden;
`;

export default function WordWyrm() {
    return (
        <Container>
            <NavBar/>
            <BackToProjects url="/projects" />

            <PageTitle>Word Wyrm Case Study</PageTitle>

            <HeroImageWrapper>
                <Image
                    src={Poster}
                    alt="Word Wyrm Project Thumbnail"
                    style={{ width: '50%', height: 'auto', borderRadius: '8px' }}
                />
            </HeroImageWrapper>

            <SectionTitle>Project Overview</SectionTitle>

            <Paragraph>
                Word Wyrm is an in-progress project where I serve as a UX Designer and Technical Teammate.
                The project is currently in a design sprint, with Discovery completed and Design underway.
                Word Wyrm will explore how AI-driven gamification can transform traditional worksheets
                into engaging, interactive language-learning experiences.
            </Paragraph>

            <GridContainer>
                <Card>
                    <CardTitle>The Problem</CardTitle>
                    <ImageWrapper>
                        <Image src={problem} alt="Problem Definition" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        Language learning often relies on worksheets and drills that are boring and passive.
                        Our challenge is to create a gamified, AI-powered tool that helps teachers convert
                        existing lesson materials into interactive games.
                    </CardText>
                </Card>

                <Card>
                    <CardTitle>User Research</CardTitle>
                    <ImageWrapper>
                        <Image src={interview} alt="User Interviews" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        We conducted interviews with teachers and students to understand their needs,
                        including the importance of a simple interface and balancing fun with real learning.
                    </CardText>
                </Card>

                <Card>
                    <CardTitle>Persona Development</CardTitle>
                    <ImageWrapper>
                        <Image src={persona} alt="User Persona" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        We created personas like "Bilingual Ben" to highlight the need for intuitive tools
                        that save prep time and track student progress.
                    </CardText>
                </Card>

                <Card>
                    <CardTitle>Hypothesis Testing</CardTitle>
                    <ImageWrapper>
                        <Image src={hypothesis} alt="Hypothesis" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        We developed hypotheses about user behavior to guide our design decisions and research direction.
                    </CardText>
                </Card>

                <Card>
                    <CardTitle>Validation Process</CardTitle>
                    <ImageWrapper>
                        <Image src={validation} alt="Validation" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        We conducted validation sessions to test our assumptions and ensure we addressed real user needs.
                    </CardText>
                </Card>

                <Card>
                    <CardTitle>Ideation</CardTitle>
                    <ImageWrapper>
                        <Image src={crazy8} alt="Crazy 8s Ideation" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        We used Crazy 8s exercises to rapidly generate diverse solution ideas in a limited timeframe.
                    </CardText>
                </Card>

                <Card>
                    <CardTitle>User Journey Mapping</CardTitle>
                    <ImageWrapper>
                        <Image src={jobmap} alt="Job Map" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        We developed job maps to understand user workflows and identify key touchpoints in the experience.
                    </CardText>
                </Card>

                <Card>
                    <CardTitle>Feedback Loop</CardTitle>
                    <ImageWrapper>
                        <Image src={floop} alt="Feedback Loop" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        We conducted feedback sessions to refine our concepts and ensure they meet user expectations.
                    </CardText>
                </Card>
            </GridContainer>

            <Card>
                <CardTitle>Our Team</CardTitle>
                <ImageWrapper>
                    <Image src={team} alt="Project Team" style={{ width: '100%', height: 'auto' }} />
                </ImageWrapper>
                <CardText>
                    Our interdisciplinary team combines expertise in education technology, game design,
                    and language learning to create an effective solution.
                </CardText>
            </Card>

            <div style={{ marginTop: '3rem' }}>
                <SectionTitle>Next Steps</SectionTitle>
                <Paragraph>
                    This project is currently in the research and discovery phase. A full case study
                    with detailed findings, prototypes, and outcomes will be published as the project progresses.
                </Paragraph>
            </div>
        </Container>
    );
}