'use client'

import { Container, Typography, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

// Import all images
import LC from '@/public/LC-thumb.png';
import MapleImage from '@/public/MAPLE-thumb.png';
import BostonVoterImage from '@/public/BV-thumb.png';
import WordWyrmImage from '@/public/WW-thumb.png';

// Styled components
const SectionTitle = styled(Typography)({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '1rem 0',
    paddingBottom: '2rem',
    fontFamily: "'JetBrains Mono', monospace",
    textAlign: 'center',
    '@media (max-width: 600px)': {
        fontSize: '2rem',
    }
});

const ProjectCard = styled(Card)(({ theme }) => ({
    borderRadius: 7,
    overflow: "hidden",
    marginBottom: theme.spacing(4),
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9", // keeps cards consistent, responsive
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
    },
}));


// Case Studies data
const caseStudies = [
    {
        id: 1,
        title: 'MAPLE 3.0',
        image: MapleImage,
        link: '/case-studies/maple',
    },
    {
        id: 2,
        title: 'Boston Voter',
        image: BostonVoterImage,
        link: '/case-studies/bv',
    },
    {
        id: 3,
        title: 'La Colaborativa',
        image: LC,
        link: '/case-studies/lc',
    },
    {
        id: 4,
        title: 'Word Wyrm',
        image: WordWyrmImage,
        link: '/case-studies/ww',
    },
];

export default function CaseStudies() {
    return (
        <Box component="section" sx={{ py: 1 }}>
            <Container maxWidth="md">
                <SectionTitle variant="h1">UX Case Studies</SectionTitle>

                {caseStudies.map((project) => (
                    <Link key={project.id} href={project.link} style={{ textDecoration: 'none' }}>
                        <ProjectCard style={{ backgroundImage: `url(${project.image.src})` }} />
                        </Link>
                ))}
            </Container>
        </Box>
    );
}