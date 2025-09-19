
import LC from '../public/LC-thumb.png';
import MapleImage from '../public/MAPLE-thumb.png';
import MapleDiscovery from '../public/Maple-Discovery.png';
import MapleUsability from '../public/Maple-Usability.png';
import BostonVoterImage from '../public/BV-thumb.png';
import WordWyrm from '../public/WW-thumb.png';

export const caseStudies = [
    {
        id: "maple",
        title: "MAPLE: Mobile App for Personalized Learning Experience",
        slug: "maple",
        description:
            "MAPLE is a cross-platform mobile application developed for the Boston University Educational Technology Lab. It provides personalized learning experiences through multimedia content and adaptive assessments. The project followed a user-centered design process structured around the Double Diamond framework: Define, Discover, Design, and Deliver.",

        define: {
            image: MapleImage,
            text: "The challenge was to create a mobile platform that could deliver customized educational content to students based on their learning styles and progress, while simultaneously collecting analytics for educators. The project aimed to bridge the gap between student engagement and instructional insight by combining personalization with data-driven teaching support."
        },

        discovery: {
            image: MapleDiscovery,
            text: "Through interviews, surveys, and classroom observations, we gathered insights from both students and faculty. We learned that students struggled with rigid learning tools that did not adapt to their pace, while instructors needed actionable data to adjust their teaching strategies. These findings shaped our design principles: simplicity, engagement, adaptability, and transparency of progress."
        },

        design: {
            images: [MapleUsability, MapleUsability, MapleUsability], // multiple images for this phase
            text: "The design process began with low-fidelity wireframes exploring navigation flows and modular content delivery. Iterative prototyping allowed us to test and refine the experience, ensuring the app was accessible, visually clear, and supportive of varied learning paths. Key features included an adaptive assessment system, intuitive dashboards for tracking progress, and offline learning capabilities for flexibility."
        },

        deliver: {
            image: MapleUsability,
            text: "MAPLE was implemented using React Native for cross-platform accessibility, supported by a Node.js backend and Firebase for real-time updates and data storage. Following pilot deployment in several BU courses, the platform received strong positive feedback. Early results demonstrated a 15% increase in student engagement compared to traditional methods, validating the adaptive learning approach."
        },

        links: {
            live: "https://www.mapletestimony.org/bills/194/H1405"
        },

        image: MapleImage,
        tags: ["Web App", "Civic Tech", "Research"]
    },


    {
        id: 'boston-voter',
        title: "Boston Voter Hub",
        slug: "bv",
        description:
            "Boston Voter is a civic engagement platform designed to increase voter turnout in local elections. Initially focused on understanding barriers to voting in Boston, the project evolved into a collaborative effort with community organizations to design digital and physical interventions that motivate and inform both frequent and infrequent voters.",

        define: {
            image: BostonVoterImage,
            text: "The challenge was to design a civic technology solution that could address declining participation in local Boston elections, particularly among younger and infrequent voters. The goal was not only to provide information but also to create interventions that would meaningfully connect communities to the democratic process."
        },

        discovery: {
            image: BostonVoterImage, // replace with actual asset
            text: "Through surveys and one-on-one interviews with Boston residents, our team crafted user personas for two key groups: frequent voters and infrequent voters. Community leaders and activists highlighted that younger generations were less engaged in local elections, which shaped how we prioritized features and framed our outreach strategies. This research underscored the importance of accessibility, relevance, and trust in the design process."
        },

        design: {
            images: [
                BostonVoterImage, // replace with actual assets
                BostonVoterImage,
                BostonVoterImage
            ],
            text: "The design phase began with wireframes and prototypes for a mobile-friendly platform that guided users through upcoming elections with clear, actionable information. Key pages included simplified ballot questions and tailored guidance for first-time voters. In parallel, we extended design work to physical interventions: personalized voter mailers that combined census data with our user research. This hybrid digital-physical approach emphasized inclusivity, accessibility, and community-centered design."
        },

        deliver: {
            image: BostonVoterImage, // replace with actual asset
            text: "The Boston Voter Hub officially launched in Summer 2025 under the supervision of a SWE practicum. Earlier, in Summer 2024, I polished the frontend codebase and facilitated cross-client research between the Greater Boston News Bureau and the Urban League of Eastern Massachusetts. A mailer experiment reached 5,000 citizens out of a 10,000-person sample, with analysis later conducted to evaluate its impact on turnout. The project continues to evolve as a living, community-focused platform supporting civic participation."
        },

        image: BostonVoterImage,
        tags: ["Civic Tech", "Voter Engagement", "Community Research"]
    },

    {
        id: 'lc',
        title: 'La Colaborativa',
        slug: 'lc',
        description: 'desc',
        image: LC,
    },

    {
        id: 'word-wyrm',
        title: "Word Wyrm",
        slug: "ww",
        description:
            "Word Wyrm is an in-progress project from XC475 where I serve as a UX Designer and Technical Teammate. The project is currently in a design sprint, with Discovery completed and Design underway. Word Wyrm will explore how AI-driven gamification can transform traditional worksheets into engaging, interactive language-learning experiences.",

        define: {
            image: WordWyrm, // main poster/cover
            text: "Language learning often relies on worksheets and drills that are boring and passive. Our challenge is to create a gamified, AI-powered tool that helps teachers convert existing lesson materials into interactive games, reducing prep time while keeping students engaged."
        },

        discovery: {
            image: WordWyrm, // placeholder, swap for a slide image
            text: "In Discovery, we conducted interviews with teachers and students to understand their needs. Insights included: keep the interface simple (2–3 clicks to start), balance fun with real learning, and ensure practice extends beyond the classroom. Personas like 'Bilingual Ben' highlighted the need for intuitive tools that save prep time and track student progress."
        },

        presentation: "/presentations/maple-presentation.pdf", // Path to PDF in public folder

        image: WordWyrm,
        tags: ["UX Design", "Gamification", "Language Learning", "In Progress"]
    }
    ];


export function getCaseStudyBySlug(slug: string) {
    return caseStudies.find(study => study.slug === slug);
}