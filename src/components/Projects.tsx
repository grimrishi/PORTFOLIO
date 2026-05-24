import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/portfolioData";

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  // Mock image UI renderer to make the cards look gorgeous and real
  const renderProjectMockup = (id: string) => {
    switch (id) {
      case "proj_taskflow":
        return (
          <div className="h-40 w-full bg-[#18181B] border border-neutral-800 rounded-lg overflow-hidden flex flex-col p-3 relative group-hover:border-neutral-700 transition-colors">
            {/* Simulated Brower Nav */}
            <div className="flex items-center gap-1.5 mb-3 pb-1 border-b border-neutral-800/50">
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="text-[9px] text-neutral-600 font-mono ml-2">taskflow.io</div>
            </div>
            {/* Visual Task Grid */}
            <div className="grid grid-cols-3 gap-2 h-full">
              <div className="rounded border border-neutral-800 bg-neutral-900/40 p-1.5 flex flex-col gap-1">
                <span className="text-[7px] text-neutral-500 font-semibold block">BACKLOG</span>
                <div className="h-2.5 rounded bg-neutral-800/80 w-11/12" />
                <div className="h-2.5 rounded bg-neutral-800/50 w-8/12" />
              </div>
              <div className="rounded border border-neutral-800 bg-[#211d33]/10 p-1.5 flex flex-col gap-1">
                <span className="text-[7px] text-indigo-400 font-semibold block">IN_PROGRESS</span>
                <div className="h-2.5 rounded bg-indigo-500/10 border border-indigo-500/20 w-10/12" />
                <div className="h-2.5 rounded bg-neutral-800/80 w-6/12" />
              </div>
              <div className="rounded border border-neutral-800 bg-neutral-900/40 p-1.5 flex flex-col gap-1">
                <span className="text-[7px] text-emerald-400 font-semibold block">DONE</span>
                <div className="h-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 w-12/12" />
              </div>
            </div>
          </div>
        );
      case "proj_brick_bean":
        return (
          <div className="h-40 w-full bg-[#18181B] border border-neutral-800 rounded-lg overflow-hidden flex flex-col p-3 relative group-hover:border-neutral-700 transition-colors">
            {/* Simulated Brower Nav */}
            <div className="flex items-center gap-1.5 mb-3 pb-1 border-b border-neutral-800/50">
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="text-[9px] text-neutral-600 font-mono ml-2">brickandbean.com</div>
            </div>
            {/* Estate Showcase Grid */}
            <div className="grid grid-cols-4 gap-2 h-full">
              <div className="col-span-2 rounded border border-neutral-800/80 bg-neutral-900 overflow-hidden relative flex flex-col justify-end p-2">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                <span className="text-[8px] text-stone-200 z-20 font-bold block">The Atelier House</span>
              </div>
              <div className="col-span-2 grid grid-rows-2 gap-2 h-full">
                <div className="rounded border border-neutral-850 bg-neutral-900/50 flex items-center justify-center">
                  <span className="text-[7px] text-neutral-600 tracking-wider uppercase">Lisbon, PT</span>
                </div>
                <div className="rounded border border-neutral-850 bg-neutral-900/50 flex items-center justify-center">
                  <span className="text-[7px] text-neutral-600 tracking-wider uppercase">Kyoto, JP</span>
                </div>
              </div>
            </div>
          </div>
        );
      case "proj_ochre_ash":
        return (
          <div className="h-40 w-full bg-[#18181B] border border-neutral-800 rounded-lg overflow-hidden flex flex-col p-4 relative group-hover:border-neutral-700 transition-colors justify-between">
            {/* Editorial Header */}
            <div className="flex items-start justify-between">
              <span className="text-[10px] font-display font-bold tracking-tight text-white uppercase">OCHRE &amp; ASH</span>
              <span className="text-[7px] font-mono text-stone-500">// Atelier v1</span>
            </div>
            {/* Minimalist ceramics gallery visual offset */}
            <div className="flex justify-center items-end gap-3 h-16">
              <div className="w-6 h-12 bg-stone-700/65 rounded-t-full border border-stone-800" />
              <div className="w-8 h-14 bg-stone-800/90 rounded-t-full border border-stone-700" />
              <div className="w-5 h-10 bg-stone-600/40 rounded-t-full border border-stone-800" />
            </div>
            {/* Minimalist tagline */}
            <span className="text-[7px] text-stone-400 font-sans tracking-wide">High-end luxury architectural ceramics.</span>
          </div>
        );
      case "proj_pushker_investments":
        return (
          <div className="h-40 w-full bg-[#18181B] border border-neutral-800 rounded-lg overflow-hidden flex flex-col p-3 relative group-hover:border-neutral-700 transition-colors">
            {/* Simulated Brower Nav */}
            <div className="flex items-center gap-1.5 mb-3 pb-1 border-b border-neutral-800/50">
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="w-2 h-2 rounded-full bg-neutral-800" />
              <div className="text-[9px] text-neutral-600 font-mono ml-2">pushker.investments</div>
            </div>
            {/* Line chart visualization simulation */}
            <div className="flex-1 flex flex-col justify-end gap-1 px-4 mb-2">
              <div className="flex justify-between items-center text-[8px] font-mono">
                <span className="text-stone-500">Compound Yields</span>
                <span className="text-emerald-400 font-bold">+12.4% ARR</span>
              </div>
              <div className="w-full h-11 border-b border-l border-neutral-800 relative">
                {/* SVG Curve Line overlay */}
                <svg className="absolute inset-0 w-full h-full" overflow="visible">
                  <path
                    d="M 0 44 Q 30 35 60 22 T 180 4"
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 0 44 Q 30 35 60 22 T 180 4 L 180 44 Z"
                    fill="url(#mockup-gradient)"
                    opacity="0.1"
                  />
                  <defs>
                    <linearGradient id="mockup-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      aria-label="Responsive Projects Portfolio"
      className="py-24 px-6 relative overflow-hidden bg-[#0B0B0B] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-stone-500 font-mono text-xs uppercase tracking-widest block mb-2">
            // Creations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Selected Work
          </h2>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((proj, i) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={proj.id}
              className="group p-6 rounded-xl border border-neutral-800 bg-[#111111] hover:border-neutral-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Simulated Project Visual Frame */}
                <div className="mb-6 overflow-hidden rounded-lg">
                  {renderProjectMockup(proj.id)}
                </div>

                {/* Categorization and Performance Metrics */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    {proj.category}
                  </span>
                  {proj.performanceMetric && (
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">
                      {proj.performanceMetric.value}
                    </span>
                  )}
                </div>

                {/* Project Title and details */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl mb-2 text-white group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Tech stack items */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#16161a] border border-neutral-800 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Live / Repo controls */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-800/80 mt-auto">
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-4 py-2 rounded-lg text-xs font-sans font-semibold tracking-wide bg-white text-black hover:bg-white/90 transition-all text-center"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all"
                  >
                    <Github size={12} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
