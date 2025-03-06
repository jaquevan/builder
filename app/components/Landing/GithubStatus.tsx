"use client";
import {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {Paper, Avatar, Tooltip, Typography, Link} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";

const pulse = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 133, 61, 0.7);
    }
    70% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(0, 133, 61, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 133, 61, 0);
    }
`;

const slideIn = keyframes`
    from {
        transform: translateY(10px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const scrollText = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const MBTAColors = {
    green: "#00843D",
    red: "#DA291C",
    orange: "#ED8B00",
    blue: "#003DA5",
    yellow: "#FCB61A",
    silver: "#7C878E",
    black: "#231F20",
    lightGray: "#F2F2F2",
};

const StationPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    background-color: ${MBTAColors.lightGray};
    padding: 0;
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    animation: ${slideIn} 0.4s ease-out;
    transform-origin: top center;

    @media (max-width: 768px) {
        max-width: 20%;
        transform: scale(0.95);
        margin: 0 auto;
    }

    @media (max-width: 480px) {
        transform: scale(0.9);
    }

    &:hover {
        transform: translateY(-4px);
        transition: transform 0.3s ease;

        @media (max-width: 768px) {
            transform: translateY(-2px) scale(0.95);
        }

        @media (max-width: 480px) {
            transform: translateY(-2px) scale(0.9);
        }
    }
`;

const StationHeader = styled.div`
    background-color: ${MBTAColors.green};
    color: white;
    padding: 0.75rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
        padding: 0.6rem 1rem;
    }
`;

const StationName = styled(Typography)`
    font-size: 1.15rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const StatusLight = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #4caf50;
    box-shadow: 0 0 8px 2px rgba(76, 175, 80, 0.6);
    animation: ${pulse} 2s infinite;
    margin-left: 10px;

    @media (max-width: 480px) {
        width: 10px;
        height: 10px;
    }
`;

const ProfileSection = styled.div`
    display: flex;
    padding: 1rem 1.25rem;
    align-items: center;
    gap: 1.25rem;
    background-color: white;

    @media (max-width: 480px) {
        padding: 0.8rem 1rem;
        gap: 1rem;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const StyledAvatar = styled(Avatar)`
    width: 65px;
    height: 65px;
    border: 3px solid ${MBTAColors.green};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        border-width: 2px;
    }
`;

const InfoBoard = styled.div`
    background-color: #282C34;
    color: #F8F8F8;
    padding: 0.75rem;
    font-family: 'Roboto Mono', monospace;
    position: relative;
    height: 2.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        height: 2.2rem;
        padding: 0.5rem;
    }
`;

const ScrollingTextContainer = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
`;

const ScrollingTextElement = styled.div`
    display: inline-block;
    padding-right: 50px;
    white-space: nowrap;
    animation: ${scrollText} 20s linear infinite;
    will-change: transform;
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 1rem;

    @media (max-width: 480px) {
        gap: 0.6rem;
        padding: 0.8rem;
    }
`;

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    padding: 0.75rem;
    border-left: 4px solid ${props => props.$color || MBTAColors.green};

    &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
    }

    @media (max-width: 480px) {
        padding: 0.6rem;
    }
`;

const StatHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.25rem;
`;

const StatTitle = styled.span`
    font-size: 0.8rem;
    color: ${MBTAColors.black};
    font-weight: 500;

    @media (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

const StatValue = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${MBTAColors.black};

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

const DirectionSign = styled(Link)`
    display: flex;
    background-color: ${MBTAColors.black};
    color: white;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.75rem;
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;
    cursor: pointer;

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

const TickerTape = styled.div`
    background-color: ${MBTAColors.green};
    color: white;
    padding: 0.4rem 0;
    font-size: 0.85rem;
    font-weight: 500;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 0.3rem 0;
    }
`;

const LastCommitTicker = styled.div`
    background-color: black;
    color: #FFFF00;
    padding: 0.4rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.85rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 0.3rem;
    }
`;

const TimeDisplay = styled.div`
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.1rem;
    font-weight: 500;

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export default function GitHubStatus() {
    const [repos, setRepos] = useState(20);
    const [contributions, setContributions] = useState(310);
    const [languages, setLanguages] = useState("TypeScript, JavaScript, Python, CSS");
    const [streak, setStreak] = useState("13 days");
    const [currentTime, setCurrentTime] = useState("2025-03-02 21:16:55");

    const lastCommit = "2025-03-02";

    const username = "jaquevan";
    const stationName = "GitHub Central";
    const nextDestination = "Projects";
    const ticker = `Welcome to ${stationName}. Next train to ${nextDestination} is approaching. Please mind the gap.`;

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setCurrentTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <StationPaper elevation={3}>
            <StationHeader>
                <StationName>
                    <PublicIcon sx={{mr: 1}}/> {stationName}
                    <StatusLight/>
                </StationName>
                <TimeDisplay>{currentTime}</TimeDisplay>
            </StationHeader>

            <ProfileSection>
                <StyledAvatar
                    alt={username}
                    src="https://avatars.githubusercontent.com/u/144175083?v=4"
                    sx={{bgcolor: MBTAColors.green}}
                />
                <UserInfo>
                    <Typography variant="h6" sx={{fontWeight: 600, fontSize: '1.2rem', '@media (max-width: 480px)': {fontSize: '1rem'}}}>
                        {username}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{fontSize: '0.9rem', '@media (max-width: 480px)': {fontSize: '0.8rem'}}}>
                        Front-end Developer & UI/UX Researcher
                    </Typography>
                    <Typography variant="caption" color="textSecondary" sx={{'@media (max-width: 480px)': {fontSize: '0.7rem'}}}>
                        Active since 2023
                    </Typography>
                </UserInfo>
            </ProfileSection>

            <InfoBoard>
                <ScrollingTextContainer>
                    <ScrollingTextElement>
                        {ticker} &nbsp; &nbsp; &nbsp; {ticker}
                    </ScrollingTextElement>
                </ScrollingTextContainer>
            </InfoBoard>

            <LastCommitTicker>
                LAST COMMIT: {lastCommit} • STATUS: BUILDING
            </LastCommitTicker>

            <StatsGrid>
                <StatItem $color={MBTAColors.green}>
                    <StatHeader>
                        <StatTitle>REPOSITORIES</StatTitle>
                        <StorageIcon fontSize="small" sx={{color: MBTAColors.green, '@media (max-width: 480px)': {fontSize: '0.8rem'}}}/>
                    </StatHeader>
                    <StatValue>{repos}</StatValue>
                </StatItem>

                <StatItem $color={MBTAColors.blue}>
                    <StatHeader>
                        <StatTitle>CONTRIBUTIONS</StatTitle>
                        <CodeIcon fontSize="small" sx={{color: MBTAColors.blue, '@media (max-width: 480px)': {fontSize: '0.8rem'}}}/>
                    </StatHeader>
                    <StatValue>{contributions}</StatValue>
                </StatItem>

                <StatItem $color={MBTAColors.red}>
                    <StatHeader>
                        <StatTitle>STREAK</StatTitle>
                        <StarIcon fontSize="small" sx={{color: MBTAColors.red, '@media (max-width: 480px)': {fontSize: '0.8rem'}}}/>
                    </StatHeader>
                    <StatValue>{streak}</StatValue>
                </StatItem>

                <Tooltip title={languages} placement="top">
                    <StatItem $color={MBTAColors.orange}>
                        <StatHeader>
                            <StatTitle>LANGUAGES</StatTitle>
                            <TerminalIcon fontSize="small" sx={{color: MBTAColors.orange, '@media (max-width: 480px)': {fontSize: '0.8rem'}}}/>
                        </StatHeader>
                        <Typography variant="body2" noWrap sx={{maxWidth: '100%', fontSize: '0.85rem', '@media (max-width: 480px)': {fontSize: '0.75rem'}}}>
                            {languages}
                        </Typography>
                    </StatItem>
                </Tooltip>
            </StatsGrid>

            <TickerTape>
                GREEN LINE • NORTH STATION • OUTBOUND
            </TickerTape>

            <DirectionSign href="/projects">
                → To Projects
            </DirectionSign>
        </StationPaper>
    );
}