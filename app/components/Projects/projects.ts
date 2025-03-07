// Project Images
import planit from '@/public/planitHome.png';
import camel from '@/public/camelitics.png';
import dbz from '@/public/dbz.png';
import bdd from '@/public/bdd.png';
import weather from '@/public/weather.png';
import { Project } from "./ProjectCard"

const projects: Project[] = [
    {
        id: "planit",
        title: "Plan It",
        image: planit,
        description: "Productivity app with timer, tasks & journaling",
        learnings: "Built with React. Learned state management, user experience design, and implementing multiple connected features.",
        github: "https://github.com/jaquevan/Plan-It_bh2024",
        liveLink: null
    },
    {
        id: "camelitics",
        title: "Camelitics",
        image: camel,
        description: "Data platform for camel racing statistics",
        learnings: "Mastered data visualization, processing algorithms, and creating intuitive dashboards for complex datasets.",
        github: "https://github.com/TemiKayas/Camelitics",
        liveLink: null
    },
    {
        id: "onc",
        title: "Our National Conversation",
        image: null,
        description: "Modern forum for constructive national discussion",
        learnings: "Developed community platform skills including authentication, moderation tools, and engagement features.",
        github: null,
        liveLink: "https://www.ournationalconversation.org/"
    },
    {
        id: "Dbz",
        title: "Dragon Ball Z Mini Wiki",
        image: dbz,
        description: "Practice using API data to create a mini wiki in React",
        learnings: "Developed skills in fetching and displaying API data, and creating a user-friendly interface.",
        github: "https://github.com/jaquevan/React-Dragon-Ball-Wiki",
        liveLink: "https://mp-2-mauve.vercel.app/"
    },
    {
        id: "BDD",
        title: "Blue Dev Digital",
        image: bdd,
        description: "UX/UI Consultant and Front-end Developer ",
        learnings: "Updated and maintain company website, created new pages and updated content.",
        github: null,
        liveLink: "https://www.bluedevdigital.com/"
    },
    {
        id: "Weather App",
        title: "Weather App",
        image: weather,
        description: "Next.js weather app",
        learnings: "Built with Next.js.",
        github: "https://github.com/jaquevan/Weather-App-",
        liveLink: "https://mp4-wine.vercel.app/"
    }
];

export default projects;