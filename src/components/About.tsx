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

    return (
        <section id="about" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
            <div ref={ref} className="text-center mb-16">
                <div className="overflow-hidden pb-4">
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 inline-block m-0"
                    >
                        About Me
                    </motion.h2>
                </div>
                <div className="overflow-hidden mt-4">
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="glass rounded-3xl p-10 backdrop-blur-md text-left"
                >
                    <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10">
                        <span className="text-sm font-semibold text-blue-300 uppercase tracking-widest">
                            Who am I?
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6">
                        A B.Tech Computer Science Student Passionate About Tech
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        I am Shivang Singhal, a dedicated developer with a deep passion for coding and problem-solving.
                        My journey through Data Structures and Algorithms (DSA) has honed my analytical thinking, allowing me to build efficient, scalable solutions.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Whether it's staying up late during competitive hackathons or crafting seamless web experiences, I thrive on turning complex problems into elegant, impactful technology.
                    </p>
                </motion.div>

                {/* Feature Cards Side */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-start p-6 glass rounded-2xl border-white/5 bg-gradient-to-br from-[#110e20] to-[#0a0710]"
                    >
                        <div className="p-4 rounded-full bg-blue-500/20 text-blue-400 mr-6">
                            <Code2 className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">
                                Problem Solving
                            </h4>
                            <p className="text-gray-400">
                                Strong foundation in DSA, enabling me to write optimized and reliable software.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-start p-6 glass rounded-2xl border-white/5 bg-gradient-to-br from-[#110e20] to-[#0a0710]"
                    >
                        <div className="p-4 rounded-full bg-purple-500/20 text-purple-400 mr-6">
                            <Monitor className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">
                                Web Development
                            </h4>
                            <p className="text-gray-400">
                                Building responsive, scalable web applications with Next.js, React, and modern CSS.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-start p-6 glass rounded-2xl border-white/5 bg-gradient-to-br from-[#110e20] to-[#0a0710]"
                    >
                        <div className="p-4 rounded-full bg-indigo-500/20 text-indigo-400 mr-6">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Hackathons</h4>
                            <p className="text-gray-400">
                                Active participant in tech events, rapidly prototyping ideas into functional MVP products.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
