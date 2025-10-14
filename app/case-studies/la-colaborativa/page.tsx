'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import BackToProjects from "@/app/components/Projects/BackToProjects";
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

// Images - placeholders for now, you'll add these later
import LCThumb from '../../../public/LC-thumb.png';

const commonTextStyles = `
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

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

const StatGrid = styled.div`
    display: grid;
    gap: 2rem;
    margin: 3rem auto;
    max-width: 900px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const StatCard = styled.div`
    background: linear-gradient(
        135deg,
        rgba(var(--primary-rgb, 0, 118, 255), 0.05) 0%,
        rgba(var(--primary-rgb, 0, 118, 255), 0.1) 100%
    );
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    border: 1px solid rgba(var(--primary-rgb, 0, 118, 255), 0.1);
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-4px);
    }

    @media (prefers-color-scheme: dark) {
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.03) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
        border-color: rgba(255, 255, 255, 0.1);
    }
`;

const StatNumber = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
`;

const StatLabel = styled.div`
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
`;

const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 2rem auto;
    max-width: 700px;
`;

const TechBadge = styled.span`
    background: var(--text-primary, #333);
    color: var(--background, white);
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (prefers-color-scheme: dark) {
        background: var(--text-primary, #e0e0e0);
        color: var(--background, #121212);
    }
`;

const HighlightSection = styled(Section)`
    padding: 3rem;
    text-align: center;
    background: linear-gradient(
            135deg,
            rgba(var(--primary-rgb, 0, 118, 255), 0.05) 0%,
            rgba(var(--primary-rgb, 0, 118, 255), 0.1) 100%
    );
    border: 1px solid rgba(var(--primary-rgb, 0, 118, 255), 0.1);
    border-radius: 12px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(
                90deg,
                rgba(var(--primary-rgb, 0, 118, 255), 0.5),
                rgba(var(--primary-rgb, 0, 118, 255), 0.8)
        );
    }

    @media (prefers-color-scheme: dark) {
        background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.03) 0%,
                rgba(255, 255, 255, 0.05) 100%
        );
        border-color: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
        padding: 2rem 1.5rem;
    }
`;

const LiveLink = styled.a`
    display: inline-block;
    margin-top: 1.5rem;
    padding: 0.875rem 2rem;
    background: var(--text-primary, #333);
    color: var(--background, white);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    @media (prefers-color-scheme: dark) {
        background: var(--text-primary, #e0e0e0);
        color: var(--background, #121212);
    }
`;

const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    max-width: 70ch;
    margin: 2rem auto;
