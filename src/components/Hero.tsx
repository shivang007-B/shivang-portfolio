"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#FAF9F6]">
            {/* Soft Background Accents */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute top-1/4 -right-[10%] w-[500px] h-[500px] bg-[#FDF5E6] rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    className="absolute bottom-1/4 -left-[10%] w-[600px] h-[600px] bg-[#A3B18A]/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center space-y-10 text-center w-full">

                {/* Profile Illustration */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-40 h-40 md:w-48 md:h-48 mb-4"
                >
                    <div className="absolute inset-0 bg-[#D2796D]/20 rounded-full blur-xl animate-pulse" />
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 drop-shadow-sm">
                        <path fill="#D2796D" d="M45.7,-76.4C58.9,-69.1,69.2,-55.8,76.5,-41.4C83.9,-27,88.4,-11.5,86.2,3.3C84,18.1,75.1,32.2,65.3,45.2C55.5,58.3,44.7,70.2,31.2,76.8C17.7,83.4,1.4,84.7,-14.2,81.8C-29.8,78.9,-44.7,71.7,-57.4,61C-(70.1,50.3,-80.6,36.2,-85.5,20.4C-90.4,4.7,-89.7,-12.6,-83.1,-27.6C-76.6,-42.6,-64.1,-55.2,-50.3,-62.4C-36.4,-69.7,-21.2,-71.4,-5.4,-64.6C10.5,-57.8,21,-42.4,32.5,-48.9C44.1,-55.5,-23,-83.8,-11.1,-84.9C0.8,-86,22.2,-87.4,32.5,-83.7Z" transform="translate(100 100) scale(1.1)" />
                        <circle cx="100" cy="100" r="70" fill="#FDF5E6" />
                        {/* Simple abstract face/figure representation */}
                        <circle cx="100" cy="80" r="25" fill="#A3B18A" />
                        <path d="M60 150 Q100 100 140 150" fill="none" stroke="#A3B18A" strokeWidth="20" strokeLinecap="round" />
                    </svg>
                </motion.div>

                {/* Heading */}
                <div className="overflow-hidden pb-4 max-w-4xl">
                    <motion.h1
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold tracking-tight text-[#333333] leading-tight"
                    >
                        Crafting Intuitive Experiences. <br className="hidden md:block" /> I'm <span className="text-[#D2796D] italic">Shivang Singhal</span>, <br className="hidden md:block" />a UI/UX Designer.
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        I focus on human-centered design, translating complex problems into elegant, accessible, and meaningful digital interfaces.
                    </motion.p>
                </div>

                {/* CTAs */}
                <div className="overflow-hidden mt-8 pt-2">
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-[#D2796D] rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-[#c26a5f] shadow-lg shadow-[#D2796D]/20"
                        >
                            <span className="mr-2">View Projects</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="https://drive.google.com/file/d/1y3cBDwjJgT0RH7q4A4P4amwYXoQ11GVA/view?usp=sharing"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-[#333333] border border-gray-300 rounded-full transition-all hover:bg-white hover:border-gray-400"
                        >
                            <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform text-[#A3B18A]" />
                            <span>Resume (PDF)</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
