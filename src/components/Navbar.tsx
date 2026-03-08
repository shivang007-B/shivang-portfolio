"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Work", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Resume (PDF)", href: "https://drive.google.com/file/d/1y3cBDwjJgT0RH7q4A4P4amwYXoQ11GVA/view?usp=sharing" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-orange-400 font-playfair">
                        S.S
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onMouseEnter={() => setHoveredLink(link.name)}
                            onMouseLeave={() => setHoveredLink(null)}
                            className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-full"
                        >
                            {hoveredLink === link.name && (
                                <motion.div
                                    layoutId="navbar-pill"
                                    className="absolute inset-0 bg-[#A3B18A]/20 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </a>
                    ))}
                    <a
                        href="contact"
                        className="px-5 py-2 text-sm font-semibold rounded-full bg-[#D2796D] text-white hover:bg-[#c26a5f] transition-all shadow-md"
                    >
                        Let's Collaborate
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 flex flex-col py-6 px-6 gap-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-600 hover:text-gray-900 active:text-[#D2796D]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
