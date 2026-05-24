import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Synchronize document class lists when theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#0B0B0B";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#F7F7F5";
    }
  }, [darkMode]);

  const handleScrollToProjects = () => {
    const projectsSec = document.getElementById("projects");
    if (projectsSec) {
      projectsSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-purple-500 selection:text-white bg-[#0B0B0B] text-white">
      {/* Subtle Background Glimmer noise layout */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-[0.02] bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Main Navigation Header */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Sections Layout */}
      <main className="outline-hidden">
        {/* Landing Screen */}
        <Hero
          darkMode={darkMode}
          onViewProjects={handleScrollToProjects}
        />

        {/* Narrative & Philosophy */}
        <About darkMode={darkMode} />

        {/* Competencies */}
        <Skills darkMode={darkMode} />

        {/* Selected Work */}
        <Projects darkMode={darkMode} />

        {/* Direct Link Connect */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer copyright section */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
