"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% { opacity: 0; transform: scale(0.95) translateY(30px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
`;

const BackgroundContainer = styled.div`
    max-width: 1200px;
    width: 100vw;
    min-width: 0;
    margin: 4rem auto;
    padding: 0 2vw;
    font-family: 'DM Sans', sans-serif;
    animation: ${fadeIn} 0.6s cubic-bezier(0.4,0,0.2,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        width: 100vw;
        margin: 0 auto;
        padding: 0 2vw;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        width: 100vw;
        margin: 0 auto;
        padding: 0 2vw;
        text-align: center;
    }
`;

const Title = styled.h1`
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: 2rem;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
    text-align: center;
`;

const CardsGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
    width: 100%;
    align-items: center;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        align-items: center;
        width: 100%;
        box-sizing: border-box;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        box-sizing: border-box;
    }
`;

const Card = styled.div`
    background: rgba(18, 18, 18, 0.7);
    border-radius: 12px;
    padding: 1.5rem;
    border: none;
    animation: ${fadeIn} 0.7s cubic-bezier(0.4,0,0.2,1);
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        padding: 1rem;
        max-width: 98vw;
        text-align: center;
        box-sizing: border-box;
    }
    @media screen and (max-width: 480px) {
        padding: 0.7rem;
        max-width: 98vw;
        font-size: 0.95rem;
        box-sizing: border-box;
    }
`;

const SectionTitle = styled.h2`
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    margin-bottom: 0.7rem;
    font-weight: 600;
    color: #fff;
    text-align: left;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.05rem;
        text-align: center;
    }
`;

const Text = styled.p`
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    line-height: 1.7;
    margin: 0;
    color: #eaeaea;
    text-align: left;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
    @media screen and (max-width: 480px) {
        font-size: 0.95rem;
        text-align: center;
    }
`;

const FirstGenCard = styled(Card)`
    background: rgba(18, 18, 18, 0.8);
    border: none;
`;

const FirstGenTitle = styled(SectionTitle)`
    color: #fff;
    font-size: clamp(1.25rem, 2vw, 1.6rem);
    margin-bottom: 1rem;
`;

const FirstGenText = styled(Text)`
    font-weight: 500;
    color: #f5f5f5;
    font-size: clamp(1.05rem, 1.7vw, 1.15rem);
`;

export default function Background() {
    return (
        <BackgroundContainer>
            <Title>About Me</Title>
            <CardsGrid>
                <Card>
                    <SectionTitle>Location</SectionTitle>
                    <Text>Boston, MA & Danbury, CT.</Text>
                </Card>
                <Card>
                    <SectionTitle>Cultural Background</SectionTitle>
                    <Text>
                        My family is from the Dominican Republic, and I was born and raised in the US. The vibrant culture and community have shaped my values and outlook.
                    </Text>
                </Card>
                <FirstGenCard>
                    <FirstGenTitle>First Generation College Student</FirstGenTitle>
                    <FirstGenText>
                        As a first-generation college student, I&apos;ve embraced both the challenges and opportunities that come with charting a new path. This journey has instilled in me a deep appreciation for education and a drive to make the most of every learning opportunity. I&apos;m passionate about using my knowledge and skills to create technology that makes a meaningful difference.
                    </FirstGenText>
                </FirstGenCard>
            </CardsGrid>
        </BackgroundContainer>
    );
}