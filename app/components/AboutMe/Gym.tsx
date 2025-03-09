"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, ReferenceLine, LabelList,
    PieChart, Pie, Cell
} from "recharts";

type HevyWorkout = {
    id: string;
    title: string;
    start_time: string;
    end_time: string;
    exercises: Array<{
        title: string;
        sets: Array<{
            weight: number;
            weight_unit: string;
            reps: number;
        }>;
    }>;
};

interface TooltipProps {
    active?: boolean;
    payload?: Array<{
        payload: {
            date?: Date;
            title?: string;
            value?: number;
        };
        value: number;
    }>;
    label?: string;
}

interface PieTooltipProps {
    active?: boolean;
    payload?: Array<{
        name: string;
        value: number;
        payload: {
            fill: string;
        };
        percent: number;
    }>;
}

type ChartData = { name: string; sets: number; date: Date; title: string };
type MuscleGroupData = { name: string; sets: number; fill: string };

const Container = styled.div`
    width: 90vw;
    margin: 3rem auto;
    padding: 0 1rem;
    font-family: 'Roboto Mono', monospace;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #00843D, rebeccapurple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    padding-bottom: 0.5rem;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background: linear-gradient(90deg, #00843D, rebeccapurple);
        border-radius: 2px;
    }
`;

const StatBar = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    margin-bottom: 2rem;
    background: #f8f8f8;
    border-radius: 12px;
    border-left: 4px solid #00843D;
    color: black;
`;

const Stat = styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Roboto Mono', monospace;
`;

const ChartCard = styled.div`
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 0 auto 2rem auto;
    max-width: 900px;
    border-top: 4px solid #9e66ff;
`;

const ChartTitle = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
    font-weight: 700;
    font-family: 'Roboto Mono', monospace;
    border-bottom: 2px dashed #f0f0f0;
    padding-bottom: 0.5rem;
`;

const ChartsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const ChartContainer = styled.div`
    flex: 1;
    min-width: 300px;
`;

const PieChartLegend = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;

const LegendItem = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
`;

const LegendColor = styled.div<{ color: string }>`
    width: 12px;
    height: 12px;
    background-color: ${props => props.color};
    margin-right: 5px;
    border-radius: 2px;
`;

const InfoText = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 0.9rem;
    border-bottom: 1px dashed #e0e0e0;
    text-align: center;
    font-style: italic;
