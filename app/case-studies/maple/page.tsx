'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import BackToProjects from "@/app/components/Projects/BackToProjects";
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

// images
import MapleImage from '../../../public/cases/m3/MAPLE-thumb.png';
import MapleDiscovery from '../../../public/cases/m3/Maple-Discovery.png';
import MapleUsability from '../../../public/cases/m3/Maple-Usability.png';
import demo from '../../../public/cases/m3/demoday.jpg';
import figmaIcon from '../../../public/icons/figma.svg';

const commonTextStyles = `
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

// animation hook
const useInView = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const element = ref.current;
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return { ref, isInView };
};

const Container = styled.main`
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    ${commonTextStyles}
`;

const FigmaSection = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.5rem;
    margin-top: 4rem;
    background: linear-gradient(to right, rgba(67, 97, 238, 0.1), rgba(67, 97, 238, 0.05));
    border-radius: 12px;
    text-decoration: none;
    color: #4361ee;
    font-weight: 500;
    transition: transform 0.2s ease;
    ${commonTextStyles}

    &:hover {
        transform: translateY(-2px);
    }

    @media (prefers-color-scheme: dark) {
        background: linear-gradient(to right, rgba(67, 97, 238, 0.2), rgba(67, 97, 238, 0.1));
        color: #7b91ff;
    }
`;

const Citation = styled.figcaption`
    font-size: 0.9rem;
    color: var(--text-secondary, #666);
    text-align: center;
    margin-top: 0.5rem;
    font-style: italic;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (prefers-color-scheme: dark) {
        color: var(--text-secondary, #999);
    }
`;

const HeroImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: contain;
    }
`;

const Section = styled.section`
    margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0 auto;
    padding-bottom: 0.5rem;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-in, transform 0.5s ease-in;

    &.visible {
        opacity: 1;
        transform: translateY(0);
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

const CenteredParagraph = styled(Paragraph)`
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    margin-bottom: 3.5rem;
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

const CenteredPhaseTitle = styled(PhaseTitle)`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

const ImageWrapper = styled.div`
    margin: 2rem auto;
    border-radius: 8px;
    overflow: hidden;
    max-width: 800px;

    img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 8px;
    }
`;

const DeliverableContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 800px;
`;

const DeliverableTag = styled.span`
    background: var(--text-primary, #333);
    color: var(--background, white);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-2px);
    }

    @media (prefers-color-scheme: dark) {
        background: var(--text-primary, #e0e0e0);
        color: var(--background, #121212);
    }
`;

interface TitleWrapperProps {
    children: React.ReactNode;
}

const TitleWrapper: React.FC<TitleWrapperProps> = ({ children }) => {
    const { ref, isInView } = useInView();
    return (
        <SectionTitle ref={ref} className={isInView ? 'visible' : ''}>
            {children}
        </SectionTitle>
    );
};

export default function MapleCaseStudy() {
    return (
        <>
            <Container>
                <NavBar />
                <BackToProjects url="/projects" />

                <HeroImage>
                    <Image src={MapleImage} alt="MAPLE 3.0 Thumbnail" priority />
                </HeroImage>

                <Section>
                    <TitleWrapper>Project Overview</TitleWrapper>
                    <CenteredParagraph>
                        MAPLE (Massachusetts Platform for Legislative Enablement) is a civic tech platform designed by Partners in Democracy
                        to bridge the gap between constituents, local organizations, and legislators. Our UX team collaborated with MAPLE
                        to design its 3.0 version, focusing on accessibility, navigation, and clear presentation of legislative data.
                        The redesign emphasizes usability for advocates, novices, and researchers alike.
                    </CenteredParagraph>

                    <TitleWrapper>Deliverables</TitleWrapper>
                    <DeliverableContainer>
                        <DeliverableTag>User Research & Personas</DeliverableTag>
                        <DeliverableTag>Competitor Audit</DeliverableTag>
                        <DeliverableTag>Low-Fidelity Wireframes</DeliverableTag>
                        <DeliverableTag>High-Fidelity Prototypes</DeliverableTag>
                        <DeliverableTag>Usability Testing</DeliverableTag>
                        <DeliverableTag>Final Presentation</DeliverableTag>
                    </DeliverableContainer>
                </Section>

                <Section>
                    <Phase>
                        <CenteredPhaseTitle>Phase I: Discovery</CenteredPhaseTitle>
                        <ImageWrapper>
                            <Image src={MapleDiscovery} alt="Discovery Process" />
                        </ImageWrapper>
                        <CenteredParagraph>
                            We conducted competitor audits, stakeholder interviews, and user persona creation. Key insights revealed
                            that users wanted information that is <strong>scannable, visually clear, and organized logically</strong>.
                            Advocates requested quick access to lobbying disclosures and voting records, while novices emphasized
                            intuitive navigation with supportive explanations. Researchers needed structured data for analysis.
                        </CenteredParagraph>
                    </Phase>

                    <Phase>
                        <CenteredPhaseTitle>Phase II: Design</CenteredPhaseTitle>
                        <CenteredParagraph>
                            Our design phase introduced a <strong>tabbed Bill Details page</strong> to organize legislative content into
                            sections such as lobbying disclosures, voting records, and transcripts. We applied MAPLE’s updated style guide
                            to improve readability, consistency, and accessibility. Wireframes were developed into high-fidelity prototypes
                            with improved hierarchy, contrast, and visual cues.
                        </CenteredParagraph>
                    </Phase>

                    <Phase>
                        <CenteredPhaseTitle>Phase III: Usability Testing</CenteredPhaseTitle>
                        <ImageWrapper>
                            <Image src={MapleUsability} alt="Usability Testing" />
                        </ImageWrapper>
                        <CenteredParagraph>
                            We tested clickable prototypes with MAPLE stakeholders and end users. Feedback highlighted the need for
                            clearer tab labels and visual indicators. Iterations focused on simplifying text-heavy sections, adding
                            iconography, and ensuring mobile responsiveness. These refinements made legislative data more digestible
                            for both experts and first-time users.
                        </CenteredParagraph>
                    </Phase>

                    <Phase>
                        <TitleWrapper>Outcomes & Impact</TitleWrapper>
                        <CenteredParagraph>
                            The MAPLE 3.0 redesign successfully delivered a more intuitive, visually cohesive platform. The new Bill Details
                            page makes complex information easier to scan and understand. By improving navigation and accessibility, the
                            redesign empowers constituents to engage with policy, researchers to analyze bills, and advocates to advance
                            their causes more effectively.
                        </CenteredParagraph>

                        <ImageWrapper>
                            <Image src={demo} alt="MAPLE Demo Day Presentation" />
                            <Citation>Demo Day Presentation</Citation>
                        </ImageWrapper>
                    </Phase>

                    <FigmaSection
                        href="https://www.figma.com/design/0WjsOcqqxPYyTE5ap6LyvT/MAPLE-3.0---Figma-Collection?node-id=0-1&t=DvA2zBXMgt8cb8qy-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={figmaIcon} alt="Figma Icon" width={24} height={24} />
                        View Collection of Work on Figma
                    </FigmaSection>
                </Section>
            </Container>

            <Footer />
        </>
    );
}
