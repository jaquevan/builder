"use client";

import { useState, useEffect } from "react";
import { Typography, CircularProgress } from "@mui/material";
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
    const [lastCommitDate, setLastCommitDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    // hardcoded values
    const username = "jaquevan";
    const contributions = 277; // hardcoded for now
    const stationName = "GitHub Central";
    const streak = 13; // hardcoded streak value for now

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

                // set typescript as primary language
                setLanguages('TypeScript');

                // get recent activity for last commit date
                const eventsResponse = await fetch(`https://api.github.com/users/${username}/events`);
                if (!eventsResponse.ok) throw new Error('Failed to fetch events');
                const events: Event[] = await eventsResponse.json();

                const pushEvents = events.filter(event => event.type === 'PushEvent');

                if (pushEvents.length > 0) {
                    const lastCommit = new Date(pushEvents[0].created_at);
                    setLastCommitDate(lastCommit.toISOString().split('T')[0]);
                }

                setLoading(false);
            } catch (err) {
                console.error('GitHub API error:', err);
                setLoading(false);
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
                        <StatTitle>Public Repositories</StatTitle>
                        <StorageIcon fontSize="small" sx={{color: MBTAColors.green}}/>
                    </StatHeader>
                    <StatValue>{repos}</StatValue>
                </StatItem>

                <StatItem $color={MBTAColors.blue}>
                    <StatHeader>
                        <StatTitle>Contributions (this year)</StatTitle>
                        <CodeIcon fontSize="small" sx={{color: MBTAColors.blue}}/>
                    </StatHeader>
                    <StatValue>{contributions}</StatValue>
                </StatItem>

                <StatItem $color={MBTAColors.red}>
                    <StatHeader>
                        <StatTitle>Longest Streak</StatTitle>
                        <StarIcon fontSize="small" sx={{color: MBTAColors.red}}/>
                    </StatHeader>
                    <StatValue>{streak}</StatValue>
                </StatItem>

                    <StatItem $color={MBTAColors.orange}>
                        <StatHeader>
                            <StatTitle>Most Used Language</StatTitle>
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
            </StatsGrid>

            <TickerTape/>

            {/* navigation link */}
            <DirectionSign href="/projects">
                → To Projects
            </DirectionSign>
        </StationPaper>
    );
}