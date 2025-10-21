"use client";

import { useState, useEffect } from "react";
import { Typography, CircularProgress } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import StarIcon from "@mui/icons-material/Star";
import GitHubIcon from "@mui/icons-material/GitHub";
import TechIcons from "./TechIcons";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
`;

// Styled components
const StatusCard = styled.div`
    background: rgba(18, 18, 18, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    max-width: 500px;
    width: 100%;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    animation: ${fadeIn} 0.4s ease-out;

    @media (max-width: 1024px) {
        max-width: 450px;
        margin: 0.3vh auto;
    }

    @media (max-width: 600px) {
        border-radius: 10px;
        max-width: 100%;
        margin: 0.5vh auto;
    }

    @media (max-width: 480px) {
        margin: 0.3vh auto;
        max-width: 95%;
    }

    @media (max-width: 430px) {
        margin: 0.25vh auto;
        max-width: 96%;
    }

    @media (max-width: 393px) {
        margin: 0.2vh auto;
        max-width: 97%;
    }

    @media (max-width: 375px) {
        max-width: 98%;
        margin: 0.15vh auto;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2));
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    @media (max-width: 1024px) {
        padding: 10px 14px;
    }

    @media (max-width: 600px) {
        padding: 10px 14px;
    }

    @media (max-width: 480px) {
        padding: 8px 12px;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    color: #FFFFFF;
    font-family: "JetBrains Mono", monospace;
`;

const Profile = styled.a`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: rgba(255, 255, 255, 0.05);
    }

    @media (max-width: 1024px) {
        padding: 6px;
        gap: 6px;
    }

    @media (max-width: 600px) {
        padding: 6px;
    }

    @media (max-width: 480px) {
        padding: 5px;
    }
`;

const Avatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #00843D, #6cc644);
    padding: 2px;

    @media (max-width: 1024px) {
        width: 38px;
        height: 38px;
    }

    @media (max-width: 600px) {
        width: 40px;
        height: 40px;
    }
`;

const UserDetails = styled.div`
    flex: 1;
    overflow: hidden;
`;

const Bio = styled.div`
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.6);
    font-family: "JetBrains Mono", monospace;
    margin-top: 4px;
    font-style: italic;
    line-height: 1.4;

    &::before {
        content: '— ';
        color: rgba(255, 255, 255, 0.5);
    }

    &::after {
        content: '';
        color: rgba(255, 255, 255, 0.5);
    }


`;

const IconsContainer = styled.div`
    padding: 8px 0;
    overflow: hidden;

    @media (max-width: 1024px) {
        padding: 4px 0;
    }

    @media (max-width: 480px) {
        padding: 3px 0;
    }

    @media (max-width: 393px) {
        padding: 2px 0;
    }
`;

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 7px;

    @media (max-width: 1024px) {
        padding: 5px;
        gap: 6px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        padding: 6px;
        gap: 8px;
    }

    @media (max-width: 480px) {
        padding: 4px;
        gap: 5px;
    }

    @media (max-width: 430px) {
        padding: 3px;
        gap: 4px;
    }

    @media (max-width: 393px) {
        padding: 3px;
        gap: 4px;
    }
`;

const StatBox = styled.div`
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
    padding: 10px 12px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 1024px) {
        padding: 6px 8px;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        padding: 8px 10px;
        border-radius: 8px;
    }

    @media (max-width: 480px) {
        padding: 6px 8px;
    }
`;

const StatBoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
`;

const StatLabel = styled.div`
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;

    @media (max-width: 480px) {
        font-size: 0.6rem;
    }

    @media (max-width: 393px) {
        font-size: 0.55rem;
    }
`;

const StatValueText = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    color: #FFFFFF;
    font-family: "JetBrains Mono", monospace;

    @media (max-width: 600px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }

    @media (max-width: 393px) {
        font-size: 0.85rem;
    }
`;

const HeatmapContainer = styled.div`
    padding: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    @media (max-width: 1024px) {
        padding: 10px;
    }

    @media (max-width: 768px) {
        padding: 12px;
    }

    @media (max-width: 480px) {
        padding: 8px;
    }

    @media (max-width: 430px) {
        padding: 7px;
    }

    @media (max-width: 393px) {
        padding: 6px;
    }

    @media (max-width: 375px) {
        padding: 5px;
    }
