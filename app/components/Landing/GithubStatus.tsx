"use client";

import { useState, useEffect } from "react";
import { Tooltip, Typography, CircularProgress } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Public";
import PublicIcon from "@mui/icons-material/Terminal";
import StarIcon from "@mui/icons-material/Star";
import GitHubIcon from "@mui/icons-material/GitHub";
import TechIcons from "./TechIcons";

// styled components
import {
    MBTAColors,
    StationPaper,
    StationHeader,
    StationName,
    ProfileSection,
    UserInfo,
    StyledAvatar,
    InfoBoard,
    StatsGrid,
    StatItem,
    StatHeader,
    StatTitle,
    StatValue,
    DirectionSign,
    TickerTape,
    LastCommitTicker,
    TimeDisplay,
    LoadingContainer
} from './GithubStatus.styles';

interface UserProfile {
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    created_at: string;
}

interface Repo {
    language?: string;
}

interface Event {
    type: string;
    created_at: string;
}

export default function GitHubStatus() {
    // state variables
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [repos, setRepos] = useState(0);
    const [languages, setLanguages] = useState('');
    const [streak, setStreak] = useState('0 days');
    const [lastCommitDate, setLastCommitDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    // hardcoded values
    const username = "jaquevan";
    const contributions = 230; // hardcoded for now
    const stationName = "GitHub Central";

    // update time every second
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toISOString().split('T')[0];
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setCurrentTime(`${formattedDate} ${hours}:${minutes}:${seconds}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // fetch github data
    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true);

                // fetch basic profile data
                const profileResponse = await fetch(`https://api.github.com/users/${username}`);
                if (!profileResponse.ok) throw new Error('Failed to fetch profile');
                const profileData: UserProfile = await profileResponse.json();
                setUserProfile(profileData);
                setRepos(profileData.public_repos || 0);

                // fetch repos to get languages
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
                if (!reposResponse.ok) throw new Error('Failed to fetch repos');
                const reposData: Repo[] = await reposResponse.json();

                // count languages and get top 3
                const languageCounts: { [key: string]: number } = {};
                reposData.forEach(repo => {
                    if (repo.language) {
                        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
                    }
                });

                const top3Languages = Object.entries(languageCounts)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 3)
                    .map(([lang]) => lang)
                    .join(', ');

                setLanguages(top3Languages || 'Not specified');

                // get recent activity for last commit date and streak
                const eventsResponse = await fetch(`https://api.github.com/users/${username}/events`);
                if (!eventsResponse.ok) throw new Error('Failed to fetch events');
                const events: Event[] = await eventsResponse.json();

                const pushEvents = events.filter(event => event.type === 'PushEvent');

                // calculate last commit date and streak
                if (pushEvents.length > 0) {
                    // last commit date
                    const lastCommit = new Date(pushEvents[0].created_at);
                    setLastCommitDate(lastCommit.toISOString().split('T')[0]);

                    // simplified streak calculation
                    calculateStreak(pushEvents);
                }

                setLoading(false);
            } catch (err) {
                console.error('GitHub API error:', err);
                setLoading(false);
            }
        };

        // helper function to calculate streak - separated for clarity
        const calculateStreak = (pushEvents: Event[]) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const lastCommit = new Date(pushEvents[0].created_at);
            lastCommit.setHours(0, 0, 0, 0);

            // check if last commit is recent (today or yesterday)
            const daysDiff = Math.ceil(Math.abs(today.getTime() - lastCommit.getTime()) / (1000 * 60 * 60 * 24));

            if (daysDiff <= 1) {
                // count consecutive days with commits
                let currentStreak = 1;
                let currentDate = new Date(lastCommit);

                for (let i = 1; i < pushEvents.length; i++) {
                    const commitDate = new Date(pushEvents[i].created_at);
                    commitDate.setHours(0, 0, 0, 0);

                    // check if this commit was on the previous day
                    const prevDate = new Date(currentDate);
                    prevDate.setDate(prevDate.getDate() - 1);

                    if (commitDate.getTime() === prevDate.getTime()) {
                        currentStreak++;
                        currentDate = new Date(commitDate);
                    } else {
                        break; // streak broken
                    }
                }

                setStreak(`${currentStreak} days`);
            } else {
                setStreak('0 days'); // no recent commits
            }
        };

        fetchGitHubData();
    }, [username]);

    // loading state
    if (loading) {
        return (
            <StationPaper elevation={3}>
                <StationHeader>
                    <StationName><GitHubIcon sx={{mr: 1}}/> Loading GitHub Data</StationName>
                    <TimeDisplay>{currentTime}</TimeDisplay>
                </StationHeader>
                <LoadingContainer>
                    <CircularProgress sx={{ color: MBTAColors.green }} />
                </LoadingContainer>
            </StationPaper>
        );
    }

    // error state
    if (error) {
        return (
            <StationPaper elevation={3}>
                <StationHeader>
                    <StationName><GitHubIcon sx={{mr: 1}}/> Error</StationName>
                    <TimeDisplay>{currentTime}</TimeDisplay>
                </StationHeader>
                <div style={{padding: '2rem', textAlign: 'center'}}>
                    <Typography>Failed to load GitHub data: {error}</Typography>
                </div>
            </StationPaper>
        );
    }

    // success state
    return (
        <StationPaper elevation={3}>
            <StationHeader>
                <StationName>
                    <PublicIcon sx={{mr: 1}}/> {stationName}
                </StationName>
                <TimeDisplay>{currentTime}</TimeDisplay>
            </StationHeader>

            {/* user profile section */}
            <ProfileSection>
                <StyledAvatar
                    alt={username}
                    src={userProfile?.avatar_url || "https://avatars.githubusercontent.com/u/144175083?v=4"}
                />
                <UserInfo>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.2rem', fontFamily: "'JetBrains Mono', monospace" }}>
                        {userProfile?.name || username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {userProfile?.bio || ''}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" sx={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Active since {userProfile?.created_at ? new Date(userProfile.created_at).getFullYear() : '2023'}
                    </Typography>
                </UserInfo>
            </ProfileSection>

            {/* scrolling message board */}
            <InfoBoard>
                <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
                    <TechIcons/>
                </div>
            </InfoBoard>

            {/* commit info ticker */}
            <LastCommitTicker>
                LAST COMMIT: {lastCommitDate || 'No data'} • STATUS: ACTIVE
            </LastCommitTicker>

            {/* github stats grid - 2x2 layout */}
            <StatsGrid>
                <StatItem $color={MBTAColors.green}>
                    <StatHeader>
                        <StatTitle>REPOSITORIES</StatTitle>
                        <StorageIcon fontSize="small" sx={{color: MBTAColors.green}}/>
                    </StatHeader>
                    <StatValue>{repos}</StatValue>
                </StatItem>

                <StatItem $color={MBTAColors.blue}>
                    <StatHeader>
                        <StatTitle>CONTRIBUTIONS (2023)</StatTitle>
                        <CodeIcon fontSize="small" sx={{color: MBTAColors.blue}}/>
                    </StatHeader>
                    <StatValue>{contributions}</StatValue>
                </StatItem>

                <StatItem $color={MBTAColors.red}>
                    <StatHeader>
                        <StatTitle>STREAK</StatTitle>
                        <StarIcon fontSize="small" sx={{color: MBTAColors.red}}/>
                    </StatHeader>
                    <StatValue>{streak}</StatValue>
                </StatItem>

                <Tooltip title={languages} placement="top">
                    <StatItem $color={MBTAColors.orange}>
                        <StatHeader>
                            <StatTitle>LANGUAGES</StatTitle>
                            <TerminalIcon fontSize="small" sx={{color: MBTAColors.orange}}/>
                        </StatHeader>
                        <Typography variant="body2" noWrap sx={{
                            maxWidth: '100%',
                            fontSize: '0.85rem',
                            fontFamily: "'JetBrains Mono', monospace"
                        }}>
                            {languages}
                        </Typography>
                    </StatItem>
                </Tooltip>
            </StatsGrid>

            <TickerTape/>

            {/* navigation link */}
            <DirectionSign href="/projects">
                → To Projects
            </DirectionSign>
        </StationPaper>
    );
}