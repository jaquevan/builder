import type { Metadata } from "next";
import NavBar from "@/app/components/NavBar";



export const metadata: Metadata = {
  title: "builder co. | jaquevan",
  description: " ",
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
      <NavBar />
    </html>
  );
}
