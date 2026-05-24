import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, ChevronRight, Award, Zap, CheckCircle2, Lock, Star, HelpCircle } from "lucide-react";
import { archonRanks } from "../data/portfolioData";

interface ArchonSystemProps {
  darkMode: boolean;
}

export default function ArchonSystem({ darkMode }: ArchonSystemProps) {
  const [selectedRankIdx, setSelectedRankIdx] = useState(5); // Default to current Level S
  const activeRank = archonRanks[selectedRankIdx];
  const containerRef = useRef<HTMLDivElement>(null);

  // Experience brief tracker: current accumulated XP
  const currentXP = 7800;
  const nextRankXP = 10000;
  const progressPercent = (currentXP / nextRankXP) * 100;

  return (
    <section
      id="archon"
      aria-label="Archon Mastery Progression System"
      className={`py-24 px-6 relative overflow-hidden ${
        darkMode ? "bg-[#0B0B0B]" : "bg-[#F7F7F5]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-16">
          <span className="text-purple-500 font-mono text-xs tracking-widest uppercase mb-1.5 flex items-center gap-2">
            <Trophy size={12} /> ARCHON_CYCLES // 05/08
          </span>
          <h2 className={`text-3xl sm:text-4.5xl font-extrabold tracking-tight ${
            darkMode ? "text-white" : "text-black"
          }`}>
            The Archon System
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2 max-w-lg">
            A rank-based mastery roadmap framing engineering continuous-learning cycles as strict operational levels. Eklavya is currently mapping Level S (Sovereign).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Level List Grid Controller - Left 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className={`p-5 rounded-2xl border ${
              darkMode ? "bg-[#111112] border-[#222222]" : "bg-white border-gray-200"
            }`}>
              {/* Dynamic XP Progress Tracker */}
              <div className="flex justify-between text-3xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                <span>Current Mastery XP Velocity</span>
                <span className="text-purple-400 font-bold">{currentXP} / {nextRankXP} XP</span>
              </div>
              <div className="w-full bg-black/30 h-3 rounded-xl overflow-hidden relative border border-[#222222]">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 h-full rounded-full"
                />
              </div>
              <span className="text-4xs font-mono text-gray-500 mt-2 block uppercase text-right leading-none">
                2,200 XP required until Level National
              </span>
            </div>

            {/* Quick selectors for matching levels */}
            <div
              ref={containerRef}
              className={`flex flex-col gap-2 p-3 rounded-2xl border max-h-[440px] overflow-y-auto custom-scrollbar ${
                darkMode ? "bg-[#111112] border-[#222222]" : "bg-white border-gray-200"
              }`}
            >
              <span className="text-4xs font-mono text-gray-500 uppercase tracking-widest px-2.5 py-1.5 border-b border-[#222222]">
                Select Mastery Node
              </span>
              {archonRanks.map((node, i) => (
                <button
                  id={`rank-trigger-${node.rank.toLowerCase()}`}
                  key={node.rank}
                  onClick={() => setSelectedRankIdx(i)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    selectedRankIdx === i
                      ? "bg-purple-600/15 border border-purple-500/30 text-white"
                      : "border border-transparent hover:bg-black/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-black ${
                      selectedRankIdx === i
                        ? "bg-purple-500 text-white"
                        : node.unlocked
                        ? darkMode
                          ? "bg-[#1e1e21] text-gray-300"
                          : "bg-gray-100 text-gray-800"
                        : "bg-black/40 text-gray-600"
                    }`}>
                      {node.rank}
                    </span>
                    <div className="flex flex-col">
                      <span className={`font-sans text-xs font-bold leading-none ${
                        selectedRankIdx === i ? "text-purple-300" : darkMode ? "text-gray-300" : "text-gray-800"
                      }`}>
                        {node.title}
                      </span>
                      <span className="text-5xs font-mono text-gray-400 mt-1 uppercase">
                        {node.experienceNeeded} XP REQUIRED
                      </span>
                    </div>
                  </div>

                  {/* Lock indicators */}
                  {node.unlocked ? (
                    <Zap size={11} className={selectedRankIdx === i ? "text-purple-400" : "text-emerald-400"} />
                  ) : (
                    <Lock size={11} className="text-gray-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details holographic screen - Right 7 columns */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRank.rank}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className={`p-7 sm:p-9 rounded-2xl border flex flex-col justify-between w-full relative overflow-hidden ${
                  darkMode ? "bg-[#111112] border-[#222222]" : "bg-white border-gray-200"
                }`}
              >
                {/* Visual back glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[60px] pointer-events-none opacity-[0.06] ${
                  activeRank.unlocked ? "bg-purple-500" : "bg-slate-500"
                }`} />

                <div>
                  {/* Title node */}
                  <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#222222] pb-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black font-mono border ${
                        activeRank.unlocked
                          ? "bg-purple-600/10 border-purple-500/25 text-purple-400 shadow-[0_0_12px_rgba(139,92,246,0.15)]"
                          : "bg-black/40 border-gray-700/30 text-gray-600"
                      }`}>
                        {activeRank.rank}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-4xs font-mono text-gray-500 tracking-widest uppercase">
                          MASTERY LEVEL ROADMAP Node
                        </span>
                        <h3 className={`font-sans font-extrabold text-lg sm:text-2xl leading-none ${
                          darkMode ? "text-white" : "text-[#111112]"
                        }`}>
                          {activeRank.title}
                        </h3>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono border uppercase tracking-wider ${
                      activeRank.unlocked
                        ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/15"
                        : "bg-gray-500/5 text-gray-500 border-gray-500/15"
                    }`}>
                      {activeRank.unlocked ? "UNLOCKED" : "LOCKED_SPEC"}
                    </span>
                  </div>

                  {/* Description text */}
                  <p className={`text-xs sm:text-sm tracking-wide leading-relaxed mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}>
                    {activeRank.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Requirements */}
                    <div>
                      <span className="text-4xs font-mono text-gray-500 tracking-wider uppercase block mb-3.5">
                        Requirements to Conquer
                      </span>
                      <div className="flex flex-col gap-2.5">
                        {activeRank.requirements.map((req, index) => (
                          <div key={index} className="flex items-start gap-2.5 text-xs text-gray-400">
                            <CheckCircle2 size={13} className="text-purple-400 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Perks */}
                    <div>
                      <span className="text-4xs font-mono text-gray-500 tracking-wider uppercase block mb-3.5">
                        Operational Perks Unlocked
                      </span>
                      <div className="flex flex-col gap-2.5">
                        {activeRank.perks.map((perk, index) => (
                          <div key={index} className="flex items-start gap-2.5 text-xs text-gray-400">
                            <Star size={13} className="text-amber-400 shrink-0 mt-0.5" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer instructions info */}
                <div className="mt-8 pt-5 border-t border-dashed border-[#222222] flex items-center gap-2 text-3xs font-mono text-gray-500">
                  <HelpCircle size={12} />
                  <span>Interactive Framework - Click on left nodes to preview system milestones.</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
