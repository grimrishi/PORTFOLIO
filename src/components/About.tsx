import { motion } from "motion/react";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
      aria-label="About Biography and Technical Focus"
      className="py-24 px-6 relative overflow-hidden bg-[#0B0B0B] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Subtle section label */}
        <div className="mb-10">
          <span className="text-stone-500 font-mono text-xs uppercase tracking-widest block mb-2">
            // About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Philosophy &amp; Focus
          </h2>
        </div>

        {/* Concise and visually polished grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Main Statement Focus */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-sans font-semibold leading-relaxed tracking-tight text-neutral-100">
              “I build fast, modern, scalable web applications with strong UI/UX and real-world functionality.”
            </h3>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed tracking-wide font-normal">
              I specialize in combining extreme frontend performance with robust server configurations and cognitive AI capabilities. Every product I work on is sculpted with pristine responsive layouts, swift asset Delivery metrics, and intuitive, flawless usability flows.
            </p>
          </div>

          {/* Quick Technical Summary Card */}
          <div className="md:col-span-5 w-full">
            <div className="rounded-xl border border-neutral-800 bg-[#111111] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
              {/* Sleek card header */}
              <div>
                <span className="text-stone-500 font-mono text-[10px] uppercase tracking-wider block mb-4">
                  Focus Areas
                </span>

                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-neutral-200 font-sans font-semibold text-sm mb-1">
                      Frontend Architecture
                    </h4>
                    <p className="text-neutral-400 text-xs leading-normal">
                      Responsive component design, state managers, and smooth performance indices without blocking paint threads.
                    </p>
                  </div>

                  <div className="border-t border-neutral-800/60 pt-4">
                    <h4 className="text-neutral-200 font-sans font-semibold text-sm mb-1">
                      AI &amp; Cognitive Integrations
                    </h4>
                    <p className="text-neutral-400 text-xs leading-normal">
                      Advanced LLM prompt engineering, RAG databases, and server-side model grounding for intelligent pipelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Little info row */}
              <div className="mt-6 pt-4 border-t border-dashed border-neutral-800 text-[10px] font-mono text-stone-500 flex justify-between uppercase">
                <span>Core: TypeScript</span>
                <span>Stack: Full-stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
