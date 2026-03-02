"use client";
import { motion } from "framer-motion";
import { Trophy, GraduationCap, Award, Star } from "lucide-react";

const milestones = [
    {
        icon: <Trophy className="w-6 h-6" />,
        date: "2025",
        title: "1st Place - Smart India Hackathon",
        description: "Developed an AI-driven healthcare solution reducing diagnostic time by 40%.",
        color: "from-blue-500 to-cyan-400",
    },
    {
        icon: <Award className="w-6 h-6" />,
        date: "2026",
        title: "AWS Certified Developer",
        description: "Achieved the AWS Certified Developer credential, demonstrating proficiency in cloud architecture.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: <Star className="w-6 h-6" />,
        date: "2026",
        title: "hackjklu v5.0",
        description: "Built a sustainable tech platform __Innovation: Real-time campus carbon tracking + IoT + gamification__// ECO-CAMPUS: FULL-STACK CARBON TRACKING SYSTEM //.",
        color: "from-orange-500 to-yellow-500",
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        date: "2025-2029",
        title: "UG Student in CS'AI",
        description: "Consistently maintaining top 5% academic performance with core focus on algorithms | A.i.| Blockchain.",
        color: "from-green-500 to-emerald-400",
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-32 bg-[#080514] relative border-t border-purple-900/20">
            {/* Background visual */}
            <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-24">
                    <div className="overflow-hidden pb-4">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 inline-block m-0"
                        >
                            Milestones
                        </motion.h2>
                    </div>
                    <div className="overflow-hidden mt-4">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
                        />
                    </div>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent -translate-x-1/2 rounded-full" />

                    <div className="space-y-16">
                        {milestones.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="hidden md:block w-5/12" />

                                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#0a0710] border-4 border-[#080514] shrink-0 shadow-[0_0_20px_rgba(138,43,226,0.5)]">
                                    <div
                                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-md`}
                                    />
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-br ${item.color}`}>
                                        {item.icon}
                                    </span>
                                </div>

                                <div className="w-full md:w-5/12 glass rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 mt-6 md:mt-0 relative group">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full bg-white/5 border border-white/10 text-white mb-4`}>
                                        {item.date}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
