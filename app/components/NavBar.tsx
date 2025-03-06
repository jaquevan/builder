"use client"

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";



const NavContainer = styled.nav`
    width: 40vw;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    border-radius: 50px;
    margin: 2% auto;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: black;

`;

const NavContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

`;


const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
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
    color: ${props => props.$isActive ? '#00843D' : '#111111'};    font-family: "Arial", "Helvetica", sans-serif;
    font-size: 1rem;
    font-weight: ${props => props.$isActive ? '600' : '500'};
    letter-spacing: 0.5px;
    transition: color 0.25s ease, background-color 0.25s ease;
    position: relative;

    &:hover {
        color: #00843D;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${props => props.$isActive ? 'linear-gradient(90deg, rebeccapurple, #00843D)' : 'transparent'};
        transform: ${props => props.$isActive ? 'scaleX(1)' : 'scaleX(0)'};
        transform-origin: left;
        transition: transform 0.3s ease;
    }


    &:hover::after {
        background: linear-gradient(90deg, #00843B, rebeccapurple);
        transform: scaleX(1);
    }

    @media (max-width: 768px) {
        padding: 1rem 1.2rem;
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        padding: 0.8rem 0.6rem;
        font-size: 0.8rem;
    }
`;

const ActiveIndicator = styled.span`
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rebeccapurple;
    opacity: ${props => props.$isActive ? '1' : '0'};
    transition: opacity 0.25s ease;
`;

export default function NavBar() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/design", label: "Design" },
        { href: "/projects", label: "Projects" },
        { href: "/demo", label: "Demos" },
    ];

    return (
        <NavContainer>
            <NavContent>
                <NavList>
                    {navItems.map((item) => (
                        <NavItem key={item.href}>
                            <StyledLink
                                href={item.href}
                                $isActive={pathname === item.href}
                            >
                                {item.label}
                                <ActiveIndicator $isActive={pathname === item.href} />
                            </StyledLink>
                        </NavItem>
                    ))}
                </NavList>
            </NavContent>
        </NavContainer>
    );
}