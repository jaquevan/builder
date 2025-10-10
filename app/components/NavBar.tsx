"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

interface StyledLinkProps {
    $isActive: boolean;
}

const slideInFromTop = keyframes`
    0% {
        transform: translateY(-10px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const NavContainer = styled.nav`
    width: 40%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    margin: 2% auto;
    z-index: 100;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    animation: ${slideInFromTop} 0.3s ease-out forwards;
    backdrop-filter: blur(8px);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 768px) {
        width: 85%;
        border-radius: 40px;
    }

    @media (max-width: 480px) {
        width: 95%;
        border-radius: 30px;
    }
`;

const NavContent = styled.div`
    display: flex;
    align-items: center;
    padding: 0 12px;
`;

const ThemeToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;
    animation: ${fadeIn} 0.4s ease-in;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 600px) {
        transform: scale(0.9);
    }
`;

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex: 1;
`;

const NavItem = styled.li`
    flex: 1;
    text-align: center;
    animation: ${fadeIn} 0.3s ease-in;
    animation-fill-mode: both;

    &:nth-child(1) { animation-delay: 0.05s; }
    &:nth-child(2) { animation-delay: 0.1s; }
    &:nth-child(3) { animation-delay: 0.15s; }
    &:nth-child(4) { animation-delay: 0.2s; }
    &:nth-child(5) { animation-delay: 0.25s; }
`;

const StyledLink = styled(Link)<StyledLinkProps>`
    display: block;
    padding: 1.2rem 0.5rem;
    text-decoration: none;
    color: ${props => props.$isActive ? 'var(--primary)' : 'var(--text-primary)'};
    font-family: "Arial", "Helvetica", sans-serif;
    font-size: 0.95rem;
    font-weight: ${props => props.$isActive ? '700' : '500'};
    transition: color 0.2s ease;
    position: relative;
    white-space: nowrap;

    &:hover {
        color: var(--primary);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: ${props => props.$isActive ? '70%' : '0'};
        border-radius: 18px;
        height: 3px;
        background: ${props => props.$isActive ? 'var(--primary)' : 'var(--primary)'};
        opacity: ${props => props.$isActive ? '1' : '0'};
        transition: width 0.25s ease, opacity 0.25s ease;
    }

    &:hover::after {
        width: 70%;
        opacity: 1;
    }

    @media (max-width: 768px) {
        padding: 1rem 0.3rem;
        font-size: 0.85rem;
    }

    @media (max-width: 480px) {
        padding: 0.8rem 0.2rem;
        font-size: 0.75rem;
    }
`;

export default function NavBar() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        // { href: "/contact", label: "Contact" },
    ];

    return (
        <NavContainer>
            <NavContent>
                <ThemeToggleWrapper>
                    <ThemeToggle />
                </ThemeToggleWrapper>
                <NavList>
                    {navItems.map((item) => (
                        <NavItem key={item.href}>
                            <StyledLink
                                href={item.href}
                                $isActive={pathname === item.href}
                            >
                                {item.label}
                            </StyledLink>
                        </NavItem>
                    ))}
                </NavList>
            </NavContent>
        </NavContainer>
    );
}