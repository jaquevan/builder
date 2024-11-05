import type { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";



export const metadata: Metadata = {
  title: "builder co. | jaquevan",
  description: "Built using next.js, three.js, and webGL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
    <NavBar />
      <body>
        {children}
      </body>

    <Footer/>
    </html>
  );
}
