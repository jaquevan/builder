'use client';

import Image from 'next/image';
import styled from 'styled-components';
import BackToProjects from "@/app/components/Projects/BackToProjects";
import NavBar from '@/app/components/NavBar';

// images
import team from '../../../public/word/team.png';
import problem from '../../../public/word/problem.png';
import persona from '../../../public/word/persona.png';
import interview from '../../../public/word/interview.png';
import hypothesis from '../../../public/word/hypothesis.png';
import validation from '../../../public/word/validation.png';
import crazy8 from '../../../public/word/crazy8.jpg';
import jobmap from '../../../public/word/jobmap.jpg';
import floop from '../../../public/word/floop.jpg';
import gaming from '../../../public/word/gaming-floopa.png';

const Container = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
`;

const PageTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    font-family: 'JetBrains Mono', monospace;
    text-align: center;
    margin: 2rem 0 3rem;
    letter-spacing: -0.02em;
`;

const HeroImage = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;

    img {
        width: 100%;
        max-width: 520px;
        border-radius: 8px;
        object-fit: cover;
    }
`;

const Section = styled.section`
    margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.75rem;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, #6e6e6e, transparent);

        @media (prefers-color-scheme: dark) {
            background: linear-gradient(90deg, #a0a0a0, transparent);
        }
    }
`;

const Paragraph = styled.p`
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text-primary, #333);
    margin-bottom: 2rem;
    max-width: 70ch;

    @media (prefers-color-scheme: dark) {
        color: var(--text-primary, #e0e0e0);
    }
`;

const Deliverables = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;

    li {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 0.5rem;
        position: relative;
        padding-left: 1.25rem;

        &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #e63946;
        }
    }
`;

const Phase = styled.div`
    margin-bottom: 3rem;
`;

const PhaseTitle = styled.h3`
    font-size: 1.35rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary, #222);
`;

const Grid = styled.div`
    display: grid;
    gap: 2rem;

    @media (min-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ImageWrapper = styled.div`
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

const TeamSection = styled(Section)`
    text-align: center;
`;

const TeamImage = styled.div`
    max-width: 800px;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    margin-bottom: 1.5rem;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

const TeamDescription = styled.p`
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.125rem;
    line-height: 1.65;

    @media (prefers-color-scheme: dark) {
        color: var(--text-secondary, #b0b0b0);
    }
`;

const NextStepsSection = styled(Section)`
    padding: 2.5rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(230, 230, 230, 0.5);
    position: relative;
    overflow: hidden;
    

    ${SectionTitle} {
        text-align: center;
    }

    ${Paragraph} {
        margin: 0 auto;
        max-width: 600px;
        font-weight: 500;
    }

    @media (prefers-color-scheme: dark) {
        background-color: rgba(40, 40, 40, 0.4);
        border-color: rgba(60, 60, 60, 0.5);
    }
`;

export default function WordWyrm() {
    return (
        <Container>
            <NavBar />
            <BackToProjects url="/projects" />

            <PageTitle>Word Wyrm Case Study</PageTitle>

            <HeroImage>
                <Image src={gaming} alt="Word Wyrm Gaming Dragon" priority />
            </HeroImage>

            <Section>
                <SectionTitle>Deliverables</SectionTitle>
                <Deliverables>
                    <li>Phase I: Problem & Research</li>
                    <li>Phase II: Hypothesis & Validation</li>
                    <li>Phase III: Ideation</li>
                    <li>Phase IV: Journey Mapping</li>
                    <li>Phase V: Feedback & Iteration</li>
                </Deliverables>
            </Section>

            <Section>
                <Phase>
                    <PhaseTitle>Phase I: Problem & Research</PhaseTitle>
                    <Paragraph>
                        We began by defining the problem: language learning often relies on worksheets and drills that
                        are boring and passive. Through user interviews and persona development, we uncovered the
                        importance of intuitive design and the need to balance fun with measurable learning outcomes.
                    </Paragraph>
                    <Grid>
                        <ImageWrapper><Image src={problem} alt="Problem" /></ImageWrapper>
                        <ImageWrapper><Image src={interview} alt="User Interviews" /></ImageWrapper>
                        <ImageWrapper><Image src={persona} alt="Persona" /></ImageWrapper>
                    </Grid>
                </Phase>

                <Phase>
                    <PhaseTitle>Phase II: Hypothesis & Validation</PhaseTitle>
                    <Paragraph>
                        Based on our research, we developed hypotheses about user behavior and classroom integration.
                        We conducted validation sessions with teachers and students to refine these assumptions,
                        ensuring we stayed grounded in real user needs.
                    </Paragraph>
                    <Grid>
                        <ImageWrapper><Image src={hypothesis} alt="Hypothesis" /></ImageWrapper>
                        <ImageWrapper><Image src={validation} alt="Validation" /></ImageWrapper>
                    </Grid>
                </Phase>

                <Phase>
                    <PhaseTitle>Phase III: Ideation</PhaseTitle>
                    <Paragraph>
                        Using techniques like Crazy 8s brainstorming, we rapidly generated a wide range of solutions.
                        These sketches helped us explore both playful and practical ideas for gamifying language practice.
                    </Paragraph>
                    <Grid>
                        <ImageWrapper><Image src={crazy8} alt="Crazy 8s Ideation" /></ImageWrapper>
                    </Grid>
                </Phase>

                <Phase>
                    <PhaseTitle>Phase IV: Journey Mapping</PhaseTitle>
                    <Paragraph>
                        We mapped user journeys to capture teacher and student workflows. This gave us visibility into
                        key pain points and opportunities where AI-powered gamification could enhance learning experiences.
                    </Paragraph>
                    <Grid>
                        <ImageWrapper><Image src={jobmap} alt="Job Map" /></ImageWrapper>
                    </Grid>
                </Phase>

                <Phase>
                    <PhaseTitle>Phase V: Feedback & Iteration</PhaseTitle>
                    <Paragraph>
                        We ran feedback loops with educators and peers, refining our prototypes to make them more engaging
                        and effective. Iteration has been central to keeping Word Wyrm grounded in actual classroom needs.
                    </Paragraph>
                    <Grid>
                        <ImageWrapper><Image src={floop} alt="Feedback Loop" /></ImageWrapper>
                    </Grid>
                </Phase>
            </Section>

            <TeamSection>
                <SectionTitle>Our Team</SectionTitle>
                <TeamImage>
                    <Image src={team} alt="Project Team" />
                </TeamImage>
                <TeamDescription>
                    Our interdisciplinary team combines expertise in education technology, game design,
                    and language learning to create an effective solution.
                </TeamDescription>
            </TeamSection>

            <NextStepsSection>
                <SectionTitle>Next Steps</SectionTitle>
                <Paragraph>
                    This project is currently in the research and discovery phase. A full case study
                    with detailed findings, prototypes, and outcomes will be published as the project progresses.
                </Paragraph>
            </NextStepsSection>
        </Container>
    );
}