`;

const BulletItem = styled.li`
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text-primary, #333);
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    position: relative;

    &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--text-primary);
        font-weight: 700;
    }

    @media (prefers-color-scheme: dark) {
        color: var(--text-primary, #e0e0e0);
    }
`;

const Citation = styled.figcaption`
    font-size: 0.9rem;
    color: var(--text-secondary, #666);
    text-align: center;
    margin-top: 0.5rem;
    font-style: italic;

    @media (prefers-color-scheme: dark) {
        color: var(--text-secondary, #999);
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

export default function LaColaborativaCaseStudy() {
    return (
        <>
            <Container>
                <NavBar />
                <BackToProjects url="/projects" />

                <HeroImage>
                    <Image src={LCThumb} alt="La Colaborativa EcoDev Platform" priority />
                    <Citation>La Colaborativa Economic Development Platform</Citation>
                </HeroImage>

                <Section>
                    <TitleWrapper>Project Overview</TitleWrapper>
                    <CenteredParagraph>
                        La Colaborativa is a grassroots organization in Chelsea, Massachusetts, serving over
                        3,000 community members. I designed and developed their economic development platform
                        to provide the community with seamless access to programs, resources, and opportunities
                        that support economic mobility and community growth.
                    </CenteredParagraph>

                    <StatGrid>
                        <StatCard>
                            <StatNumber>3,000+</StatNumber>
                            <StatLabel>Community Members Served</StatLabel>
                        </StatCard>
                        <StatCard>
                            <StatNumber>10+</StatNumber>
                            <StatLabel>Staff Collaborations</StatLabel>
                        </StatCard>
                        <StatCard>
                            <StatNumber>2 mo.</StatNumber>
                            <StatLabel>Digital Equity Curriculum</StatLabel>
                        </StatCard>
                    </StatGrid>

                    <TitleWrapper>The Challenge</TitleWrapper>
                    <CenteredParagraph>
                        La Colaborativa is a non-profit survival center that had previously outsourced web development,
                        requiring external technical support for even small content updates. This process took weeks and
                        prevented staff from posting timely, relevant information—forcing community members to visit in
                        person or make phone calls for updates. The organization needed a solution that would empower
                        non-technical staff to maintain the platform independently while serving a Spanish-speaking
                        majority with varying levels of digital literacy.
                    </CenteredParagraph>

                    <TitleWrapper>A Critical Realization</TitleWrapper>
                    <CenteredParagraph>
                        Early in the project, I made a significant mistake: I initially approached the design the way
                        I had with other projects—focusing on functionality and modern layouts without fully considering
                        the user base. I quickly realized my designs felt overwhelming and inaccessible to the people
                        they were meant to serve. This was a turning point that reshaped my entire approach to the project.
                    </CenteredParagraph>

                    <TitleWrapper>Deliverables</TitleWrapper>
                    <DeliverableContainer>
                        <DeliverableTag>Stakeholder Research</DeliverableTag>
                        <DeliverableTag>Platform Architecture</DeliverableTag>
                        <DeliverableTag>CMS Development</DeliverableTag>
                        <DeliverableTag>UI/UX Design</DeliverableTag>
                        <DeliverableTag>Digital Curriculum</DeliverableTag>
                    </DeliverableContainer>
                </Section>

                <Section>
                    <Phase>
                        <CenteredPhaseTitle>Phase I: Discovery & User-Centered Research</CenteredPhaseTitle>
                        <CenteredParagraph>
                            After recognizing my initial mistake, I made a deliberate pivot to focus on deeply
                            understanding the users first. I partnered with 10+ staff members across different departments
                            and sat in on Zoom calls with community members to observe how they accessed resources and
                            where they struggled. I gathered direct feedback from staff who worked with these members
                            daily, asking what frustrated users most about previous systems. This immersive research phase
                            was crucial in identifying pain points and understanding the real needs of the community.
                        </CenteredParagraph>

                        <BulletList>
                            <BulletItem>
                                Sat in on Zoom calls with community members to observe their interaction with digital tools
                                and listen to how they accessed resources
                            </BulletItem>
                            <BulletItem>
                                Conducted interviews with staff across departments who work directly with community members
                                to understand workflows, challenges, and what frustrated users most
                            </BulletItem>
                            <BulletItem>
                                Identified critical needs: mobile accessibility for majority-mobile users, trusted Spanish
                                translations (not just Google Translate), and simplified navigation for low digital literacy
                            </BulletItem>
                            <BulletItem>
                                Documented existing technology limitations, budget constraints, and the time-consuming
                                outsourcing process that took weeks for simple updates
                            </BulletItem>
                            <BulletItem>
                                Translated findings into actionable platform requirements that prioritized accessibility,
                                empowerment, and cultural context
                            </BulletItem>
                        </BulletList>
                    </Phase>

                    <Phase>
                        <CenteredPhaseTitle>Phase II: Redesigning for Accessibility & Empowerment</CenteredPhaseTitle>
                        <CenteredParagraph>
                            Armed with insights from community members and staff, I redesigned the platform in Figma
                            with a completely different approach. I simplified navigation, emphasized mobile accessibility,
                            and ensured Spanish content was presented clearly and consistently—not through automated
                            translation, but through trusted, human-reviewed translations. I tested prototypes with staff
                            and iterated quickly, cutting unnecessary steps and surfacing the features people cared about
                            most. The design had to feel approachable and empowering, not intimidating.
                        </CenteredParagraph>

                        <TitleWrapper>Tech Stack</TitleWrapper>
                        <TechStack>
                            <TechBadge>Next.js</TechBadge>
                            <TechBadge>TypeScript</TechBadge>
                            <TechBadge>Strapi CMS</TechBadge>
                            <TechBadge>Tailwind CSS</TechBadge>
                            <TechBadge>Figma</TechBadge>
                            <TechBadge>Vercel</TechBadge>
                        </TechStack>

                        <CenteredParagraph>
                            I researched content management frameworks and identified Strapi as the ideal fit.
                            The people who knew the most about the programs offered needed to be editing the site—without
                            coding experience, they needed a CMS to make updates independently. Strapi&apos;s headless architecture
                            would allow non-technical staff to manage content without relying on developers, transforming
                            update times from weeks to minutes while accomplishing more with the organization&apos;s limited
                            resources.
                        </CenteredParagraph>
                    </Phase>

                    <Phase>
                        <CenteredPhaseTitle>Phase III: Development & Overcoming Technical Challenges</CenteredPhaseTitle>
                        <CenteredParagraph>
                            Implementing Strapi for the first time was a struggle—I spent significant time troubleshooting
                            local development setup and configuration. But I understood this investment was critical:
                            the people who knew the programs best needed to maintain the site themselves. I developed
                            the platform using Next.js for optimal performance and mobile-first accessibility, ensuring
                            community members could easily find resources. The Strapi CMS was carefully configured to match
                            staff workflows, with custom content types and an intuitive admin interface.
                        </CenteredParagraph>

                        <BulletList>
                            <BulletItem>
                                Overcame initial technical challenges implementing Strapi CMS for the first time,
                                debugging local setup and configuration issues
                            </BulletItem>
                            <BulletItem>
                                Built responsive, mobile-first interface using Next.js and Tailwind CSS with simplified
                                navigation for low digital literacy users
                            </BulletItem>
                            <BulletItem>
                                Configured Strapi with custom content types tailored to organizational workflows,
                                ensuring staff could manage Spanish and English content consistently
                            </BulletItem>
                            <BulletItem>
                                Wrote comprehensive documentation for handoff and ran short information sessions with
                                staff to ensure they felt confident using the CMS
                            </BulletItem>
                            <BulletItem>
                                Collected feedback throughout to ensure the admin interface matched their workflows
                                and was truly empowering
                            </BulletItem>
                            <BulletItem>
                                Optimized for performance and SEO to maximize community reach through search engines
                            </BulletItem>
                            <BulletItem>
                                Deployed to Vercel for reliable hosting and continuous deployment
                            </BulletItem>
                        </BulletList>
                    </Phase>

                    <Phase>
                        <CenteredPhaseTitle>Phase IV: Digital Equity Curriculum</CenteredPhaseTitle>
                        <CenteredParagraph>
                            Beyond the platform itself, I created a comprehensive two-month Digital Equity curriculum
                            using Canva. This curriculum was designed to empower community members with essential
                            digital skills, helping bridge the digital divide. The curriculum has been used in
                            classes of 25+ community members, providing them with the tools to navigate the digital
                            world more confidently.
                        </CenteredParagraph>

                        <BulletList>
                            <BulletItem>
                                Designed 8-week curriculum covering essential digital literacy skills
                            </BulletItem>
                            <BulletItem>
                                Created visually engaging materials in Canva for diverse learning styles
                            </BulletItem>
                            <BulletItem>
                                Structured content for classes of 25+ participants
                            </BulletItem>
                            <BulletItem>
                                Focused on practical skills: online safety, digital communication, and resource access
                            </BulletItem>
                        </BulletList>
                    </Phase>
                </Section>

                <HighlightSection>
                    <TitleWrapper>Impact & Results</TitleWrapper>
                    <CenteredParagraph>
                        The final platform became something staff and community members felt confident using.
                        Content updates that previously took weeks now take minutes. The platform successfully
                        serves over 3,000 community members with up-to-date access to economic development
                        programs and resources, all accessible from their mobile devices. Community members no
                        longer need to make bus trips to the front desk or phone calls just to get information—reducing
                        resource strain on both the organization and the community. Staff can independently maintain
                        and update content in Spanish and English without technical assistance, ensuring information
                        stays current and culturally relevant.
                    </CenteredParagraph>
                    <LiveLink
                        href="https://ecodev-website.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Live Platform
                    </LiveLink>
                </HighlightSection>

                <Section>
                    <TitleWrapper>Key Takeaways</TitleWrapper>
                    <CenteredParagraph>
                        This experience was a turning point in how I approach design and development. I learned
                        that designing for accessibility isn&apos;t an add-on—it has to shape the foundation of the
                        product from day one. My initial mistake taught me how critical it is to deeply understand
                        your users, especially when they come from different cultural or technical backgrounds than
                        your own. By admitting I had misjudged the needs of the user base and pivoting to a
                        user-centered approach, I was able to create a solution that staff and community members
                        felt confident using. The combination of stakeholder collaboration, appropriate technology
                        choices, and genuine empowerment created lasting impact that went far beyond the platform
                        itself.
                    </CenteredParagraph>
                </Section>
            </Container>
            <Footer />
        </>
    );
}
