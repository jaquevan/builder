'use client';

import Image from 'next/image';
import styled from 'styled-components';
import BackToProjects from "@/app/components/Projects/BackToProjects";
import NavBar from '@/app/components/NavBar';

// images used in case study
import MapleImage from '../../../public/MAPLE-thumb.png';
import MapleDiscovery from '../../../public/Maple-Discovery.png';
import MapleUsability from '../../../public/Maple-Usability.png';

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

export default function MapleCaseStudy() {
    return (
        <Container>
            <NavBar/>
            <BackToProjects url="/projects" />

            <PageTitle>Maple Case Study</PageTitle>

            <HeroImageWrapper>
                <Image
                    src={MapleImage}
                    alt="Maple Project Thumbnail"
                    style={{ width: '50%', height: 'auto', borderRadius: '8px' }}
                />
            </HeroImageWrapper>

            <SectionTitle>Project Overview</SectionTitle>

            <Paragraph>
                Maple is a digital platform I helped design to connect college students with mentors in their field.
                As a UX Designer on this project, I conducted extensive user research, created wireframes and
                prototypes, and worked closely with developers to implement a user-friendly experience.
            </Paragraph>

            <GridContainer>
                <Card>
                    <CardTitle>Discovery Phase</CardTitle>
                    <ImageWrapper>
                        <Image src={MapleDiscovery} alt="Discovery Process" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        Our initial research revealed that college students often struggle to find relevant mentorship
                        in their chosen fields. We interviewed 25 students across different majors to understand their
                        needs and pain points when seeking career guidance.
                    </CardText>
                </Card>

                <Card>
                    <CardTitle>Usability Testing</CardTitle>
                    <ImageWrapper>
                        <Image src={MapleUsability} alt="Usability Testing" style={{ width: '100%', height: 'auto' }} />
                    </ImageWrapper>
                    <CardText>
                        We conducted multiple rounds of usability testing with our target audience to refine the
                        interface and interaction design. Key findings helped us simplify the mentor matching process
                        and improve the messaging features.
                    </CardText>
                </Card>
            </GridContainer>

            <Card>
                <CardTitle>Key Features</CardTitle>
                <CardText>
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        <li>AI-powered mentor matching based on career goals and interests</li>
                        <li>In-app scheduling for mentorship sessions</li>
                        <li>Secure messaging platform for ongoing communication</li>
                        <li>Resource sharing capabilities for articles, videos, and career opportunities</li>
                        <li>Progress tracking for mentorship goals and milestones</li>
                    </ul>
                </CardText>
            </Card>

            <div style={{ marginTop: '3rem' }}>
                <SectionTitle>Outcomes & Impact</SectionTitle>
                <Paragraph>
                    Since launching the beta version, Maple has connected over 500 students with industry mentors.
                    User satisfaction rates are currently at 92%, with the majority of users reporting significant
                    value from their mentorship experiences. The platform continues to evolve based on user feedback
                    and changing educational needs.
                </Paragraph>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <SectionTitle>Next Steps</SectionTitle>
                <Paragraph>
                    We're currently working on expanding Maple to include group mentorship features and integrating
                    with university career services platforms. Future updates will also include enhanced analytics
                    for tracking mentorship effectiveness and career outcomes.
                </Paragraph>
            </div>
        </Container>
    );
}