`;

const HeatmapTitle = styled.div`
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 480px) {
        font-size: 0.7rem;
        margin-bottom: 8px;
        gap: 6px;
    }

    @media (max-width: 393px) {
        font-size: 0.65rem;
        margin-bottom: 6px;
        gap: 5px;
    }
`;

const HeatmapWrapper = styled.div`
    width: 100%;
    overflow-x: auto;

    img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        filter: brightness(1.1);
    }

    &::-webkit-scrollbar {
        height: 6px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
    }
`;

const Link = styled.a`
    display: block;
    text-align: right;
    padding: 10px 18px;
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.2s, transform 0.2s;

    &:hover {
        color: #6cc644;
        transform: translateX(3px);
    }

    @media (max-width: 1024px) {
        padding: 6px 12px;
        font-size: 0.85rem;
    }

    @media (max-width: 768px) {
        padding: 8px 14px;
        font-size: 0.85rem;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 0.8rem;
    }
`;

const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

interface UserProfile {
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    created_at: string;
}

export default function GitHubStatus() {
    // state variables
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [languages, setLanguages] = useState('TypeScript');

    const username = "jaquevan";
    const repos = 27;
    const streak = 13;

    // fetch github data
    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true);

                // Fetch user profile
                const profileResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!profileResponse.ok) {
                    throw new Error('GitHub API error');
                }
                const profileData = await profileResponse.json();

                // Update state
                setUserProfile(profileData);
                setLanguages('TypeScript');

                setLoading(false);
            } catch (err) {
                console.error('Error fetching GitHub data:', err);
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, [username]);

    if (loading) {
        return (
            <StatusCard>
                <CardHeader>
                    <Title><GitHubIcon sx={{ mr: 1, fontSize: "1.1rem" }} /> GitHub</Title>
                </CardHeader>
                <LoadingWrapper>
                    <CircularProgress size={30} sx={{ color: "#00843D" }} />
                </LoadingWrapper>
            </StatusCard>
        );
    }

    return (
        <StatusCard>
            <CardHeader>
                <Title><GitHubIcon sx={{ mr: 1, fontSize: "1.1rem" }} /> GitHub</Title>
            </CardHeader>

            <Profile href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                <Avatar
                    src={userProfile?.avatar_url || "https://avatars.githubusercontent.com/u/144175083?v=4"}
                    alt={username}
                />
                <UserDetails>
                    <Typography variant="subtitle1" sx={{
                        fontWeight: 600,
                        fontSize: '1rem',
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#FFFFFF"
                    }}>
                        jaquevan
                    </Typography>
                    {userProfile?.bio && (
                        <Bio>{userProfile.bio}</Bio>
                    )}
                </UserDetails>
            </Profile>

            <IconsContainer>
                <TechIcons />
            </IconsContainer>

            <HeatmapContainer>
                <HeatmapTitle>
                    <CodeIcon fontSize="small" sx={{ color: "#58a6ff" }} />
                    Contribution Activity
                </HeatmapTitle>
                <HeatmapWrapper>
                    <img
                        src={`https://ghchart.rshah.org/00843D/${username}`}
                        alt="GitHub Contribution Chart"
                    />
                </HeatmapWrapper>
            </HeatmapContainer>

            <StatsContainer>
                <StatBox>
                    <StatBoxHeader>
                        <StatLabel>Repositories</StatLabel>
                        <StorageIcon fontSize="small" sx={{ color: "#6cc644" }} />
                    </StatBoxHeader>
                    <StatValueText>{repos}</StatValueText>
                </StatBox>

                <StatBox>
                    <StatBoxHeader>
                        <StatLabel>Longest Streak</StatLabel>
                        <StarIcon fontSize="small" sx={{ color: "#3d30f3" }} />
                    </StatBoxHeader>
                    <StatValueText>{streak}</StatValueText>
                </StatBox>

                <StatBox>
                    <StatBoxHeader>
                        <StatLabel>Language</StatLabel>
                        <TerminalIcon fontSize="small" sx={{ color: "#a371f7" }} />
                    </StatBoxHeader>
                    <StatValueText>{languages}</StatValueText>
                </StatBox>
            </StatsContainer>

            <Link href="/projects">→ View Projects</Link>
        </StatusCard>
    );
}