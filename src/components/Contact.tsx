"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xkovlgwj", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                let errorMessage = "Oops! Something went wrong. Please try again.";
                try {
                    const errorData = await response.json();
                    if (errorData.error) {
                        errorMessage = errorData.error;
                    }
                } catch (e) {
                    // Ignore JSON parsing error and fallback to default message
                }
                alert(errorMessage);
            }
        } catch (error) {
            alert("Network error. Please check your connection.");
        }
    };

    return (
        <section id="contact" className="py-24 relative bg-[#FDF5E6]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <div className="overflow-hidden pb-4">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="text-4xl md:text-5xl font-playfair font-bold text-[#333333] inline-block"
                        >
                            Get In Touch
                        </motion.h2>
                    </div>
                    <div className="overflow-hidden mt-2">
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                            className="w-20 h-1 bg-[#D2796D] mx-auto rounded-full"
                        />
                    </div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg pt-4">
                        Whether you have a question, a project idea, or just want to collaborate, feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-2xl bg-white shadow-sm text-[#A3B18A]">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">
                                    Email
                                </h4>
                                <a
                                    href="mailto:shivang2.0ksd@gmail.com"
                                    className="text-xl font-medium text-[#333333] hover:text-[#D2796D] transition-colors"
                                >
                                    shivang2.0ksd@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-2xl bg-white shadow-sm text-[#D2796D]">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">
                                    Location
                                </h4>
                                <span className="text-xl font-medium text-[#333333]">
                                    Jaipur, Rajasthan (Open to Remote)
                                </span>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 rounded-2xl bg-white shadow-sm text-[#A3B18A]">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">
                                    Phone
                                </h4>
                                <a
                                    href="tel:+919784032687"
                                    className="text-xl font-medium text-[#333333] hover:text-[#D2796D] transition-colors"
                                >
                                    +91 9784032687
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100"
                    >
                        {submitted ? (
                            <div className="text-center p-10 bg-[#FAF9F6] rounded-xl border border-[#D2796D]/20 shadow-sm">
                                <h3 className="text-2xl font-serif text-[#D2796D] mb-2">Thank You!</h3>
                                <p className="text-stone-600">Aapka message mil gaya hai. Main jald hi shivang2.0ksd@gmail.com se aapko reply karunga.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-sm underline text-stone-400 hover:text-[#D2796D]"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-500">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#A3B18A]/50 focus:border-[#A3B18A] transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-500">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#A3B18A]/50 focus:border-[#A3B18A] transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-500">Message</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="How can I help you?"
                                        className="w-full bg-[#FAF9F6] border border-gray-200 rounded-xl px-4 py-3 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#D2796D]/50 focus:border-[#D2796D] transition-all resize-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 mt-4 rounded-xl font-bold text-white bg-[#D2796D] hover:bg-[#c26a5f] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
                                >
                                    Let&apos;s Collaborate
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
