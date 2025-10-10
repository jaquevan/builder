"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
`;

const BackgroundContainer = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 4rem auto;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    animation: ${fadeIn} 0.6s ease-out;

    @media screen and (max-width: 768px) {
        width: 95%;
        margin: 2rem auto;
    }
`;

const Title = styled.h1`
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: 3rem;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    color: #ffffff;
    text-align: center;

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

const CardsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
        gap: 1.5rem;
    }
`;

const Card = styled.div`
    background: rgba(18, 18, 18, 0.6);
    border-radius: 12px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: ${slideIn} 0.6s ease-out;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const SectionTitle = styled.h2`
    font-size: clamp(1.3rem, 2.5vw, 1.6rem);
    margin-bottom: 1rem;
    font-weight: 600;
    color: #00843D;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 24px;
        background: #00843D;
        border-radius: 3px;
        flex-shrink: 0;
    }
`;

const Text = styled.p`
    font-size: clamp(1rem, 1.8vw, 1.1rem);
    line-height: 1.8;
    margin: 0;
    color: rgba(255, 255, 255, 0.88);
`;

const FirstGenCard = styled(Card)`
    background: rgba(18, 18, 18, 0.6);
    border: 1px solid rgba(0, 132, 61, 0.3);
`;

const FirstGenTitle = styled(SectionTitle)`
    color: #00843D;
    font-size: clamp(1.4rem, 2.8vw, 1.8rem);
    margin-bottom: 1.25rem;
`;

const FirstGenText = styled(Text)`
    font-weight: 500;
    color: rgba(255, 255, 255, 0.92);
    font-size: clamp(1.05rem, 2vw, 1.15rem);
`;

export default function Background() {
    return (
        <BackgroundContainer>
            <Title>About Me</Title>
            <CardsGrid>
                <Card>
                    <SectionTitle>Location</SectionTitle>
                    <Text>
                        Based in Boston, MA and Danbury, CT. As a student at Boston University,
                        I split my time between campus life in the vibrant city of Boston and my hometown
                        in Connecticut.
                    </Text>
                </Card>
                <Card>
                    <SectionTitle>Cultural Background</SectionTitle>
                    <Text>
                        My family is from the Dominican Republic, and I was born and raised in the United States.
                        Growing up with such a vibrant culture has deeply influenced my values and outlook on life.
                        The rich traditions, music, and community-focused mindset have shaped my approach to both
                        personal connections and professional endeavors.
                    </Text>
                </Card>
                <FirstGenCard>
                    <FirstGenTitle>First Generation College Student</FirstGenTitle>
                    <FirstGenText>
                        As a first-generation college student, I&apos;ve embraced both the challenges and opportunities
                        that come with charting a new path. This journey has instilled in me a deep appreciation for
                        education and a drive to make the most of every learning opportunity. I&apos;m passionate about
                        using my knowledge and skills to create technology that makes a meaningful difference.
                    </FirstGenText>
                </FirstGenCard>
            </CardsGrid>
        </BackgroundContainer>
    );
}