"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export const HeroTitle = () => {
    const name = "SHIVANG SINGHAL";

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, damping: 12, stiffness: 100 },
        },
        hidden: {
            opacity: 0,
            y: 50,
        },
    };

    return (
        <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-9xl font-space font-bold text-white tracking-tighter"
        >
            {name.split("").map((char, index) => (
                <motion.span key={index} variants={child} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Dilation Effect Maps
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ scale, opacity, y: yTransform }}
                className="relative z-10 flex flex-col items-center justify-center text-center w-full px-6"
            >
                <div className="glow mb-8 animate-pulse rounded-full w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-3xl" style={{ background: 'var(--color-electric-blue)' }}></div>
                <HeroTitle />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-6 text-xl md:text-2xl text-gray-400 font-inter max-w-2xl"
                >
                    UI/UX Designer <span className="text-electric-blue mx-2">|</span> AI Engineer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-space">Scroll to Initialize</span>
                    <ArrowDown className="w-5 h-5 text-gray-500 animate-bounce" />
                </motion.div>
            </motion.div>
        </section>
    );
}
