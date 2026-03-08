import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivang Singhal | Project Singularity",
  description: "Software Developer | Problem Solver | Tech Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${space.variable} ${inter.variable} font-sans antialiased text-[#e0e0e0] bg-[#0a0a0a]`}>
        <BackgroundCanvas />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
