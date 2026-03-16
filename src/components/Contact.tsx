"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Send, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function ContactPortal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [particles, setParticles] = useState<{ x: string, y: string, opacity: number, duration: number }[]>([]);

    useEffect(() => {
        setParticles(
            [...Array(20)].map(() => ({
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random(),
                duration: Math.random() * 10 + 10,
            }))
        );
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    // Portal Expansion Effect: The ring grows as you scroll to the bottom
    const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.5, 0.8, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-[#0A0A0A] flex items-center justify-center overflow-hidden py-20"
        >
            {/* THE 3D PORTAL BACKGROUND */}
            <motion.div
                style={{ scale, opacity, rotate }}
                className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border-[1px] border-cyan-500/30 shadow-[0_0_100px_rgba(6,182,212,0.2)] pointer-events-none"
            >
                <div className="absolute inset-0 rounded-full border-t-2 border-purple-500/50 blur-[2px]" />
            </motion.div>

            {/* CORE CONTENT */}
            <div className="relative z-10 max-w-4xl w-full px-6 text-center">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-6xl md:text-9xl font-space font-black text-white mb-6 tracking-tighter">
                        READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">BUILD?</span>
                    </h2>
                    <p className="text-gray-400 font-inter text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        The portal is open. Whether it's an AI-driven vision or a full-stack reality, let’s architect the next anomaly.
                    </p>
                </motion.div>

                {/* INTERACTIVE ACTION HUB */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {/* Quick Contact Card */}
                    <motion.a
                        href="mailto:shivang2.0ksd@gmail.com"
                        whileHover={{ scale: 1.02 }}
                        className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="text-cyan-400" />
                        </div>
                        <Mail className="w-10 h-10 text-cyan-400 mb-6" />
                        <h3 className="text-2xl font-space font-bold text-white mb-2">Direct Channel</h3>
                        <p className="text-gray-500 font-inter">shivang2.0ksd@gmail.com</p>
                    </motion.a>

                    {/* Social Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <SocialLink href="https://github.com/shivang007-B" icon={<Github />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/shivangsinghal007b" icon={<Linkedin />} label="LinkedIn" />
                    </div>
                </div>

                {/* BOTTOM NAV / FOOTER */}
                <motion.div
                    className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Available for Innovation — 2026</span>
                    </div>
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">
                        Designed & Architected by Shivang Singhal
                    </p>
                </motion.div>
            </div>

            {/* AMBIENT PARTICLES */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{
                            x: p.x,
                            y: p.y,
                            opacity: p.opacity
                        }}
                        animate={{
                            y: [null, "-100%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: any; label: string }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all group"
        >
            <div className="text-white group-hover:text-cyan-400 transition-colors mb-2">
                {icon}
            </div>
            <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest">
                {label}
            </span>
        </motion.a>
    );
}
