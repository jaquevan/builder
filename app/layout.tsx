import type { Metadata } from "next";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import {Container} from "@mui/material"


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
    <Container>

      <body>
        {children}
      </body>

    <NavBar />
    <Footer/>



    </Container>
    </html>
  );
}
