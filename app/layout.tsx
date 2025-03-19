import type { Metadata } from "next";
import "../app/global.css";
import ClientThemeProvider from './ClientThemeProvider';
import StyledComponentsRegistry from '../lib/registry';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
    title: "builder | jaquevan",
    description: "personal portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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