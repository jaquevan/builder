
import { Metadata as NextMetadata } from "next";
import Metadata from "@/app/components/Metadata";
import { homeSEO } from "@/app/utils/pageSEO";
import NavBar from "@/app/components/NavBar";
import Main from "@/app/components/Landing/Main";
import HomeClient from "@/app/components/Landing/HomeClient";

export const generateMetadata = (): NextMetadata => {
    return {
        title: homeSEO.title,
        description: homeSEO.description,
        keywords: homeSEO.keywords,
        icons: {
            icon: [{ url: "/Classic_dart_monkey.webp", sizes: "32x32" }],
            shortcut: "/Classic_dart_monkey.webp",
            apple: "/Classic_dart_monkey.webp",
        },
    };
};

export default function Home() {
    return (
        <>
            <Metadata seo={homeSEO} />
            <NavBar />
            <HomeClient>
                <Main />
            </HomeClient>
        </>
    );
}
