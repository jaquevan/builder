import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.HEVY_API_KEY;

    if (!apiKey) {
        console.error("HEVY_API_KEY not found in environment variables");
        return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    console.log("Using API Key:", apiKey); // Debugging

    try {
        const response = await fetch(
            'https://api.hevyapp.com/v1/workouts/count',
            {
                headers: {
                    'api-key': apiKey, // ✅ FIXED to match cURL
                    'Accept': 'application/json'
                }
            }
        );

        if (!response.ok) {
            const text = await response.text();
            console.error(`API error: ${response.status} ${text}`);
            return NextResponse.json({ error: `API error: ${response.status} - ${text}` }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching workout count:", error);
        return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 });
    }
}
