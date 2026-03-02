"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "C.A.L.M Interface",
        description: "An AI-powered Mental Health Companion App that provides a safe, interactive, and engaging platform for users to manage their mental wellness.",
        category: "Mobile App",
        tech: ["Figma", "React Native", "Tailwind"],
        link: "#",
        colorBg: "bg-[#FDF5E6]",
        colorAccent: "text-[#D2796D]",
    },
    {
        title: "E-Commerce Experience",
        description: "A seamless shopping experience with intuitive filtering, minimal checkout flows, and high scalability for modern retail.",
        category: "Web Design",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        link: "#",
        colorBg: "bg-[#f2f4ec]", // Light Sage tint
        colorAccent: "text-[#A3B18A]",
    },
    {
        title: "Team Workspace",
        description: "A collaborative real-time workspace for remote teams, featuring live whiteboarding, clean typography, and spatial organization.",
        category: "SaaS Product",
        tech: ["React", "WebSockets", "UI/UX"],
        link: "#",
        colorBg: "bg-[#fff5f2]", // Light Terracotta tint
        colorAccent: "text-[#D2796D]",
    },
    {
        title: "Fintech Dashboard",
        description: "A financial analytics dashboard prioritizing clear data visualization and accessible metrics for everyday users.",
        category: "Web Application",
        tech: ["Dashboard", "D3.js", "Accessibility"],
        link: "#",
        colorBg: "bg-[#FDF5E6]",
        colorAccent: "text-[#A3B18A]",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#FAF9F6]">
            <div className="mb-16 md:mb-24 px-4 md:px-0 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="text-4xl md:text-5xl font-playfair font-bold text-[#333333]"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                        className="w-20 h-1 bg-[#D2796D] mt-6 rounded-full"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 max-w-md"
                >
                    A collection of case studies focusing on user-centered design and seamless digital experiences.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project, idx) => (
                    <motion.a
                        href={project.link}
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className={`group block p-8 md:p-10 rounded-[2rem] ${project.colorBg} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}
                    >
                        <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-sm z-10">
                            <ArrowUpRight className="w-5 h-5 text-gray-800" />
                        </div>

                        <div className="flex flex-col h-full relative z-0">
                            <span className={`text-sm font-semibold tracking-wider uppercase mb-6 ${project.colorAccent}`}>
                                {project.category}
                            </span>

                            <h3 className="text-3xl font-playfair font-bold text-[#333333] mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 mb-12 leading-relaxed h-full">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-black/5">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-1.5 text-xs font-medium text-gray-600 bg-white/60 backdrop-blur-sm rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
