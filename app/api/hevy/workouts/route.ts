import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get('page') || '1';
        const pageSize = searchParams.get('pageSize') || '10'; // Ensure it's within the API limit

        const apiKey = process.env.HEVY_API_KEY;
        if (!apiKey) {
            console.error("HEVY_API_KEY not found in environment variables");
            return NextResponse.json({ error: "Missing API key" }, { status: 500 });
        }

        console.log(`Fetching workouts from Hevy API: Page=${page}, PageSize=${pageSize}`);

        const response = await fetch(
            `https://api.hevyapp.com/v1/workouts?page=${page}&pageSize=${pageSize}`,
            {
                headers: {
                    'api-key': apiKey, // Ensure you are using the correct key
                    'Accept': 'application/json'
                }
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`API Error: ${response.status} - ${errorText}`);
            return NextResponse.json({ error: `API Error: ${response.status} - ${errorText}` }, { status: response.status });
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging API response
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
