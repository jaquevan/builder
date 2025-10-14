"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, ReferenceLine, LabelList
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
    max-width: 1200px;
    width: 100%;
    margin: 3rem auto;
    padding: 0 2rem;
    font-family: 'Roboto Mono', monospace;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        margin: 2rem auto;
        width: 100%;
        padding: 0 1rem;
    }

    @media screen and (max-width: 480px) {
        margin: 1rem auto;
        width: 100%;
        padding: 0 1rem;
    }
`;

const Title = styled.h1`
    font-size: clamp(2rem, 4vw, 2.5rem);
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
    font-family: 'JetBrains Mono', monospace;

    @media screen and (max-width: 768px) {
        margin-bottom: 1.5rem;
        font-size: clamp(1.5rem, 3vw, 2rem);
    }

    @media screen and (max-width: 480px) {
        margin-bottom: 1rem;
        font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    }
`;

const StatBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    padding: 1.5rem;
    margin: 2rem auto;
    background: rgba(18, 18, 18, 0.6);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding: 1rem;
        gap: 0.5rem;
        margin: 1rem auto;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        padding: 0.8rem;
        gap: 0.4rem;
        margin: 0.5rem auto;
    }
`;

const Stat = styled.div`
    text-align: center;
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 600;
    font-family: 'Roboto Mono', monospace;
`;

const ChartCard = styled.div`
    background: rgba(255, 255, 255, 0.98);
    border-radius: 12px;
    padding: 2rem;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 2rem auto;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        padding: 1rem;
        margin: 1rem auto;
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        padding: 0.8rem;
        margin: 0.5rem auto;
        width: 100%;
        border-radius: 8px;
    }
`;

const ChartTitle = styled.h2`
    font-size: clamp(1rem, 2vw, 1.3rem);
    margin-bottom: 1rem;
    color: #333;
    font-weight: 700;
    font-family: 'Roboto Mono', monospace;
    border-bottom: 2px dashed #f0f0f0;
    padding-bottom: 0.5rem;

    @media screen and (max-width: 480px) {
        font-size: 0.95rem;
        margin-bottom: 0.7rem;
        padding-bottom: 0.4rem;
    }
`;

// Commented out - used for pie chart feature (currently disabled)
// const ChartsRow = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     gap: 2rem;
//     width: 100%;
//
//     @media screen and (max-width: 900px) {
//         flex-direction: column;
//     }
// `;
//
// const ChartContainer = styled.div`
//     flex: 1;
//     min-width: 200px;
// `;
//
// const PieChartLegend = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 1rem;
//     margin-top: 1rem;
//
//     @media screen and (max-width: 480px) {
//         gap: 0.5rem;
//         margin-top: 0.5rem;
//     }
// `;
//
// const LegendItem = styled.div`
//     display: flex;
//     align-items: center;
//     font-family: 'Roboto Mono', monospace;
//     font-size: 12px;
//     color: unset;
//
//     @media screen and (max-width: 480px) {
//         font-size: 10px;
//     }
// `;
//
// const LegendColor = styled.div<{ color: string }>`
//     width: 12px;
//     height: 12px;
//     margin-right: 5px;
//     border-radius: 2px;
// `;

const InfoText = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 0.9rem;
    border-bottom: 1px dashed #e0e0e0;
    text-align: center;
    font-style: italic;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
        padding: 0.4rem;
    }
