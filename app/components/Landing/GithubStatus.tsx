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
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    animation: ${fadeIn} 0.4s ease-out;

    @media (max-width: 600px) {
        border-radius: 12px;
        max-width: 100%;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2));
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    color: #FFFFFF;
    font-family: "JetBrains Mono", monospace;
`;

const Time = styled.div`
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    font-family: "JetBrains Mono", monospace;
`;

const Profile = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Avatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to right, #00843D, #6cc644);
    padding: 2px;

    @media (max-width: 600px) {
        width: 40px;
        height: 40px;
    }
`;

const UserDetails = styled.div`
    flex: 1;
    overflow: hidden;
`;

const IconsContainer = styled.div`
    padding: 10px 0;
    overflow: hidden;
`;

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 14px;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const StatBox = styled.div`
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 14px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 480px) {
        padding: 12px;
    }
`;

const StatBoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

const StatLabel = styled.div`
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 500;
`;

const StatValueText = styled.div`
    font-size: 1.3rem;
    font-weight: 600;
    color: #FFFFFF;
    font-family: "JetBrains Mono", monospace;

    @media (max-width: 600px) {
        font-size: 1.1rem;
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
    const [repos, setRepos] = useState(0);
    const [languages, setLanguages] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    // hardcoded values
    const username = "jaquevan";
    const contributions = 277;
    const streak = 13;

    // update time every second
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toISOString().split('T')[0];
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setCurrentTime(`${formattedDate} ${hours}:${minutes}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // fetch github data
    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true);

                // Fetch only the essential profile data in one request
                const profileResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!profileResponse.ok) {
                    throw new Error('GitHub API error');
                }

                const profileData = await profileResponse.json();

                // Update all necessary state at once
                setUserProfile(profileData);
                setRepos(profileData.public_repos || 0);
                setLanguages('TypeScript'); // Hardcoded as requested

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
                    <Time>{currentTime}</Time>
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
                <Time>{currentTime}</Time>
            </CardHeader>

            <Profile>
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
                </UserDetails>
            </Profile>

            <IconsContainer>
                <TechIcons />
            </IconsContainer>
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
                        <StatLabel>Contributions</StatLabel>
                        <CodeIcon fontSize="small" sx={{ color: "#4078c0" }} />
                    </StatBoxHeader>
                    <StatValueText>{contributions}</StatValueText>
                </StatBox>

                <StatBox>
                    <StatBoxHeader>
                        <StatLabel>Longest Streak</StatLabel>
                        <StarIcon fontSize="small" sx={{ color: "#bd2c00" }} />
                    </StatBoxHeader>
                    <StatValueText>{streak}</StatValueText>
                </StatBox>

                <StatBox>
                    <StatBoxHeader>
                        <StatLabel>Language</StatLabel>
                        <TerminalIcon fontSize="small" sx={{ color: "#6e5494" }} />
                    </StatBoxHeader>
                    <StatValueText>{languages}</StatValueText>
                </StatBox>
            </StatsContainer>

            <Link href="/projects">→ View Projects</Link>
        </StatusCard>
    );
}