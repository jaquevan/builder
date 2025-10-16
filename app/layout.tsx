import type { Metadata } from "next";
import "../app/global.css";
import ClientThemeProvider from './ClientThemeProvider';
import StyledComponentsRegistry from '../lib/registry';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
    title: {
        default: "Evan Jaquez",
        template: "%s | Evan Jaquez"
    },
    description: "Evan Jaquez (Evan J) is a Computer Science and Economics student at Boston University (BU), specializing in software engineering, frontend development, UI/UX design. Portfolio showcasing projects at La Colaborativa, Boston Voter, MAPLE, and Word Wyrm.",
    keywords: [
        // Name variations
        "Evan Jaquez",
        "Evan J",
        "Evan Jacques",
        "Evan Jacquez",
        "Evan BU",
        "Evan Jaquez Boston University",
        "Evan J BU",
        "Evan Jacques BU",
        // Professional titles
        "Software Engineer",
        "Frontend Developer",
        "Full Stack Developer",
        "UX Designer",
        "UX Researcher",
        "Web Developer",
        "UI/UX Designer",
        // Education
        "Computer Science",
        "Boston University",
        "BU Computer Science",
        "BU Economics",
        "Economics Student",
        // Technical skills
        "React Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "JavaScript",
        "Node.js",
        "Tailwind CSS",
        "Strapi CMS",
        "Python",
        "Data Science",
        // Projects & Experience
        "La Colaborativa",
        "Boston Voter",
        "MAPLE 3.0",
        "Word Wyrm",
        "Trailblazer Boston Hacks",
        "Chelsea MA Developer",
        // Specific expertise
        "Civic Tech",
        "Educational Technology",
        "Digital Equity",
        "Web Accessibility",
        "Mobile-First Design",
        "Responsive Design",
        "Portfolio",
        "Hackathon Winner",
        "Boston Hacks 2025"
    ],
    authors: [{ name: "Evan Jaquez" }],
    creator: "Evan Jaquez",
    publisher: "Evan Jaquez",
    metadataBase: new URL('https://jaquevan.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://jaquevan.com",
        title: "Evan Jaquez | Boston University",
        description: "Portfolio of Evan Jaquez (Evan J) - Computer Science and Economics student at Boston University specializing in UI/UX design, frontend development, and civic technology. Projects: La Colaborativa, Boston Voter, MAPLE, Word Wyrm.",
        siteName: "Evan Jaquez Portfolio",
        images: [
            {
                url: '/pfp2.jpg',
                width: 1200,
                height: 630,
                alt: 'Evan Jaquez - Software Engineer & UX Researcher/Designer',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Evan Jaquez - Software Engineer & UX Researcher/Designer @ Boston University",
        description: "Portfolio of Evan Jaquez - CS & Econ student at BU. Frontend dev, UX designer, civic tech enthusiast.",
        images: ['/pfp2.jpg'],
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
        "alternateName": ["Evan J", "Evan Jacques", "Evan Jacquez"],
        "url": "https://jaquevan.com",
        "jobTitle": ["Software Engineer", "UX Designer", "Frontend Developer"],
        "worksFor": [
            {
                "@type": "Organization",
                "name": "La Colaborativa",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Chelsea",
                    "addressRegion": "MA"
                }
            }
        ],
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Boston University",
            "sameAs": "https://www.bu.edu"
        },
        "description": "Evan Jaquez (also known as Evan J) is a Computer Science and Economics student at Boston University, specializing in software engineering, frontend development, UI/UX design, and civic technology. Known for work on La Colaborativa, Boston Voter, MAPLE, and Word Wyrm projects.",
        "knowsAbout": [
            "Software Engineering",
            "Frontend Development",
            "Full Stack Development",
            "UI/UX Design",
            "Computer Science",
            "Data Science",
            "Economics",
            "Web Development",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Python",
            "Tailwind CSS",
            "Strapi CMS",
            "Civic Technology",
            "Educational Technology",
            "Digital Equity",
            "Web Accessibility",
            "Mobile-First Design"
        ],
        "award": [
            "Boston Hacks 2025 Winner - Trailblazer",
            "MLH Adobe Award - Camelitics"
        ],
        "sameAs": [
            "https://github.com/jaquevan",
            "https://www.linkedin.com/in/evan-jaquez-118b5b294/"
        ],
        "mainEntityOfPage": {
            "@type": "ProfilePage",
            "@id": "https://jaquevan.com"
        }
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