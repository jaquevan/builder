import type { Metadata } from "next";
import "../app/global.css";
import ClientThemeProvider from './ClientThemeProvider';

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
        <ClientThemeProvider>{children}</ClientThemeProvider>
        </body>
        </html>
    );
}