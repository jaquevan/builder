"use client";

import { useTheme } from '@/app/contexts/ThemeContext';
import { useEffect } from 'react';

export default function ThemeMetaTags() {
    const { isDarkMode, mounted } = useTheme();

    useEffect(() => {
        if (!mounted) return;

        // Update theme-color meta tag
        const themeColor = isDarkMode ? '#1a1a1a' : '#ffffff';
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', themeColor);
        } else {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            metaThemeColor.setAttribute('content', themeColor);
            document.head.appendChild(metaThemeColor);
        }
    }, [isDarkMode, mounted]);

    return null;
}
