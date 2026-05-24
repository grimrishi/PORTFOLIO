import { motion } from "motion/react";
import { Milestone, BookOpen, Hammer, Rocket, Trophy } from "lucide-react";
import { journeyTimeline } from "../data/portfolioData";

interface JourneyProps {
  darkMode: boolean;
}

export default function Journey({ darkMode }: JourneyProps) {
  const getStepIcon = (type: string) => {
    switch (type) {
      case "learning":
        return <BookOpen size={14} className="text-blue-400" />;
      case "building":
        return <Hammer size={14} className="text-amber-400" />;
      case "deployment":
        return <Rocket size={14} className="text-emerald-400" />;
      case "elite":
        return <Trophy size={14} className="text-purple-400" />;
      default:
        return <Milestone size={14} className="text-gray-400" />;
    }
  };

  return (
    <section
      id="journey"
      aria-label="Eklavya Career Timeline and Journey"
      className={`py-24 px-6 relative overflow-hidden ${
        darkMode ? "bg-[#0B0B0B]" : "bg-[#F7F7F5]"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-20 text-center items-center">
          <span className="text-purple-500 font-mono text-xs tracking-widest uppercase mb-1.5 flex items-center gap-2">
            <Milestone size={12} /> SYSTEM_CHRONO // 04/08
          </span>
          <h2 className={`text-3xl sm:text-4.5xl font-extrabold tracking-tight ${
            darkMode ? "text-white" : "text-black"
          }`}>
            Engineering Evolution
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2 max-w-md">
            The cron sequence of computational benchmarks marking transitions from low-level systems up to highly autonomous models context RAG interfaces.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l border-gray-200 dark:border-[#222222] ml-4 sm:ml-32 pl-8 sm:pl-12 flex flex-col gap-16">
          {journeyTimeline.map((step, idx) => (
            <div key={step.id} className="relative group">
              {/* Year marker displayed left for desktop, top for mobile devices */}
              <div className="hidden sm:block absolute -left-44 top-1.5 w-32 text-right font-mono text-xs text-gray-400 tracking-wider">
                {step.year}
              </div>

              {/* Glowing vertical bullet connectors */}
              <div className={`absolute -left-[41px] top-1.5 w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                darkMode
                  ? "bg-[#111112] border-[#3a3a3d] group-hover:border-purple-400 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.3)]"
                  : "bg-white border-gray-300 group-hover:border-purple-500 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.2)]"
              }`}>
                {getStepIcon(step.type)}
              </div>

              {/* Main Step Card */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  darkMode
                    ? "bg-[#111112] border-[#222222] hover:border-[#333335]"
                    : "bg-white border-gray-200/80 hover:border-gray-300 shadow-sm"
                }`}
              >
                {/* Year tag for mobile only */}
                <div className="sm:hidden font-mono text-3xs text-purple-400 font-bold tracking-widest uppercase mb-2">
                  {step.year}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                  <div>
                    <h3 className={`font-sans font-bold text-base sm:text-lg leading-snug tracking-tight ${
                      darkMode ? "text-white" : "text-black"
                    }`}>
                      {step.title}
                    </h3>
                    <span className="font-mono text-3xs text-gray-400 tracking-wide uppercase">
                      {step.organization}
                    </span>
                  </div>
                  
                  {/* Status Indicator Pill */}
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono w-max border self-start sm:self-center capitalize ${
                    step.type === "elite"
                      ? "bg-purple-500/5 text-purple-400 border-purple-500/15"
                      : "bg-black/20 text-gray-400 border-[#222222]"
                  }`}>
                    {step.type}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm tracking-wide leading-relaxed mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  {step.description}
                </p>

                {/* Achievements checklist */}
                <div className="flex flex-col gap-2">
                  {step.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs">
                      <span className="text-purple-400 font-mono mt-0.5 shrink-0">&raquo;</span>
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
