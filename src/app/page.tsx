"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
// @ts-ignore
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <main className="min-h-screen bg-transparent relative z-10 selection:bg-electric-blue/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#0a0a0a] text-center relative z-20">
        <div className="flex justify-center gap-6 mb-8 text-gray-400 font-space font-medium tracking-widest text-sm uppercase">
          <a href="https://www.linkedin.com/in/shivangsinghal007b" className="hover:text-electric-blue transition-colors">LinkedIn</a>
          <a href="https://github.com/shivang007-B" className="hover:text-electric-blue transition-colors">GitHub</a>
          <a href="mailto:shivang2.0ksd@gmail.com" className="hover:text-electric-blue transition-colors">Email</a>
        </div>
        <p className="text-gray-600 mb-2 font-inter text-sm">© {new Date().getFullYear()} Shivang Singhal. Initiative: Project Singularity.</p>
        <p className="text-xs text-gray-600 font-inter">Running on Next.js Network.</p>
      </footer>
    </main>
  );
}
