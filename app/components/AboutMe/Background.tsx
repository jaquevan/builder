"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

const BackgroundContainer = styled.div`
    max-width: 900px;
    margin: 6rem auto;
    padding: 2rem;
    font-family: 'DM Sans', sans-serif;
    text-align: left;
    background: rgba(18, 18, 18, 0.7);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.08);
    animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #ffffff;
    position: relative;
    padding-bottom: 0.8rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #00843D, rgba(106, 13, 173, 0.7));
        border-radius: 2px;
    }
`;

const Section = styled.div`
    margin: 2.5rem 0;
    animation: ${fadeIn} 0.6s ease-out;
`;

const SectionTitle = styled.h2`
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #00843D;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 24px;
        background: #00843D;
        margin-right: 12px;
        border-radius: 3px;
    }
`;

const Text = styled.p`
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.85);
    max-width: 90%;
`;

const FirstGenSection = styled(Section)`
    background: rgba(0, 132, 61, 0.15);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid #00843D;
`;

const FirstGenText = styled(Text)`
    font-style: italic;
    font-weight: 500;
`;

export default function Background() {
    return (
        <BackgroundContainer>
            <Title>About Me</Title>
            <Section>
                <SectionTitle>Location</SectionTitle>
                <Text>
                    I am based in Boston, MA and Danbury, CT. As a student at Boston University,
                    I split my time between campus life in the vibrant city of Boston and my hometown
                    in Connecticut.
                </Text>
            </Section>
            <Section>
                <SectionTitle>Cultural Background</SectionTitle>
                <Text>
                    My family is from the Dominican Republic, and I was born and raised in the United States.
                    Growing up with such a vibrant culture has deeply influenced my values and outlook on life.
                    The rich traditions, music, and community-focused mindset have shaped my approach to both
                    personal connections and professional endeavors.
                </Text>
            </Section>
            <FirstGenSection>
                <SectionTitle>First Generation College Student</SectionTitle>
                <FirstGenText>
                    As a first-generation college student, Ive embraced both the challenges and opportunities
                    that come with charting a new path. This journey has instilled in me a deep appreciation for
                    education and a drive to make the most of every learning opportunity. Im passionate about
                    using my knowledge and skills to create technology that makes a meaningful difference.
                </FirstGenText>
            </FirstGenSection>
        </BackgroundContainer>
    );
}