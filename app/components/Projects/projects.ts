// Project Images
import planit from '@/public/plantasks.png';
import camel from '@/public/camelitics.png';
import dbz from '@/public/dbz.png';
import bdd from '@/public/bdd.png';
import weather from '@/public/weather.png';
import onc from "@/public/onc.jpg";
import { Project } from "./ProjectCard"

const projects: Project[] = [
    {
        id: "planit",
        title: "Plan It",
        image: planit.src,
        description: "Space themed productivity app with meditation, tasks-completion & journaling features",
        learnings: "Built with Next.js. Learned state management, user experience experience, and implementing multiple connected features.",
        github: "https://github.com/jaquevan/Plan-It_bh2024",
        liveLink: null
    },
    {
        id: "camelitics",
        title: "Camelitics",
        image: camel.src,
        description: "Landing page and adobe extenstion for SEO and web analytics",
        learnings: "Learned simple js animations, how to create extensions with React, and processing datasets for admin dashboards.",
        github: "https://github.com/TemiKayas/Camelitics",
        liveLink: null
    },
    {
         id: "onc",
         title: "Our National Conversation",
         image: onc.src,
         description: "Modern forum for constructive national discussion",
         learnings: "Developed skills including authentication, React, and responsive experience.",
         github: null,
         liveLink: "https://www.ournationalconversation.org/"
     },
    {
        id: "Dbz",
        title: "Dragon Ball Z Mini Wiki",
        image: dbz.src,
        description: "Practice using API data to create a mini wiki in React",
        learnings: "Developed skills in fetching and displaying API data, and creating a user-friendly interface in React.",
        github: "https://github.com/jaquevan/React-Dragon-Ball-Wiki",
        liveLink: "https://mp-2-mauve.vercel.app/"
    },
    {
        id: "BDD",
        title: "Blue Dev Digital",
        image: bdd.src,
        description: "UX/UI Consultant and Front-end Developer ",
        learnings: "Update and maintain company website and update content.",
        github: null,
        liveLink: "https://www.bluedevdigital.com/"
    },
    {
        id: "Weather App",
        title: "Weather App",
        image: weather.src,
        description: "Next.js weather app",
        learnings: "How to fetch and display API data in Next.js",
        github: "https://github.com/jaquevan/Weather-App-",
        liveLink: "https://mp4-wine.vercel.app/"
    }
];

export default projects;