import styled from 'styled-components';
import { Typography } from '@mui/material';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #333;
    color: white;
    width: 100%;
`;

const Section = styled.div`
    margin-bottom: 2rem;
`;

const SectionTitle = styled(Typography)`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const SectionContent = styled(Typography)`
    font-size: 1rem;
    line-height: 1.5;
`;

export default function Content() {
    return (
        <ContentContainer>
            <Section>
                <SectionTitle variant="h2">Work Experience</SectionTitle>
                <SectionContent variant="body1">
                    <p>Blue Dev Digital - Frontend Designer</p>
                    <p>ONC - Software Engineer Intern</p>
                </SectionContent>
            </Section>
            <Section>
                <SectionTitle variant="h2">Education</SectionTitle>
                <SectionContent variant="body1">
                    <p>Boston University - Computer Science and Economics (2023-2026)</p>
                </SectionContent>
            </Section>
            <Section>
                <SectionTitle variant="h2">About</SectionTitle>
                <SectionContent variant="body1">
                    <p>This is a brief description about the individual. It includes their background, interests, and other relevant information.</p>
                </SectionContent>
            </Section>
        </ContentContainer>
    );
}