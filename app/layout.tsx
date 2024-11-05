import type { Metadata } from "next";



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
      <body>
        {children}
      <h3>Builder Co</h3>
      </body>
    </html>
  );
}
