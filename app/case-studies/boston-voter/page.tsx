'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import BackToProjects from "@/app/components/Projects/BackToProjects";
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import figmaIcon from '../../../public/icons/figma.svg';

// Import images
import poster from '../../../public/cases/bv/BVA.png';
import redesign from '../../../public/cases/bv/iPad Mini 2021.png';
import logo from '../../../public/cases/bv/logos.png';
import lofi from '../../../public/cases/bv/lo-fi.png';
import macbook from '../../../public/cases/bv/MacBook Air (15 inch).png';
import oldDesign from '../../../public/cases/bv/old-design.png';
import thumb from '../../../public/cases/bv/BV-thumb.png';

const commonTextStyles = `
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

// Custom hook to detect if an element is in viewport for animations

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
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
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

// const PageTitle = styled.h1`
//     font-size: 3rem;
//     font-weight: 800;
//     font-family: 'JetBrains Mono', monospace;
//     text-align: center;
//     margin: 2rem 0 3rem;
//     letter-spacing: -0.02em;
// `;

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

const LargeImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;

    img {
        width: 140%;
        height: auto;
        max-width: 2000px; // Larger than HeroImage's 800px
        border-radius: 8px;
        object-fit: cover;
    }
`;

const Poster = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;     
    justify-content: center;
    margin-bottom: 4rem;

    img {
        width: 100%;
        height: auto;
        max-width: 1000px;
        border-radius: 8px;
        object-fit: cover;
    }
`;

const LargeDeviceImage = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;

    img {
        width: 100%;
        height: auto;
        max-width: 1000px;
        border-radius: 8px;
        object-fit: contain;
    }
`;

const BrandSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const LogoImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 2%;

    img {
        width: 100%;
        height: auto;
        max-width: 400px;
    }
`;

const IphoneImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    max-width: 300px; // Smaller width for iPhone images

    img {
        width: 85%;
        height: auto;
        border-radius: 8px;
        object-fit: contain;
    }
`;

const IphoneContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 2rem auto;
    
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        max-width: 800px;
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


const DesignGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
    margin-top: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
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

interface TitleWrapperProps {
    children: React.ReactNode;
}

// TitleWrapper component to handle in-view animations
const TitleWrapper: React.FC<TitleWrapperProps> = ({ children }) => {
    const { ref, isInView } = useInView();
    return (
        <SectionTitle ref={ref} className={isInView ? 'visible' : ''}>
            {children}
        </SectionTitle>
    );
};

export default function BostonVoter() {
    return (
        <>
        <Container>
            <NavBar />
            <BackToProjects url="/projects" />

            {/*<PageTitle>Boston Voter Case Study</PageTitle>*/}

            <HeroImage>
                <Image src={thumb} alt="Boston Voter Application" priority />
            </HeroImage>

            <Section>
                <TitleWrapper>Project Overview</TitleWrapper>
                <CenteredParagraph>
                    Boston Voter is a civic engagement platform designed to increase voter participation
                    and accessibility in Boston elections. The project focused on creating an intuitive,
                    mobile-first experience that empowers citizens to engage with local democracy.
                </CenteredParagraph>

                <Poster>
                    <Image src={poster} alt="Desktop Design" />
                    <Citation>
                        BU Spark DS488/688 2024
                    </Citation>
                </Poster>

                <TitleWrapper>Deliverables</TitleWrapper>

                <DeliverableContainer>
                    <DeliverableTag>User Research & Analysis</DeliverableTag>
                    <DeliverableTag>Low-Fidelity Wireframes</DeliverableTag>
                    <DeliverableTag>High-Fidelity Prototypes</DeliverableTag>
                    <DeliverableTag>Rebranding</DeliverableTag>
                </DeliverableContainer>

            </Section>

            <Section>
                <Phase>
                    <PhaseTitle>Phase I: Research & Problem Definition</PhaseTitle>
                    <Paragraph>
                        We identified key barriers to civic engagement in Boston, including complex ballot information,
                        limited accessibility, and lack of voter education resources. Our research focused on understanding
                        user needs across diverse demographics and technical literacy levels.
                    </Paragraph>

                </Phase>

                <Phase>
                    <CenteredPhaseTitle>Phase II: Ideation & Wireframing</CenteredPhaseTitle>
                    <CenteredParagraph>
                        Starting with low-fidelity wireframes, we explored different approaches to presenting
                        complex voting information in an accessible way. The focus was on creating clear
                        information hierarchy and intuitive navigation patterns.
                    </CenteredParagraph>

                    <IphoneContainer>
                        <IphoneImageWrapper>
                            <Image src={lofi} alt="Low-Fidelity Wireframes" />
                        </IphoneImageWrapper>
                        <IphoneImageWrapper>
                            <Image src={oldDesign} alt="Original Design Analysis" />
                        </IphoneImageWrapper>
                    </IphoneContainer>
                </Phase>

                <Phase>

                    <BrandSection>

                        <div><PhaseTitle>Phase III: Brand Identity & Visual System</PhaseTitle>
                            <Paragraph>
                                We developed a cohesive visual identity that balances civic professionalism with
                                modern accessibility. The logo and branding elements emphasize trust, clarity,
                                and democratic participation.
                            </Paragraph>
                        </div>
                        <LogoImageWrapper>
                            <Image src={logo} alt="Boston Voter Logo Design" />
                        </LogoImageWrapper>
                    </BrandSection>
                </Phase>

                <Phase>
                    <CenteredPhaseTitle>Phase IV: High-Fidelity Design</CenteredPhaseTitle>
                    <CenteredParagraph>
                        The final designs prioritize mobile-first usability while maintaining full desktop
                        functionality. Key features include ballot previews, candidate information,
                        polling location finder, and voting guides.
                    </CenteredParagraph>
                    <LargeDeviceImage>
                        <Image src={redesign} alt="Mobile Design" />
                    </LargeDeviceImage>
                </Phase>
            </Section>

            <Section>
                <TitleWrapper>Key Design Decisions</TitleWrapper>

                <DesignGrid>
                    <LargeImage>
                        <Image src={macbook} alt="Desktop Design" />
                    </LargeImage>

                    <div>
                        <Paragraph>
                            The redesign focused on three core principles: accessibility, clarity, and engagement.
                            We implemented high contrast ratios, clear typography hierarchy, and intuitive navigation
                            to ensure the platform serves all Boston voters effectively.
                        </Paragraph>
                        <Paragraph>
                            Mobile responsiveness was critical, as research showed most users would access voting
                            information on their phones. The design scales seamlessly across devices while
                            maintaining functionality and visual consistency.
                        </Paragraph>
                    </div>

                </DesignGrid>
            </Section>

            <FigmaSection
                href="https://www.figma.com/design/ZecrwYdA7hais0d9egjLCX/Boston-Voter---Figma-Collection?node-id=0-1&t=uVAYBX0Mz32z2rBv-1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={figmaIcon}
                    alt="Figma Icon"
                    width={24}
                    height={24}
                />
                View Collection of Work on Figma
            </FigmaSection>
        </Container>

        <Footer/>
    </>
    );
}