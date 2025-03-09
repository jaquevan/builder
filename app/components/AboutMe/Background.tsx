"use client";

import styled from "styled-components";

const BackgroundContainer = styled.div`
    max-width: 800px;
    margin: 6rem auto;
    padding: 0 20px;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
`;

const Section = styled.div`
    margin: 1.5rem 0;
`;

const SectionTitle = styled.h2`
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    color: #444;
`;

const Text = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
    margin-bottom: 1rem;
`;

export default function Background() {
    return (
        <BackgroundContainer>
            <Title>About Me</Title>
            <Section>
                <SectionTitle>Cultural Background</SectionTitle>
                <Text>
                    I am from the Dominican Republic, a beautiful island nation in the Caribbean.
                    Growing up in such a vibrant culture has deeply influenced my values and outlook on life.
                </Text>
            </Section>
            <Section>
                <SectionTitle>Location</SectionTitle>
                <Text>
                    I am based in Boston, MA and Danbury, CT.
                    The diverse environment here has allowed me to connect with people from all walks of life.
                </Text>
            </Section>
            <Section>
                <SectionTitle>First Generation College Student</SectionTitle>
                <Text>
                    Being a first-generation college student has been a challenging yet rewarding journey.
                    This experience has shaped me into the person I am today and continues to drive me towards achieving my goals.
                </Text>
            </Section>
        </BackgroundContainer>
    );
}