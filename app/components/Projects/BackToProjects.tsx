'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface BackToProjectsProps {
    url?: string;
}

const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    margin-bottom: 24px;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 500;
    font-size: 14px;
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #666666;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: #333333;
        transform: translateX(-4px);
    }

    @media (prefers-color-scheme: dark) {
        color: #a0a0a0;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: #8d61ff;
        }
    }

    &:focus {
        outline: 2px solid #4a90e2;
        outline-offset: 2px;
    }
`;


export default function BackToProjects({ url = '/case-studies' }: BackToProjectsProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(url);
    };

    return (
        <BackButton onClick={handleClick}>
            Back to Projects
        </BackButton>
    );
}