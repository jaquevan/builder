"use client"

import styled from "styled-components";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

const NavContainer = styled.nav`
    width: 45vw;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: unset;
    top: 0;
    border-radius: 55px;
    margin: 2% auto;
    z-index: 100;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    @media (max-width: 1024px) {
        width: 70vw;
    }

    @media (max-width: 768px) {
        width: 85vw;
        border-radius: 40px;
    }

    @media (max-width: 480px) {
        width: 90vw;
        border-radius: 30px;
    }

    @media (max-width: 375px) {
        width: 90vw;
    }
`;

const NavContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        padding: 0 10px;
    }
`;

const ThemeToggleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    flex-grow: 1;
`;

const NavItem = styled.li`
    position: relative;
    margin: 0;
    padding: 0;
`;

const StyledLink = styled(Link)`
    display: block;
    padding: 1.2rem 1.8rem;
    text-decoration: none;
    color: ${props => props.$isActive ? 'var(--primary)' : 'var(--text-primary)'};
    font-family: "Arial", "Helvetica", sans-serif;
    font-size: 1rem;
    font-weight: ${props => props.$isActive ? '600' : '500'};
    letter-spacing: 0.5px;
    transition: color 0.25s ease, background-color 0.25s ease;
    position: relative;

    &:hover {
        color: var(--primary);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${props => props.$isActive ? 'linear-gradient(90deg, var(--secondary), var(--primary))' : 'transparent'};
        transform: ${props => props.$isActive ? 'scaleX(1)' : 'scaleX(0)'};
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    &:hover::after {
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        transform: scaleX(1);
    }

    @media (max-width: 768px) {
        padding: 1rem 1rem;
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        padding: 0.8rem 0.4rem;
        font-size: 0.7rem;
    }

    @media (max-width: 375px) {
        padding: 0.6rem 0.4rem;
        font-size: 0.75rem;
    }
`;

export default function NavBar() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/design", label: "Design" },
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
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