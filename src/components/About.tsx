"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Monitor, Cpu } from "lucide-react";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    const skills = [
        {
            icon: <Code2 className="w-5 h-5" />,
            label: "Problem Solving",
            desc: "Strong foundation in AI and ML, enabling me to build optimized and reliable software.",
            color: "neon-blue",
            accent: "#38bdf8",
            delay: 0.2,
            num: "01",
        },
        {
            icon: <Monitor className="w-5 h-5" />,
            label: "Web Development",
            desc: "Crafting responsive and scalable web experiences with Next.js, React, and modern CSS.",
            color: "cyber-purple",
            accent: "#a855f7",
            delay: 0.4,
            num: "02",
        },
        {
            icon: <Cpu className="w-5 h-5" />,
            label: "Hackathons",
            desc: "Passionate about tech events and rapidly transforming ideas into functional MVPs.",
            color: "cyber-gold",
            accent: "#facc15",
            delay: 0.6,
            num: "03",
        },
    ];

    return (
        <section
            id="about"
            className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden"
        >
            {/* Ambient background blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
                style={{
                    background:
                        "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
                style={{
                    background:
                        "radial-gradient(circle, #a855f7 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
            />

            {/* ── HEADER ──────────────────────────────────────────── */}
            <div ref={ref} className="mb-24">
                <div className="overflow-hidden mb-3">
                    <motion.p
                        initial={{ y: "120%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                        className="text-xs font-bold tracking-[0.35em] uppercase text-blue-400 font-mono mb-4"
                    >
                        ── Who I Am
                    </motion.p>
                </div>
                <div className="overflow-hidden pb-4">
                    <motion.h2
                        initial={{ y: "110%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 0.9,
                            ease: [0.33, 1, 0.68, 1],
                            delay: 0.1,
                        }}
                        className="text-4xl md:text-7xl font-black tracking-tight"
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            lineHeight: 1.05,
                            background:
                                "linear-gradient(135deg, #e2e8f0 0%, #60a5fa 50%, #a855f7 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        The Mind
                        <br />
                        <span className="italic">Behind</span> the Work
                    </motion.h2>
                </div>
            </div>


            {/* ── BODY ────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* LEFT — Bio block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="lg:col-span-5 relative"
                >
                    {/* Thin accent bar */}
                    <div
                        className="absolute -left-4 top-0 bottom-0 w-[2px] rounded-full"
                        style={{
                            background:
                                "linear-gradient(to bottom, #3b82f6, #a855f7, transparent)",
                        }}
                    />

                    <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden group">
                        {/* corner glow on hover */}
                        <div
                            className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                            style={{
                                background: "radial-gradient(circle, #60a5fa, transparent)",
                            }}
                        />

                        <span
                            className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400 border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full mb-6 font-mono"
                        >
                            Identity Layer
                        </span>

                        <p
                            className="text-white text-xl md:text-2xl font-semibold leading-snug mb-6"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            Building products that are not just functional — but{" "}
                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg,#60a5fa,#a855f7)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                memorable
                            </span>{" "}
                            and enjoyable.
                        </p>

                        <p className="text-gray-400 text-base leading-relaxed mb-4 font-light">
                            I'm{" "}
                            <span className="text-white font-semibold">
                                Shivang Singhal
                            </span>
                            , a passionate developer focused on coding, problem-solving,
                            and building scalable solutions with AI and ML.
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed font-light">
                            Whether it's staying up late during competitive hackathons or
                            crafting seamless web experiences, I thrive on turning complex
                            problems into elegant, impactful technology.
                        </p>

                        {/* stat row */}
                        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                            {[
                                { val: "2+", label: "Years" },
                                { val: "10+", label: "Projects" },
                                { val: "∞", label: "Curiosity" },
                            ].map((s) => (
                                <div key={s.label} className="text-center">
                                    <p
                                        className="text-2xl font-black text-white"
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                    >
                                        {s.val}
                                    </p>
                                    <p className="text-[11px] text-gray-500 uppercase tracking-widest font-mono">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT — Skill cards (horizontal stacked) */}
                <div className="lg:col-span-7 flex flex-col gap-5">
                    {skills.map((s) => (
                        <motion.div
                            key={s.num}
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.75, delay: s.delay, ease: [0.33, 1, 0.68, 1] }}
                            className="glass rounded-2xl p-6 flex items-center gap-6 group relative overflow-hidden cursor-default"
                        >
                            {/* hover fill */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(120deg, ${s.accent}15 0%, transparent 60%)`,
                                }}
                            />

                            {/* Number */}
                            <span
                                className="text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity select-none flex-shrink-0 leading-none"
                                style={{
                                    fontFamily: "'Syne', sans-serif",
                                    color: s.accent,
                                }}
                            >
                                {s.num}
                            </span>

                            {/* Icon pill */}
                            <div
                                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center relative z-10"
                                style={{
                                    background: `${s.accent}20`,
                                    color: s.accent,
                                    border: `1px solid ${s.accent}40`,
                                }}
                            >
                                {s.icon}
                            </div>

                            {/* Text */}
                            <div className="relative z-10 flex-1 min-w-0">
                                <h4
                                    className="text-white text-lg font-bold mb-1"
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                >
                                    {s.label}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">
                                    {s.desc}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div
                                className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 relative z-10"
                                style={{ color: s.accent }}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M4 10h12M11 5l5 5-5 5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Bottom border glow on hover */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Syne font import */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
            `}</style>
        </section>
    );
}
