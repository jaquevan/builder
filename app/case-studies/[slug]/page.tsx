'use client'

import NavBar from '@/app/components/NavBar';
import { useParams } from 'next/navigation';
import { Container, Typography, Box, Button, Chip } from '@mui/material';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';
import styled from 'styled-components';

import { getCaseStudyBySlug } from '@/lib/case-studies';

// --- Styled Components ---
const HeroImage = styled(Box)`
    position: relative;
    width: 100%;
    height: 40vh; /* Reduced slightly for better mobile experience */
    margin-bottom: 2rem;
    border-radius: 12px;
    overflow: hidden;

    @media (max-width: 600px) {
        height: 30vh; /* Even smaller on mobile */
    }
`;

const CaseStudyTitle = styled(Typography)`
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 2.5rem;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
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
            <NavBar />
            <Container maxWidth="md" sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, md: 3 } }}>
                <Link href="/projects" passHref>
                    <BackButton startIcon={<ArrowBackIcon />}>
                        Back to Projects
                    </BackButton>
                </Link>

                {/* Hero */}
                <HeroImage>
                    <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </HeroImage>

                <CaseStudyTitle variant="h3">{caseStudy.title}</CaseStudyTitle>

                {/* Tags */}
                {caseStudy.tags && (
                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {caseStudy.tags.map((tag: string, index: number) => (
                            <Chip key={index} label={tag} size="small" />
                        ))}
                    </Box>
                )}

                {/* Overview */}
                <Section>
                    <Typography variant="h5" gutterBottom>
                        Overview
                    </Typography>
                    <Typography variant="body1">{caseStudy.description}</Typography>
                </Section>

                {/* Define */}
                {caseStudy.define && (
                    <Section>
                        <Typography variant="h5" gutterBottom>
                            Define
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {caseStudy.define.image && (
                                <Box sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: { xs: 200, sm: 250, md: 300 }
                                }}>
                                    <Image
                                        src={caseStudy.define.image}
                                        alt="Define phase"
                                        fill
                                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                </Box>
                            )}
                            <Typography variant="body1">{caseStudy.define.text}</Typography>
                        </Box>
                    </Section>
                )}

                {/* Discovery */}
                {caseStudy.discovery && (
                    <Section>
                        <Typography variant="h5" gutterBottom>
                            Discovery
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 3,
                                alignItems: { xs: 'flex-start', md: 'center' },
                            }}
                        >
                            {caseStudy.discovery.image && (
                                <Box
                                    sx={{
                                        width: { xs: '100%', md: '60%' },
                                        position: 'relative',
                                        height: { xs: 200, sm: 250, md: 300 },
                                        order: { xs: 1, md: 1 }
                                    }}
                                >
                                    <Image
                                        src={caseStudy.discovery.image}
                                        alt="Discovery phase"
                                        fill
                                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                </Box>
                            )}
                            <Typography
                                variant="body1"
                                sx={{
                                    width: { xs: '100%', md: '40%' },
                                    order: { xs: 2, md: 2 },
                                    mt: { xs: 2, md: 0 }
                                }}
                            >
                                {caseStudy.discovery.text}
                            </Typography>
                        </Box>
                    </Section>
                )}

                {/* Design */}
                {caseStudy.design && (
                    <Section>
                        <Typography variant="h5" gutterBottom>
                            Design
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {caseStudy.design.text}
                        </Typography>
                        {Array.isArray(caseStudy.design.images) && (
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                                gap: 2
                            }}>
                                {caseStudy.design.images.map((img, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            height: { xs: 200, sm: 220, md: 250 },
                                            mb: 2
                                        }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Design mockup ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Section>
                )}

                {/* Deliver */}
                {caseStudy.deliver && (
                    <Section>
                        <Typography variant="h5" gutterBottom>
                            Deliver
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: 3,
                                alignItems: { xs: 'flex-start', md: 'center' },
                            }}
                        >
                            {caseStudy.deliver.image && (
                                <Box
                                    sx={{
                                        width: { xs: '100%', md: '60%' },
                                        position: 'relative',
                                        height: { xs: 200, sm: 250, md: 300 },
                                    }}
                                >
                                    <Image
                                        src={caseStudy.deliver.image}
                                        alt="Deliver phase"
                                        fill
                                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                                    />
                                </Box>
                            )}
                            <Typography
                                variant="body1"
                                sx={{
                                    width: { xs: '100%', md: '40%' },
                                    mt: { xs: 2, md: 0 }
                                }}
                            >
                                {caseStudy.deliver.text}
                            </Typography>
                        </Box>
                    </Section>
                )}

                {/* Presentation */}
                {caseStudy.presentation && (
                    <Section>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h5">Presentation</Typography>
                            <Button
                                variant="outlined"
                                size="small"
                                href={caseStudy.presentation}
                                download
                                startIcon={<DownloadIcon />}
                            >
                                Download PDF
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: '400px', sm: '500px', md: '600px' },
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                mb: 2
                            }}
                        >
                            <iframe
                                src={caseStudy.presentation}
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                                title={`${caseStudy.title} Presentation`}
                            />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            You can use the controls in the PDF viewer to navigate through the presentation.
                        </Typography>
                    </Section>
                )}
            </Container>
        </>
    );
}