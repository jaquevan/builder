import styled, { keyframes } from "styled-components";
import { Paper, Avatar, Typography, Link } from "@mui/material";

// animations

export const slideIn = keyframes`
    from { transform: translateY(0.625rem); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
`;

// colors
export const MBTAColors = {
    green: "#00843D",
    red: "#DA291C",
    orange: "#ED8B00",
    blue: "#003DA5",
    yellow: "#FCB61A",
    silver: "#7C878E",
    black: "#231F20",
    lightGray: "#F2F2F2",
};

// type for StatItem color prop
interface StatItemProps {
    $color?: string;
}

// styled components

// this holds the stats cards
export const StationPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    background-color: ${MBTAColors.lightGray};
    padding: 0;
    border-radius: 0.75rem;
    width: 100%;
    max-width: 31.25rem; // 500px equivalent
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    overflow: hidden;
    animation: ${slideIn} 0.4s ease-out;
    transform-origin: top center;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        margin: 0 auto;
    }
`;


export const StationHeader = styled.div`
    background-color: ${MBTAColors.green};
    color: white;
    padding: 0.75rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    @media (max-width: 480px) {
        padding: 0.6rem 1rem;
    }
`;

export const StationName = styled(Typography)`
    font-size: 1.15rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;


export const ProfileSection = styled.div`
    display: flex;
    padding: 1rem 1.25rem;
    align-items: center;
    gap: 1.25rem;
    background-color: white;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    @media (max-width: 480px) {
        padding: 0.8rem 1rem;
        gap: 1rem;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const StyledAvatar = styled(Avatar)`
    width: 4.5rem;
    height: 4.5rem;
    border: 0.1875rem solid ${MBTAColors.green};
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
        width: 3.125rem;
        height: 3.125rem;
        border-width: 0.125rem;
    }
`;

// list of technologies used
export const InfoBoard = styled.div`
    background-color: #5a5c62;
    padding: 0.75rem;
    position: relative;
    font-weight: 800;
    height: 2.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    @media (max-width: 480px) {
        height: 2.2rem;
        padding: 0.5rem;
    }
`;


export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 1rem;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    @media (max-width: 480px) {
        gap: 0.6rem;
        padding: 0.8rem;
    }
`;

export const StatItem = styled.div<StatItemProps>`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.75rem;
    border-left: 0.25rem solid ${props => props.$color || MBTAColors.green};
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    &:hover {
        transform: translateY(-0.125rem);
        transition: transform 0.1s ease;
    }

    @media (max-width: 480px) {
        padding: 0.6rem;
    }
`;

export const StatHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.25rem;
`;

export const StatTitle = styled.span`
    font-size: 0.8rem;
    color: ${MBTAColors.black};
    font-weight: 500;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    @media (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

export const StatValue = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${MBTAColors.black};
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const DirectionSign = styled(Link)`
    display: flex;
    background-color: #5a5c62;
    color: white;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    cursor: pointer;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;

    &:hover {
        background-color: #000000;
        text-decoration: none;
        color: ${MBTAColors.yellow};
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0.4rem 0.6rem;
    }
`;

export const TickerTape = styled.div`
    background-color: ${MBTAColors.green};
    height: 0.3125rem;
`;

export const LastCommitTicker = styled.div`
    background-color: black;
    color: #FFFF00;
    padding: 0.4rem;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;
    font-size: 0.85rem;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 0.3rem;
    }
`;

export const TimeDisplay = styled.div`
    color: white;
    font-family: 'JetBrains Mono', 'Roboto Mono', monospace;
    font-size: 1.1rem;
    font-weight: 500;

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18.75rem;
    width: 100%;
`;