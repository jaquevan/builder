import type { Metadata } from "next";
import "../app/global.css";
import ClientThemeProvider from './ClientThemeProvider';
import StyledComponentsRegistry from '../lib/registry';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
    title: {
        default: "Evan Jaquez: Portfolio",
        template: "%s | Evan Jaquez"
    },
    description: "Evan Jaquez is a Computer Science and Economics student at Boston University, passionate about software engineering, frontend development, and UI/UX. Portfolio showcasing projects, experience, and skills.",
    keywords: [
        "Evan Jaquez",
        "Software Engineer",
        "Computer Science",
        "Boston University",
        "Full Stack Developer",
        "Web Development",
        "Data Science",
        "Economics",
        "Portfolio",
        "UX Researcher",
        "React",
        "Next.js",
        "TypeScript"
    ],
    authors: [{ name: "Evan Jaquez" }],
    creator: "Evan Jaquez",
    publisher: "Evan Jaquez",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jaquevan.com",
        title: "Evan Jaquez - Boston University",
        description: "Portfolio of Evan Jaquez - Computer Science and Economics student at Boston University specializing in UI/UX, Project Management, and Frontend Development.",
        siteName: "Evan Jaquez Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Evan Jaquez - Software Engineer & Computer Science Student",
        description: "Portfolio of Evan Jaquez - Computer Science and Economics student at Boston University.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: "cNUcHnHa-COy90552cdEao-BX0AVr6kkW8NgNe-4TGM",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Evan Jaquez",
        "url": "https://jaquevan.com",
        "jobTitle": "Software Engineer",
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Boston University",
        },
        "description": "Computer Science and Economics student at Boston University, passionate about software engineering, full-stack development, and data science.",
        "knowsAbout": [
            "Software Engineering",
            "Frontend Development",
            "Computer Science",
            "Data Science",
            "Economics",
            "Web Development",
            "React",
            "UX Researcher",
            "Next.js",
            "TypeScript"
        ],
        "sameAs": [
            // Add your social media profiles here
            "https://github.com/jaquevan",
            "https://www.linkedin.com/in/evan-jaquez-118b5b294/",
        ]
    };

    return (
        <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </head>
        <body>
        <StyledComponentsRegistry>
            <ClientThemeProvider>{children}</ClientThemeProvider>
        </StyledComponentsRegistry>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}