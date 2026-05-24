import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
  onViewProjects: () => void;
}

export default function Hero({ darkMode, onViewProjects }: HeroProps) {
  const scrollToContact = () => {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Welcome Introduction"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-24 bg-[#0B0B0B] text-white"
    >
      {/* Vercel/Linear minimalist grid & gradient glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />

        {/* Ambient premium glowing background gradient (very soft and elegant) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full blur-[140px] opacity-[0.12] pointer-events-none bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Simple elegant badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs font-mono mb-8 hover:border-neutral-700/80 transition-all"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-neutral-300 tracking-wide font-medium">Available for new opportunities</span>
        </motion.div>

        {/* Name Title Block */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-stone-200 font-bold tracking-widest text-lg sm:text-xl lg:text-2xl uppercase mb-5"
        >
          Eklavya
        </motion.h1>

        {/* Dynamic Titles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-2 font-display text-4.5xl sm:text-6.5xl md:text-8xl tracking-tighter font-extrabold leading-[1.1] mb-6 text-white"
        >
          <h2 className="pb-1">Full Stack Developer</h2>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-500 pb-3 md:pb-4">
            AI Systems Builder
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl text-neutral-400 text-sm sm:text-lg tracking-wide font-normal mb-10 leading-relaxed font-sans"
        >
          Building modern digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0"
        >
          <button
            id="hero-view-projects-btn"
            onClick={onViewProjects}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-lg font-sans text-sm font-semibold tracking-wide transition-all bg-white text-black hover:bg-white/90 shadow-md group border border-transparent"
          >
            <span>View Projects</span>
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            id="hero-contact-btn"
            onClick={scrollToContact}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3 rounded-lg border border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:text-white hover:border-neutral-700 hover:bg-neutral-900/80 text-sm font-semibold tracking-wide transition-all"
          >
            <span>Contact Me</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-900" />
    </section>
  );
}
