"use client"

import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ToggleButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--background);
    color: var(--text-primary);
    border: 2px solid var(--border);
    cursor: pointer;
    z-index: 1000;

    &:hover {
        transform: scale(1.05);
        background: forestgreen;
        box-shadow: 0 4px 12px var(--shadow-purple);
    }

    @media (max-width: 768px) {
        width: 35px;
        height: 35px;
        border-width: 1.5px;
    }

    @media (max-width: 480px) {
        width: 30px;
        height: 30px;

        &:hover {
            transform: scale(1.03);
        }
    }

    @media (max-width: 375px) {
        width: 28px;
        height: 28px;
        border-width: 1px;
    }
`;

export default function ThemeToggle() {
    const { isDarkMode, toggleTheme, mounted } = useTheme();

    return (
        <ToggleButton onClick={toggleTheme} aria-label="Toggle theme" suppressHydrationWarning>
            {mounted ? (
                isDarkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />
            ) : (
                <DarkModeIcon fontSize="small" />
            )}
        </ToggleButton>
    );
}