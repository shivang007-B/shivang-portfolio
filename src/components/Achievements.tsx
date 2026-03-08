"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Award, Star, ArrowUpRight } from "lucide-react";

const milestones = [
    {
        icon: Award,
        date: "2026",
        title: "AWS Certified Developer",
        description:
            "Achieved the AWS Certified Developer credential, demonstrating proficiency in cloud architecture and scalable system design.",
        accent: "#38bdf8",
        glow: "rgba(56,189,248,0.4)",
        tag: "Certification",
        num: "01",
    },
    {
        icon: Star,
        date: "2026",
        title: "hackjklu v5.0",
        description:
            "Created Eco-Campus, a full-stack system for real-time campus carbon monitoring with IoT integration and gamified user engagement.",
        accent: "#facc15",
        glow: "rgba(250,204,21,0.4)",
        tag: "Hackathon",
        num: "02",
    },
    {
        icon: GraduationCap,
        date: "2025–2029",
        title: "UG Student in CS'AI",
        description:
            "Consistently ranked in the top 5%, focusing on Algorithms, AI/ML, and Blockchain technologies at JKLU.",
        accent: "#34d399",
        glow: "rgba(52,211,153,0.4)",
        tag: "Education",
        num: "03",
    },
];

function CyberGrid() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <defs>
                <pattern id="cgrid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1d3a5e" strokeWidth="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cgrid)" />
        </svg>
    );
}

function ScanDots() {
    const [dots, setDots] = useState<{ id: number; x: number; y: number; delay: number; dur: number }[]>([]);
    useEffect(() => {
        setDots(
            Array.from({ length: 30 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 4,
                dur: 2 + Math.random() * 2,
            }))
        );
    }, []);
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {dots.map((d) => (
                <div
                    key={d.id}
                    className="absolute w-[2px] h-[2px] rounded-full bg-blue-400"
                    style={{
                        left: `${d.x}%`,
                        top: `${d.y}%`,
                        animation: `scanBlink ${d.dur}s ${d.delay}s infinite`,
                        opacity: 0,
                    }}
                />
            ))}
        </div>
    );
}

function HorizontalCard({ item, idx }: { item: (typeof milestones)[0]; idx: number }) {
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="relative w-full rounded-2xl overflow-hidden group cursor-default"
            style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            {/* Hover glow border overlay */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    boxShadow: `0 0 35px ${item.glow}, inset 0 0 20px ${item.accent}08`,
                    border: `1px solid ${item.accent}40`,
                }}
            />

            {/* Top accent bar */}
            <div
                className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, ${item.accent}, ${item.accent}40, transparent)` }}
            />

            {/* Corner glow */}
            <div
                className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                style={{ background: item.accent }}
            />
            <div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: item.accent }}
            />

            {/* ── HORIZONTAL LAYOUT ── */}
            <div className="flex items-center gap-6 md:gap-10 p-6 md:p-8 relative z-10">

                {/* Left — Icon node */}
                <div className="flex-shrink-0 relative">
                    {/* Pulse ring */}
                    <motion.div
                        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: idx * 0.4 }}
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ border: `1px solid ${item.accent}`, margin: "-8px" }}
                    />
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                        style={{
                            background: `radial-gradient(circle at 35% 35%, ${item.accent}30, #000000)`,
                            border: `1px solid ${item.accent}40`,
                            boxShadow: `0 0 20px ${item.glow}`,
                        }}
                    >
                        <Icon className="w-7 h-7" style={{ color: item.accent }} />
                    </div>
                </div>

                {/* Center — text content */}
                <div className="flex-1 min-w-0">
                    {/* Top meta row */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                            className="text-[10px] font-bold tracking-[0.3em] uppercase font-mono"
                            style={{ color: item.accent }}
                        >
                            {item.num}
                        </span>
                        <span
                            className="text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full font-mono"
                            style={{
                                color: item.accent,
                                background: `${item.accent}15`,
                                border: `1px solid ${item.accent}35`,
                            }}
                        >
                            {item.tag}
                        </span>
                        <span
                            className="text-[11px] font-mono font-semibold tracking-wider ml-auto"
                            style={{ color: `${item.accent}80` }}
                        >
                            {item.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl md:text-2xl font-black text-white leading-tight mb-2"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        {item.title}
                    </h3>

                    {/* Divider */}
                    <div
                        className="h-[1.5px] rounded-full mb-3 transition-all duration-500 group-hover:w-20"
                        style={{ background: item.accent, width: "2.5rem" }}
                    />

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        {item.description}
                    </p>
                </div>

                {/* Right — Arrow */}
                <div
                    className="flex-shrink-0 w-10 h-10 rounded-full items-center justify-center hidden md:flex opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    style={{
                        background: `${item.accent}15`,
                        border: `1px solid ${item.accent}35`,
                        color: item.accent,
                    }}
                >
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>

            {/* Bottom shimmer */}
            <div
                className="h-[1px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
            />
        </motion.div>
    );
}

export default function Achievements() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const blobY1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const blobY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section
            ref={sectionRef}
            id="achievements"
            className="relative py-32 px-6 md:px-16 max-w-5xl mx-auto overflow-hidden"
        >
            {/* Dark full-bleed bg */}
            <div
                className="absolute inset-0 -z-10"
                style={{ background: "#000000" }}
            />
            <div className="absolute inset-0 -z-10">
                <CyberGrid />
                <ScanDots />
            </div>

            {/* Ambient blobs */}
            <motion.div
                style={{
                    y: blobY1,
                    position: "absolute",
                    top: "-8rem", left: "-8rem",
                    width: "450px", height: "450px",
                    borderRadius: "9999px",
                    opacity: 0.08,
                    background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
                    filter: "blur(80px)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />
            <motion.div
                style={{
                    y: blobY2,
                    position: "absolute",
                    bottom: "-8rem", right: "-8rem",
                    width: "450px", height: "450px",
                    borderRadius: "9999px",
                    opacity: 0.08,
                    background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
                    filter: "blur(80px)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            <div className="relative z-10">
                {/* ── HEADING ── */}
                <div className="mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[11px] font-bold tracking-[0.35em] uppercase font-mono mb-4"
                        style={{ color: "#60a5fa" }}
                    >
                        ── Key Moments
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="font-black tracking-tight"
                        style={{ fontFamily: "'Syne', sans-serif", lineHeight: 1.05, fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
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
                            Milestones
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
                            &amp; Wins
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        className="w-20 h-[2px] mt-5 rounded-full"
                        style={{ originX: 0, background: "linear-gradient(90deg, #60a5fa, #a855f7)" }}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-gray-500 mt-4 text-sm font-light max-w-sm"
                    >
                        A timeline of certifications, hackathons, and academic achievements.
                    </motion.p>
                </div>

                {/* ── HORIZONTAL CARDS ── */}
                <div className="flex flex-col gap-5">
                    {milestones.map((item, idx) => (
                        <HorizontalCard key={item.title} item={item} idx={idx} />
                    ))}
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
                @keyframes scanBlink {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </section>
    );
}