`;

function useResponsiveChartHeight(defaultHeight: number, tabletHeight: number, mobileHeight: number) {
    const [height, setHeight] = useState(defaultHeight);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 480) {
                setHeight(mobileHeight);
            } else if (window.innerWidth < 768) {
                setHeight(tabletHeight);
            } else {
                setHeight(defaultHeight);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [defaultHeight, tabletHeight, mobileHeight]);

    return height;
}

// Commented out - reserved for future responsive features
// function useResponsiveValue<T>(defaultValue: T, tabletValue: T, mobileValue: T) {
//     const [value, setValue] = useState(defaultValue);
//
//     useEffect(() => {
//         function handleResize() {
//             if (window.innerWidth < 480) {
//                 setValue(mobileValue);
//             } else if (window.innerWidth < 768) {
//                 setValue(tabletValue);
//             } else {
//                 setValue(defaultValue);
//             }
//         }
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, [defaultValue, tabletValue, mobileValue]);
//
//     return value;
// }

export default function Gym() {
    const [totalWorkouts, setTotalWorkouts] = useState(0);
    const [totalSets, setTotalSets] = useState(0);
    const [workoutData, setWorkoutData] = useState<ChartData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Responsive chart heights
    const barChartHeight = useResponsiveChartHeight(400, 300, 250);

    // Commented out - for pie chart feature (currently disabled)
    // const [muscleGroupData, setMuscleGroupData] = useState<MuscleGroupData[]>([]);
    // const pieChartHeight = useResponsiveChartHeight(350, 280, 220);

    // Exercise categorization mapping
    const exerciseToMuscleGroup = useMemo(() => ({
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
    }), []);

    // Colors for the muscle groups
    const muscleGroupColors = useMemo(() => ({
        "Chest": "#9e66ff",  // Purple (primary site color)
        "Back": "#00843D",   // Green (primary site color)
        "Legs": "#0088FE",   // Blue
        "Shoulders": "#FFBB28", // Yellow
        "Arms": "#FF8042",   // Orange
        "Core": "#00C49F",   // Teal
        "Other": "#9370DB"   // Medium purple
    }), []);

    const processWorkoutData = useCallback((workouts: HevyWorkout[]) => {
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
    }, []);

    const processMuscleGroupData = useCallback((workouts: HevyWorkout[]) => {
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
            .filter(([, count]) => count > 0)
            .map(([name, sets]) => ({
                name,
                sets,
                fill: muscleGroupColors[name as keyof typeof muscleGroupColors]
            }));

        // Commented out - for pie chart feature (currently disabled)
        // setMuscleGroupData(chartData);
        console.log('Muscle group data:', chartData); // Keep for debugging
    }, [exerciseToMuscleGroup, muscleGroupColors]);

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
    }, [processMuscleGroupData, processWorkoutData]);

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

    // Commented out - for pie chart feature (currently disabled)
    // const PieChartTooltip = ({ active, payload }: PieTooltipProps) => {
    //     if (active && payload && payload.length) {
    //         const data = payload[0];
    //         return (
    //             <div style={{
    //                 background: '#fff',
    //                 padding: '10px',
    //                 border: '1px solid #ccc',
    //                 borderLeft: `4px solid ${data.payload.fill}`,
    //                 fontFamily: 'Roboto Mono, monospace',
    //                 fontSize: '12px',
    //                 boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    //             }}>
    //                 <p style={{ margin: '0 0 5px 0' }}><strong>{data.name}</strong></p>
    //                 <p style={{color: data.payload.fill, margin: 0}}>
    //                     {data.value} sets ({Math.round(data.percent * 100)}%)
    //                 </p>
    //             </div>
    //         );
    //     }
    //     return null;
    // };

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

    // Responsive font sizes for axis ticks
    const getTickFontSize = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 480) return 10;
            if (window.innerWidth < 768) return 11;
        }
        return 12;
    };

    // Responsive XAxis height
    const getXAxisHeight = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 480) return 50;
            if (window.innerWidth < 768) return 60;
        }
        return 70;
    };

    // Responsive chart margins
    const getChartMargins = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 480) {
                return { top: 20, right: 10, left: 0, bottom: getXAxisHeight() };
            }
            if (window.innerWidth < 768) {
                return { top: 20, right: 20, left: 10, bottom: getXAxisHeight() };
            }
        }
        return { top: 20, right: 30, left: 20, bottom: getXAxisHeight() };
    };

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
                <ResponsiveContainer width="100%" height={barChartHeight}>
                    <BarChart
                        data={workoutData}
                        margin={getChartMargins()}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            tick={{
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: getTickFontSize()
                            }}
                            angle={-40}
                            textAnchor="end"
                            height={getXAxisHeight()}
                            interval={0}
                        />
                        <YAxis
                            tick={{
                                fontFamily: 'Roboto Mono, monospace',
                                fontSize: getTickFontSize()
                            }}
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
                                value: ` : ${avgSets.toFixed(1)}`,
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
                                fontSize={getTickFontSize()}
                                fontFamily="Roboto Mono, monospace"
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </ChartCard>

            {/* <ChartCard>
                <ChartTitle>Exercise Distribution by Muscle Group</ChartTitle>
                <ChartsRow>
                    <ChartContainer>
                        <ResponsiveContainer width="100%" height={pieChartHeight}>
                            <PieChart>
                                <Pie
                                    data={muscleGroupData}
                                    dataKey="sets"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={Math.min(pieChartHeight * 0.4, 120)}
                                    innerRadius={Math.min(pieChartHeight * 0.25, 70)}
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
            </ChartCard> */}
        </Container>
    );
}
