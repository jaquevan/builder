"use client";

import { useEffect, ReactNode } from "react";

export default function HomeClient({ children }: { children: ReactNode }) {
    useEffect(() => {
        // disable scrolling completely
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        // hide scrollbars (cross-browser)
        document.body.style.scrollbarWidth = "none"; // Firefox
        (document.body.style as unknown as Record<string, string>)["-ms-overflow-style"] = "none"; // IE & Edge
        document.body.classList.add("no-scrollbar");

        // fix mobile Safari 100vh bug
        const setVh = () => {
            document.documentElement.style.setProperty(
                "--vh",
                `${window.innerHeight * 0.01}px`
            );
        };
        setVh();
        window.addEventListener("resize", setVh);

        // ✅ Cleanup on unmount
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.scrollbarWidth = "";
            (document.body.style as unknown as Record<string, string>)["-ms-overflow-style"] = "";
            document.body.classList.remove("no-scrollbar");
            window.removeEventListener("resize", setVh);
        };
    }, []);

    return (
        <div
            style={{
                height: "calc(var(--vh, 1vh) * 100)",
                width: "100vw",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
            }}
        >
            {children}
            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* just in case the html element still triggers scrollbars */
        html::-webkit-scrollbar {
          display: none;
        }

        html,
        body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE & Edge */
        }
      `}</style>
        </div>
    );
}
