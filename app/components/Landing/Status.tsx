"use client";
import styled, { keyframes } from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const glow = keyframes`
    0% { filter: drop-shadow(0 0 2px lime); }
    50% { filter: drop-shadow(0 0 8px lime); }
    100% { filter: drop-shadow(0 0 2px lime); }
`;

const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e8e8e8;
    padding: 15px;
    border-radius: 8px;
    width: 220px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const TaskProgress = styled.div`
    width: 100%;
    background-color: #3d3d3d;
    border: 2px solid #337aff;
    color: white;
    padding: 10px;
    border-radius: 6px;
    text-align: left;
    font-size: 14px;
`;

const StatusIndicator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #575757;
    padding: 5px;
    border-radius: 4px;
    margin-top: 5px;
    font-size: 12px;
`;

const GlowingIcon = styled(CheckCircleIcon)`
    color: lime;
    animation: ${glow} 1.5s infinite alternate;
`;

export default function Status() {
    return (
        <StatusContainer>
            <TaskProgress>
                <strong>Task Progress</strong>
                <StatusIndicator>
                    <span>Online</span>
                    <GlowingIcon />
                </StatusIndicator>
            </TaskProgress>
        </StatusContainer>
    );
}
