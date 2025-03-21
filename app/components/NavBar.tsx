"use client";

import styled from "styled-components";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

interface StyledLinkProps {
    $isActive: boolean;
}

const NavContainer = styled.nav`
    width: 40%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    margin: 2% auto;
    z-index: 100;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

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
        left: 0;
        width: 99%;
        border-radius: 18px;
        height: 3px;
        background: ${props => props.$isActive ? 'purple' : 'transparent'};
        transform: ${props => props.$isActive ? 'scaleX(1.1)' : 'scaleX(0)'};
        transform-origin: center;
        transition: transform 0.35s ease;
    }

    &:hover::after {
        background: ${props => props.$isActive ? 'purple' : 'linear-gradient(90deg, var(--primary), var(--secondary))'};
        transform: ${props => props.$isActive ? ' scaleX(1)' : ' scaleX(1)'};
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
        { href: "/about", label: "About" },
        { href: "/experience", label: "Experience" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
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