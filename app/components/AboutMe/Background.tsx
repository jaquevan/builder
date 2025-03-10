"use client";

import styled from "styled-components";

const BackgroundContainer = styled.div`
    max-width: 800px;
    margin: 6rem 0;
    padding: 0 20px;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const Section = styled.div`
    margin: 1.5rem 0;
`;

const SectionTitle = styled.h2`
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
`;

const Text = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`;

export default function Background() {
    return (
        <BackgroundContainer>
            <Title>About Me</Title>
            <Section>
                <SectionTitle>Location</SectionTitle>
                <Text>
                    I am based in Boston, MA and Danbury, CT.
                </Text>
            </Section>
            <Section>
                <SectionTitle>Cultural Background</SectionTitle>
                <Text>
                    My family is from the Dominican Republic, and I was born and raised in the United States.
                    Growing up with such a vibrant culture has deeply influenced my values and outlook on life.
                </Text>
            </Section>
            <Section>
                <SectionTitle>First Generation College Student</SectionTitle>
            </Section>
        </BackgroundContainer>
    );
}