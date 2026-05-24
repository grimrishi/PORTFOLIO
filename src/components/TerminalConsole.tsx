import { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, X, CornerDownLeft, PlayCircle, ShieldCheck } from "lucide-react";
import { skillsData, projectsData, archonRanks } from "../data/portfolioData";

interface TerminalConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

interface CommandHistory {
  input: string;
  output: string[];
  type: "command" | "system" | "error";
  timestamp: string;
}

export default function TerminalConsole({ isOpen, onClose, darkMode }: TerminalConsoleProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      input: "system_init",
      output: [
        "===========================================================",
        "        EKLAVYA COGNITIVE CONSOLE v4.2.0 - GATEWAY SUCCESS",
        "===========================================================",
        "Authorized developer shell session opened.",
        "Local operational timezone : UTC",
        "Active routing core        : NodeJS v22 + Express Proxy",
        "Grounding pipeline status  : SEC_OK",
        "Type 'help' to review available system operations.",
        "-----------------------------------------------------------"
      ],
      type: "system",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically when console is opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Keep terminal scrolled to the bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Listen for escape or console toggles
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommandExecution = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let output: string[] = [];
    let type: "command" | "system" | "error" = "command";

    const parts = trimmed.split(" ");
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case "help":
        output = [
          "Available System Operations:",
          "  help           Display this command manifest.",
          "  about          Print Eklavya's core bios and technical philosophy.",
          "  skills         Print categorized high-integrity tech stack levels.",
          "  projects       Display available live-performance code repositories.",
          "  rank           Display active Archon Mastery Progression stats.",
          "  sys_status     Run real-time diagnostics on database and server loops.",
          "  contact        Print direct transmission mail guidelines and parameters.",
          "  clear          Prune local Terminal console log history."
        ];
        break;

      case "about":
        output = [
          "ENTITY: Eklavya",
          "ROLE  : AI Systems Builder | Frontend Architect | Digital Product Engineer",
          "BIO   : I exist at the intersection of extreme frontend performance, cognitive dynamic architectures, and flawless product-level execution. I dont build simple layouts; I write high-throughput code matrices and low-latency proxy grounding pipes.",
          "PHILOSOPHY: Real complexity should be felt in speed, not in cluttered page weight. Elegant architectures require zero re-renders."
        ];
        break;

      case "skills":
        output = [
          "Eklavya Categorized Skill Matrix:",
          "-------------------------------------------"
        ];
        // Categorize local skills
        const sortedCats = ["Frontend", "Backend", "Database", "AI Systems", "DevOps & Clou", "System Design"];
        sortedCats.forEach((cat) => {
          output.push(`[${cat.toUpperCase()}]`);
          const catSkills = skillsData.filter((s) => s.category === cat);
          catSkills.forEach((s) => {
            output.push(`  ${s.name.padEnd(30, ".")} ${s.level}% Mastery`);
          });
        });
        break;

      case "projects":
        output = [
          "Current Deployed Repositories:",
          "-------------------------------------------"
        ];
        projectsData.forEach((p) => {
          output.push(`* ${p.title.toUpperCase()}`);
          output.push(`  Category : ${p.category}`);
          output.push(`  Performance Benchmark: ${p.performanceMetric?.value || "N/A"}`);
          output.push(`  Brief    : ${p.tagline}`);
          output.push(`  Repository: ${p.githubUrl || "Simulated Source"}`);
          output.push(" ");
        });
        break;

      case "rank":
        const activeRank = archonRanks[5]; // Level S
        output = [
          "Current Archon Framework Status:",
          "-------------------------------------------",
          `Active Rank    : Level ${activeRank.rank} (System Sovereign)`,
          `Core Focus     : ${activeRank.title}`,
          `Specification  : ${activeRank.description}`,
          `Active Perks   : ${activeRank.perks.join(", ")}`,
          `Level XP Req   : ${currentProgressXPText()}`
        ];
        break;

      case "sys_status":
        output = [
          "Running Diagnostic Procedures...",
          "  Node Server Router         : ONLINE [HTTP/2 Enabled]",
          "  Grounding Pipeline Sync    : SEC_OK",
          "  Memory Cache Egress        : STABLE [0.03ms Redis Map]",
          "  Server Route Latency       : 110ms",
          "  Active Database Pools      : Postgres [Live connection established]",
          "  AI Grounding Memory Buffers: Pinecone [Grounded Context Matched]"
        ];
        type = "system";
        break;

      case "contact":
        output = [
          "TRANSMISSION PORT PROTOCOLS:",
          "  Drop a secure packet into the Contact Form directly,",
          "  or transmit an encrypted electronic mail payload to:",
          "  Email Address: grimrishi@gmail.com",
          " ",
          "ESTABLISHED SOCIAL SOCKETS:",
          "  GitHub   : github.com/eklavya",
          "  LinkedIn : linkedin.com/in/eklavya",
          "  X/Twitter: x.com/eklavya"
        ];
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = [
          `bash: command not found: ${command}`,
          "Type 'help' to review available server shell commands."
        ];
        type = "error";
    }

    setHistory((prev) => [
      ...prev,
      {
        input: cmdStr,
        output,
        type,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
    setInputVal("");
  };

  const currentProgressXPText = () => {
    return "7,800 / 10,000 XP [Current Progress 78%]";
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCommandExecution(inputVal);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xs"
          />

          {/* Terminal Console Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`w-full max-w-4xl h-[80vh] rounded-2xl border font-mono text-xs flex flex-col justify-between overflow-hidden shadow-2xl relative ${
              darkMode ? "bg-[#0b0b0c] border-[#222222] text-[#f1f1f2]" : "bg-[#141416] border-[#2c2c2f] text-[#f1f1f2]"
            }`}
          >
            {/* Header tab bar */}
            <div className={`px-4 sm:px-6 py-4 flex items-center justify-between border-b ${
              darkMode ? "bg-black/40 border-[#222222]" : "bg-black/35 border-[#2a2a2d]"
            }`}>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 text-3xs text-gray-500 uppercase tracking-widest pl-3 border-l border-[#222222]">
                  <Terminal size={12} className="text-purple-400" />
                  <span>Eklavya_Core_Shell_v4.20_UTC</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-4xs hover:text-white transition-colors cursor-pointer text-gray-500 border border-[#222222] px-2 py-1 rounded-md" onClick={() => handleCommandExecution("sys_status")}>
                  Run Diagnostic Status
                </span>
                <button
                  id="close-terminal-console"
                  onClick={onClose}
                  className="p-1.5 text-gray-500 hover:text-white rounded-lg transition-colors hover:bg-white/5"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable command logger display output lines */}
            <div className={`p-4 sm:p-6 flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-5 [scrollbar-width:thin] ${
              darkMode ? "bg-black/20" : "bg-black/25"
            }`}>
              {history.map((record, rIdx) => (
                <div key={rIdx} className="flex flex-col gap-2 leading-relaxed">
                  {/* Entered command prompt */}
                  <div className="flex items-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    <span className="text-gray-600">eklavya@system:~$</span>
                    <span>{record.input}</span>
                  </div>

                  {/* Generated logs */}
                  <div className="pl-4 flex flex-col gap-1 text-gray-300">
                    {record.output.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        className={`whitespace-pre-wrap select-text ${
                          record.type === "error"
                            ? "text-red-400"
                            : record.type === "system"
                            ? "text-emerald-400"
                            : "text-slate-300"
                        }`}
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input dynamic shell command prompt bar */}
            <form
              id="terminal-input-form"
              onSubmit={handleFormSubmit}
              className={`p-4 border-t flex items-center gap-3.5 px-6 ${
                darkMode ? "bg-black/40 border-[#222222]" : "bg-black/35 border-[#2a2a2d]"
              }`}
            >
              <span className="text-purple-400 font-bold shrink-0 select-none">eklavya@system:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type 'help' inside terminal console to list core capabilities..."
                className="bg-transparent text-gray-200 border-none outline-hidden p-0 m-0 w-full focus:ring-0 focus:outline-hidden font-mono text-xs placeholder-gray-600"
                aria-label="Developer Shell Command Input"
              />
              <button
                type="submit"
                className="shrink-0 p-1.5 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 rounded-lg transition-colors flex items-center gap-1 font-mono text-3xs font-semibold"
                title="Execute Command"
              >
                <span>RUN</span>
                <CornerDownLeft size={10} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
