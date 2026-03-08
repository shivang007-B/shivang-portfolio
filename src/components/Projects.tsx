"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
    {
        title: "C.A.L.M Interface",
        description:
            "An AI-powered Mental Health Companion App that provides a safe, interactive, and engaging platform for users to manage their mental wellness.",
        category: "Mobile App",
        tech: ["Figma", "React Native", "Tailwind"],
        link: "https://github.com/shivang007-B/C.A.L.M",
        index: "01",
        accent: "#38bdf8",
    },
    {
        title: "ShopNova",
        description:
            "A Neo-Noir gamified e-commerce platform featuring an Electric Indigo & Cyber Gold palette, glassmorphism, and 3D tilt hover effects for a premium shopping experience.",
        category: "Web App",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        link: "https://github.com/shivang007-B/SHOPNOVA-a-gamified-e-commerce-website",
        index: "02",
        accent: "#a855f7",
    },
    {
        title: "Veritone AI",
        description:
            "A real-time voice fraud detection frontend dashboard with a modern Glass-Bento UI, asymmetrical grids, and ambient glows for an AI security terminal aesthetic.",
        category: "Frontend UI",
        tech: ["React", "AI/ML", "UI/UX"],
        link: "https://github.com/shivang007-B/-Veritone-AI-Real-Time-Voice-Fraud-Detection",
        index: "03",
        accent: "#facc15",
    },
    {
        title: "CCD Digital Hub",
        description:
            "A Kinetic Bento UI redesign for Chai Coffee Darbar (JKLU student hangout spot), featuring a warm cream palette and interactive menu tiles.",
        category: "Web Design",
        tech: ["Web Design", "React", "Animations"],
        link: "https://github.com/shivang007-B/CCD-jklu-student-hangout-spot-",
        index: "04",
        accent: "#34d399",
    },
];

const ProjectCard = ({
    project,
    idx,
}: {
    project: (typeof projects)[0];
    idx: number;
}) => (
    <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] }}
        whileHover={{ y: -5, scale: 1.01 }}
        className="relative w-full rounded-2xl group overflow-hidden cursor-pointer"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
        {/* Glass base */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl rounded-2xl" />

        {/* Hover corner glow */}
        <div
            className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-700 blur-3xl pointer-events-none"
            style={{ background: project.accent }}
        />

        {/* Bottom shimmer line */}
        <div
            className="absolute bottom-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
                background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
            }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col p-6">
            {/* Top row */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <span
                        className="text-[10px] font-bold tracking-[0.3em] uppercase font-mono"
                        style={{ color: project.accent }}
                    >
                        {project.index}
                    </span>
                    <span
                        className="text-[9px] font-semibold tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full font-mono"
                        style={{
                            color: project.accent,
                            background: `${project.accent}18`,
                            border: `1px solid ${project.accent}30`,
                        }}
                    >
                        {project.category}
                    </span>
                </div>
                <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    style={{
                        background: `${project.accent}20`,
                        border: `1px solid ${project.accent}40`,
                        color: project.accent,
                    }}
                >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
            </div>

            {/* Title */}
            <h3
                className="text-xl font-black text-white leading-tight mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
            >
                {project.title}
            </h3>

            {/* Expanding divider */}
            <div
                className="h-[1.5px] rounded-full mb-3 transition-all duration-500 group-hover:w-16"
                style={{ background: project.accent, width: "2rem" }}
            />

            {/* Description */}
            <p className="text-gray-400 text-xs leading-relaxed font-light mb-4">
                {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[10px] font-mono rounded-full text-white/50"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.a>
);

export default function Projects() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section
            id="projects"
            ref={ref}
            className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden"
        >
            {/* Ambient blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
                    filter: "blur(70px)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
                    filter: "blur(70px)",
                }}
            />

            {/* ── HEADER ── */}
            <div className="mb-16">
                {/* Eyebrow — no scroll trigger, always visible */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-[11px] font-bold tracking-[0.35em] uppercase font-mono mb-4"
                    style={{ color: "#60a5fa" }}
                >
                    ── Featured Work
                </motion.p>

                {/* Heading — plain white + colored spans to avoid webkit clip issues */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                    className="font-black tracking-tight text-white"
                    style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(3rem, 7vw, 5.5rem)",
                        lineHeight: 1.05,
                    }}
                >
                    <span
                        style={{
                            background: "linear-gradient(135deg, #e2e8f0 0%, #60a5fa 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            display: "inline-block",
                        }}
                    >
                        Project
                    </span>
                    <br />
                    <span
                        className="italic"
                        style={{
                            background: "linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            display: "inline-block",
                        }}
                    >
                        Horizon
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    style={{ originX: 0, background: "linear-gradient(90deg, #60a5fa, #a855f7)" }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.35 }}
                    className="w-20 h-[2px] mt-5 rounded-full"
                />

                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-4 text-sm font-light max-w-sm"
                    style={{ color: "#6b7280" }}
                >
                    A curated collection of builds — from AI tools to immersive interfaces.
                </motion.p>
            </div>

            {/* ── CARD GRID — 2 cols desktop, 1 col mobile ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project, idx) => (
                    <ProjectCard key={project.title} project={project} idx={idx} />
                ))}
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
            `}</style>
        </section>
    );
}