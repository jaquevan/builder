'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';
import BackToProjects from '@/app/components/Projects/BackToProjects';
import Footer from '@/app/components/Footer';
import LCThumb from '../../../public/LC-thumb.png';

const Container = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 4rem 0;
`;

const ImageContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    height: 500px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        height: 300px;
    }
`;

const ComingSoonText = styled.h1`
    font-size: 3.5rem;
    color: var(--text-primary);
    font-weight: 600;
    text-align: center;
    font-family: 'JetBrains Mono', monospace;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const DotContainer = styled(motion.div)`
    display: flex;
    gap: 12px;
    margin: 1rem 0;
    justify-content: center;
    width: 100%;
`;

const Dot = styled(motion.span)`
    width: 12px;
    height: 12px;
    background-color: var(--text-primary);
    border-radius: 50%;
`;

export default function LaColaborativaCaseStudy() {
    return (
        <>
        <Container>
            <NavBar />
            <BackToProjects url="/projects" />
            <ContentWrapper>

                <div style={{ textAlign: 'center' }}>
                    <ComingSoonText>Coming Soon</ComingSoonText>
                    <DotContainer>
                        {[0, 1, 2].map((index) => (
                            <Dot
                                key={index}
                                animate={{
                                    y: [0, -12, 0],
                                    opacity: [1, 0.5, 1]
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </DotContainer>
                </div>

                <ImageContainer>
                    <Image
                        src={LCThumb}
                        alt="La Colaborativa Thumbnail"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </ImageContainer>

            </ContentWrapper>

        </Container>
    <Footer />
    </>
    );
}