`;

export default function Gym() {
    const [totalWorkouts, setTotalWorkouts] = useState(0);
    const [totalSets, setTotalSets] = useState(0);
    const [workoutData, setWorkoutData] = useState<ChartData[]>([]);
    const [muscleGroupData, setMuscleGroupData] = useState<MuscleGroupData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Exercise categorization mapping
    const exerciseToMuscleGroup: Record<string, string> = {
        // Chest
        "Incline Bench Press (Dumbbell)": "Chest",
        "fitrec chest fly": "Chest",
        "Chest Fly (Machine)": "Chest",
        "Chest Dip (Assisted)": "Chest",
        "Chest Press (Machine)": "Chest",
        "Cable Fly Crossovers": "Chest",
        "Incline Chest Press (Machine)": "Chest",

        // Back
        "Lat Pulldown - Close Grip (Cable)": "Back",
        "Face Pull": "Back",
        "Seated Cable Row - V Grip (Cable)": "Back",
        "Pull Up (Assisted)": "Back",

        // Legs
        "Squat (Barbell)": "Legs",
        "Calf Press (Machine)": "Legs",
        "Leg Extension (Machine)": "Legs",
        "Seated Leg Curl (Machine)": "Legs",
        "Hip Adduction (Machine)": "Legs",
        "Bulgarian Split Squat": "Legs",
        "Goblet Squat": "Legs",

        // Shoulders
        "BU shoulder press": "Shoulders",
        "Lateral Raise (Machine)": "Shoulders",
        "lateral raise": "Shoulders",
        "fenway rear delt": "Shoulders",
        "Rear Delt Reverse Fly (Cable)": "Shoulders",

        // Arms
        "Triceps Extension (Dumbbell)": "Arms",
        "Triceps Extension (Cable)": "Arms",
        "Hammer Curl (Dumbbell)": "Arms",
        "Triceps Pushdown": "Arms",
        "Reverse Curl (Cable)": "Arms",
        "Seated Incline Curl (Dumbbell)": "Arms",
        "Lateral Raise (Cable)": "Arms",
        "EZ Bar Biceps Curl": "Arms",

        // Core
        "Cable Crunch": "Core",
    };

    // Colors for the muscle groups
    const muscleGroupColors: Record<string, string> = {
        "Chest": "#9e66ff",  // Purple (primary site color)
        "Back": "#00843D",   // Green (primary site color)
        "Legs": "#0088FE",   // Blue
        "Shoulders": "#FFBB28", // Yellow
        "Arms": "#FF8042",   // Orange
        "Core": "#00C49F",   // Teal
        "Other": "#9370DB"   // Medium purple
    };

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setError(null);

            try {
                // Fetch workout data and count in parallel
                const [workoutResponse, countResponse] = await Promise.all([
                    fetch('/api/hevy/workouts?page=1&pageSize=10'),
                    fetch('/api/hevy/workouts/count')
                ]);

                // Check if responses are successful
                if (!workoutResponse.ok) {
                    throw new Error(`Workouts API error: ${workoutResponse.status}`);
                }

                if (!countResponse.ok) {
                    throw new Error(`Count API error: ${countResponse.status}`);
                }

                // Parse responses
                const workoutData = await workoutResponse.json();
                const countData = await countResponse.json();

                // Extract workouts from responses
                const workouts = Array.isArray(workoutData) ? workoutData : (workoutData.workouts || []);

                if (workouts.length === 0) {
                    throw new Error("No workout data returned");
                }

                // Process data
                processWorkoutData(workouts);
                processMuscleGroupData(workouts);
                setTotalWorkouts(countData.workout_count || 0);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err instanceof Error ? err.message : "Failed to fetch data");
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    const processWorkoutData = (workouts: HevyWorkout[]) => {
        let setCount = 0;
        const chartData: ChartData[] = [];

        workouts.forEach(workout => {
            const date = new Date(workout.start_time);
            let workoutSets = 0;

            workout.exercises.forEach(exercise => {
                if (Array.isArray(exercise.sets)) {
                    workoutSets += exercise.sets.length;
                }
            });

            // Use a meaningful title or generate one if not provided
            const workoutTitle = workout.title && workout.title.trim() !== ""
                ? workout.title
                : `Workout (${formatDate(date)})`;

            chartData.push({
                name: formatDate(date),
                sets: workoutSets,
                date,
                title: workoutTitle
            });

            setCount += workoutSets;
        });

        setTotalSets(setCount);

        // Sort by date ascending
        chartData.sort((a, b) => a.date.getTime() - b.date.getTime());
        setWorkoutData(chartData);
    };

    const processMuscleGroupData = (workouts: HevyWorkout[]) => {
        const muscleGroupSets: Record<string, number> = {
            "Chest": 0,
            "Back": 0,
            "Legs": 0,
            "Shoulders": 0,
            "Arms": 0,
            "Core": 0,
            "Other": 0
        };

        // Collect all exercises and their sets
        workouts.forEach(workout => {
            workout.exercises.forEach(exercise => {
                if (!Array.isArray(exercise.sets)) return;

                const setCount = exercise.sets.length;
                const title = exercise.title;

                // Try to find matching muscle group
                let found = false;
                for (const [exerciseName, muscleGroup] of Object.entries(exerciseToMuscleGroup)) {
                    if (title.includes(exerciseName)) {
                        muscleGroupSets[muscleGroup] += setCount;
                        found = true;
                        break;
                    }
                }

                // If no match found, add to "Other"
                if (!found) {
                    muscleGroupSets["Other"] += setCount;
                }
            });
        });

        // Convert to chart data format
        const chartData: MuscleGroupData[] = Object.entries(muscleGroupSets)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, count]) => count > 0)
            .map(([name, sets]) => ({
                name,
                sets,
                fill: muscleGroupColors[name]
            }));

        setMuscleGroupData(chartData);
    };

    const formatDate = (date: Date): string => {
        // Shorter format for x-axis labels
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
        if (active && payload && payload.length) {
            const data = payload[0]?.payload;
            const date = data?.date;
            const title = data?.title || "Workout";

            const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            }) : label;

            return (
                <div style={{
                    background: '#fff',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderLeft: '4px solid #9e66ff',
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: '12px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                    <p style={{ margin: '0 0 5px 0' }}><strong>{formattedDate}</strong></p>
                    <p style={{ margin: '0 0 5px 0', color: '#00843D' }}><strong>{title}</strong></p>
                    <p style={{ color: '#9e66ff', margin: 0 }}>{`${payload[0].value} sets`}</p>
                </div>
            );
        }
        return null;
    };

    const PieChartTooltip = ({ active, payload }: PieTooltipProps) => {
        if (active && payload && payload.length) {
            const data = payload[0];
            return (
                <div style={{
                    background: '#fff',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderLeft: `4px solid ${data.payload.fill}`,
                    fontFamily: 'Roboto Mono, monospace',
                    fontSize: '12px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                    <p style={{ margin: '0 0 5px 0' }}><strong>{data.name}</strong></p>
                    <p style={{ color: data.payload.fill, margin: 0 }}>
                        {data.value} sets ({Math.round(data.percent * 100)}%)
                    </p>
                </div>
            );
        }
        return null;
    };

    if (error) {
        return (
            <Container>
                <Title>Workout Analytics</Title>
                <ChartCard>
                    <ChartTitle>Error Loading Data</ChartTitle>
                    <p style={{ color: "red", fontFamily: "'Roboto Mono', monospace" }}>{error}</p>
                </ChartCard>
            </Container>
        );
    }

    if (isLoading) {
        return (
            <Container>
                <Title>Workout Analytics</Title>
                <ChartCard>
                    <ChartTitle>Loading workout data...</ChartTitle>
                </ChartCard>
            </Container>
        );
    }

    // Calculate average sets per workout for reference line
    const avgSets = totalSets / workoutData.length;

    return (
        <Container>
            <Title>Workout Analytics</Title>
            <InfoText>
                Data sourced from Hevy Workout Tracking App API, displaying the last 10 workout sessions
            </InfoText>
            <StatBar>

                <Stat>Total Tracked Workouts: {totalWorkouts}</Stat>
                <Stat>Total Sets (past 10 workouts): {totalSets}</Stat>
            </StatBar>

            <ChartCard>
                <ChartTitle>Sets per Workout Session</ChartTitle>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={workoutData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            tick={{
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: 12
                            }}
                            angle={-45}
                            textAnchor="end"
                            height={70}
                            interval={0}
                        />
                        <YAxis
                            tick={{ fontFamily: 'Roboto Mono, monospace' }}
                            label={{
                                value: 'Total Sets',
                                angle: -90,
                                position: 'insideLeft',
                                fontFamily: 'Roboto Mono, monospace',
                                style: { textAnchor: 'middle' }
                            }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                            wrapperStyle={{
                                fontFamily: 'Roboto Mono, monospace',
                                paddingTop: '15px'
                            }}
                        />
                        <ReferenceLine
                            y={avgSets}
                            stroke="#00843D"
                            strokeDasharray="3 3"
                            label={{
                                value: `Avg: ${avgSets.toFixed(1)}`,
                                position: 'insideTopRight',
                                fill: '#00843D',
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: 12
                            }}
                        />
                        <Bar
                            dataKey="sets"
                            name="Sets Completed"
                            fill="#9e66ff"
                            radius={[4, 4, 0, 0]}
                            animationDuration={800}
                        >
                            <LabelList
                                dataKey="sets"
                                position="top"
                                fill="#333"
                                fontSize={12}
                                fontFamily="Roboto Mono, monospace"
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>

            <ChartCard>
                <ChartTitle>Exercise Distribution by Muscle Group</ChartTitle>
                <ChartsRow>
                    <ChartContainer>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={muscleGroupData}
                                    dataKey="sets"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    innerRadius={60}
                                    paddingAngle={2}
                                    animationDuration={800}
                                >
                                    {muscleGroupData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip content={<PieChartTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                    <ChartContainer>
                        <PieChartLegend>
                            {muscleGroupData.map((entry, index) => (
                                <LegendItem key={`legend-${index}`}>
                                    <LegendColor color={entry.fill} />
                                    {entry.name}: {entry.sets} sets
                                </LegendItem>
                            ))}
                        </PieChartLegend>
                    </ChartContainer>
                </ChartsRow>
            </ChartCard>
        </Container>
    );
}