import type { Metadata } from "next";
import "../app/global.css";

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
        {children}
      </body>
    </html>
  );
}
