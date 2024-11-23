import type { Metadata } from "next";

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
