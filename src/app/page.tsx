import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <div className="opacity-0 h-0 w-0 overflow-hidden">
        <About />
        <Skills />
        <Achievements />
      </div>
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-[#FAF9F6] text-center">
        <div className="flex justify-center gap-6 mb-8 text-[#333333]">
          <a href="#" className="hover:text-[#D2796D] transition-colors font-medium">LinkedIn</a>
          <a href="#" className="hover:text-[#D2796D] transition-colors font-medium">Dribbble</a>
          <a href="#" className="hover:text-[#D2796D] transition-colors font-medium">Behance</a>
        </div>
        <p className="text-gray-500 mb-2">© {new Date().getFullYear()} Shivang Singhal. All Rights Reserved.</p>
        <p className="text-sm text-gray-400">Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
