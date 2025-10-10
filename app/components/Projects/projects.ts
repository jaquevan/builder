// Project Images
import planit from '@/public/plantasks.png';
import camel from '@/public/camelitics.png';
import dbz from '@/public/dbz.png';
import bdd from '@/public/bdd.png';
import weather from '@/public/weather.png';
import three from '@/public/fe/Three.js_Icon.svg.png';
import onc from "@/public/fe/our_national_conversation_logo.jpg";
import ecodev from "@/public/lc.png"; // Add this image
import bostonVoter from "@/public/BV.png"; // Add this image
import { Project } from "./ProjectCard"

const projects: Project[] = [

    {
    id: "ecodev",
    title: "La Colaborativa EcoDev",
    image: ecodev.src,
    description: "A dedicated platform for La Colaborativa's EcoDev team to display their projects and initiatives.",
    github: "https://github.com/jaquevan/ecodev-platform",
    liveLink: "https://ecodev-website.vercel.app/"
   },

    {
        id: "boston-voter",
        title: "Boston Voter App",
        image: bostonVoter.src,
        description: "Developed for the City of Boston to increase voter participation in BIPOC communities.",
        github: null,
        liveLink: "https://dev--bostonvoter.up.railway.app/upcomingElections"
    },
    {
        id: "planit",
        title: "Plan It",
        image: planit.src,
        description: "Space themed productivity app with meditation, tasks-completion & journaling features",
        github: "https://github.com/jaquevan/Plan-It_bh2024",
        liveLink: null,
        hackathonWinner: "Best Health Hack"
    },


    {
        id: "camelitics",
        title: "Camelitics",
        image: camel.src,
        description: "Landing page and adobe extenstion for SEO and web analytics",
        github: "https://github.com/TemiKayas/Camelitics",
        liveLink: null,
        hackathonWinner: "MLH Adobe Award"
    },


    {
        id: "onc",
        title: "Our National Conversation",
        image: onc.src,
        description: "Non-profit website to promote civic engagement among young adults",
        github: null,
        liveLink: "https://www.ournationalconversation.org/"
    },

    {
        id: "Dbz",
        title: "Dragon Ball Z Mini Wiki",
        image: dbz.src,
        description: "Practice using API data to create a mini wiki in React",
        github: "https://github.com/jaquevan/React-Dragon-Ball-Wiki",
        liveLink: "https://mp-2-mauve.vercel.app/"
    },

    {
        id: "three",
        title: "Three JS and WebGL Demo",
        image: three.src,
        description: "Demo used to present Three.js and WebGL to my web development class",
        github: "https://github.com/jaquevan/webShape",
        liveLink: "https://web-shape-ewt8iabyx-jaquevans-projects.vercel.app/"
    },

    {
        id: "BDD",
        title: "Blue Dev Digital",
        image: bdd.src,
        description: "Front-end Developer for Startup that helped local businesses with web design",
        github: null,
        liveLink: "https://www.bluedevdigital.com/"
    },
    {
        id: "Weather App",
        title: "Weather App",
        image: weather.src,
        description: "Next.js weather app",
        github: "https://github.com/jaquevan/Weather-App-",
        liveLink: "https://mp4-wine.vercel.app/"
    }
];

export default projects;