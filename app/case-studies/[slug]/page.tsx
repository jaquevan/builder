'use client'

import NavBar from '@/app/components/NavBar';
import { useParams } from 'next/navigation';
import { Container, Typography, Box, Button } from '@mui/material';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import styled from 'styled-components';

// Import only what you need
import { getCaseStudyBySlug } from '@/lib/case-studies';

const HeroImage = styled(Box)`
    position: relative;
    width: 100%;
    height: 50vh;
    margin-bottom: 2rem;
`;

const CaseStudyTitle = styled(Typography)`
    font-weight: 700;
    margin-bottom: 1rem;
`;

const Section = styled(Box)`
    margin-bottom: 3rem;
`;

const BackButton = styled(Button)`
    margin-bottom: 2rem;
    color: #333;
    background-color: transparent;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 8px 16px;
    text-transform: none;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        transform: translateX(-4px);
    }
`;

export default function CaseStudyPage() {
    const { slug } = useParams();
    const caseStudy = getCaseStudyBySlug(slug as string);

    if (!caseStudy) {
        return <Box>Case study not found</Box>;
    }

    return (
        <>
            <NavBar/>
            <Container maxWidth="md" sx={{ py: 6 }}>

                <Link href="/projects" passHref>
                    <BackButton startIcon={<ArrowBackIcon />}>
                        Back to Projects
                    </BackButton>
                </Link>

                <HeroImage>
                    <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </HeroImage>

                <CaseStudyTitle variant="h3">{caseStudy.title}</CaseStudyTitle>

                <Section>
                    <Typography variant="h5" gutterBottom>Overview</Typography>
                    <Typography variant="body1">
                        {caseStudy.description}
                    </Typography>
                </Section>

            </Container>
        </>
    );
}