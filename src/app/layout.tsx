import type { Metadata, Viewport } from "next";
import { Syne, DM_Mono } from "next/font/google";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import "./globals.css";

/* ── FONTS ─────────────────────────────────────────────────────────── */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

/* ── METADATA ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Shivang Singhal | Project Singularity",
  description: "Software Developer | Problem Solver | Tech Enthusiast",
  keywords: ["Shivang Singhal", "developer", "portfolio", "AI", "ML", "Next.js"],
  authors: [{ name: "Shivang Singhal" }],
  // Mobile share / PWA meta
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "S.S Portfolio",
  },
  openGraph: {
    title: "Shivang Singhal | Project Singularity",
    description: "Software Developer | Problem Solver | Tech Enthusiast",
    type: "website",
  },
};

/* ── VIEWPORT (separate export — Next.js 14+) ───────────────────────── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,          // prevent accidental zoom on iOS
  userScalable: false,
  viewportFit: "cover",     // respect iPhone notch / Dynamic Island
  themeColor: "#000000",    // browser chrome color on Android
};

/* ── ROOT LAYOUT ────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`
          ${syne.variable}
          ${dmMono.variable}
          font-sans antialiased
          text-[#e0e0e0]
          bg-black
          /* Mobile: prevent horizontal overflow, ensure full height */
          overflow-x-hidden
          min-h-screen min-h-[100dvh]
          /* Safe area padding for notch phones */
          [padding-top:env(safe-area-inset-top)]
          [padding-bottom:env(safe-area-inset-bottom)]
          [padding-left:env(safe-area-inset-left)]
          [padding-right:env(safe-area-inset-right)]
        `}
        style={{
          /* CSS custom props available site-wide */
          /* 
            --font-syne   → display headings
            --font-mono   → labels, badges, tags
          */
        } as React.CSSProperties}
      >
        {/* Fixed animated background — stays behind everything */}
        <BackgroundCanvas />

        {/*
          Main content wrapper:
          - relative so sections can use absolute positioning internally
          - isolate creates a new stacking context (keeps z-index clean)
          - touch-manipulation improves tap responsiveness on iOS
        */}
        <div
          className="
            relative isolate
            min-h-screen min-h-[100dvh]
            w-full max-w-[100vw]
            overflow-x-hidden
          "
          style={{ touchAction: "pan-y" }}
        >
          {children}
        </div>

        {/* Global mobile CSS fixes */}
        <style>{`
          /* Remove tap highlight on iOS */
          * { -webkit-tap-highlight-color: transparent; }

          /* Smooth momentum scroll on iOS */
          html { -webkit-overflow-scrolling: touch; scroll-behavior: smooth; }

          /* Prevent text size inflation on orientation change */
          body { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }

          /* Font variables mapped to Tailwind utilities */
          :root {
            --font-display: var(--font-syne), 'Segoe UI', sans-serif;
            --font-code:    var(--font-mono), 'Courier New', monospace;
          }

          /* Custom scrollbar — thin, dark, cyber-blue accent */
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: #000; }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #38bdf8, #a855f7);
            border-radius: 9999px;
          }
          scrollbar-width: thin;
          scrollbar-color: #38bdf8 #000;

          /* Mobile: reduce section vertical padding */
          @media (max-width: 640px) {
            section { padding-top: 5rem !important; padding-bottom: 5rem !important; }
          }

          /* Prevent canvas overflow on mobile */
          canvas { max-width: 100% !important; touch-action: none; }

          /* Fix Three.js / WebGL canvas on mobile Safari */
          canvas[data-engine] {
            width: 100% !important;
            height: 100% !important;
          }
        `}</style>
      </body>
    </html>
  );
}