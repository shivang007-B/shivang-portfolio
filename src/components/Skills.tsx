"use client";
import { motion } from "framer-motion";

const categories = [
    {
        title: "Programming",
        items: [
            { name: "C / C++", level: 90 },
            { name: "Python", level: 85 },
            { name: "JavaScript / TypeScript", level: 80 },
        ],
    },
    {
        title: "Web Development",
        items: [
            { name: "React / Next.js", level: 85 },
            { name: "Node.js / Express", level: 75 },
            { name: "Tailwind CSS / HTML / CSS", level: 95 },
        ],
    },
    {
        title: "Core Concepts",
        items: [
            { name: "Data Structures & Algorithms", level: 90 },
            { name: "Object-Oriented Programming", level: 85 },
            { name: "Database Management System", level: 80 },
        ],
    },
    {
        title: "Tools & Technologies",
        items: [
            { name: "Git & GitHub", level: 90 },
            { name: "Docker", level: 60 },
            { name: "Figma", level: 75 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 bg-[#05020a] relative border-t border-purple-900/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <div className="overflow-hidden pb-4">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 inline-block m-0"
                        >
                            Technical Arsenal
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="glass p-8 rounded-3xl hover:bg-white/5 transition-colors border border-purple-500/10 group"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-blue-500 rounded-full group-hover:bg-purple-500 transition-colors" />
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.items.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between text-sm font-medium mb-2">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-blue-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full h-2.5 bg-[#0a0710] rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 0.3 + index * 0.1,
                                                    duration: 1,
                                                    ease: "easeOut",
                                                }}
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                                            >
                                                <div className="absolute top-0 right-0 bottom-0 w-20 bg-white/20 blur-[2px] -skew-x-12 animate-[shimmer_2s_infinite]" />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
        </section>
    );
}
