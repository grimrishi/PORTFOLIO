import { motion } from "motion/react";

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const requestedSkills = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Supabase", category: "Database" },
    { name: "GitHub", category: "Version Control" },
    { name: "Vercel", category: "Deployment" },
  ];

  return (
    <section
      id="skills"
      aria-label="Skill Matrix showcase"
      className="py-24 px-6 relative overflow-hidden bg-[#0B0B0B] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-stone-500 font-mono text-xs uppercase tracking-widest block mb-2">
            // Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Skill Set
          </h2>
        </div>

        {/* Minimal High-Contrast Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {requestedSkills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={skill.name}
              className="group p-5 rounded-xl border border-neutral-800 bg-[#111111] hover:border-neutral-700 hover:bg-neutral-900/60 transition-all flex flex-col justify-between"
            >
              <div className="flex flex-col gap-1">
                <span className="text-stone-500 font-mono text-[9px] uppercase tracking-wider">
                  {skill.category}
                </span>
                <span className="font-sans font-semibold text-sm sm:text-base text-neutral-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>

              {/* Minimal Apple/Linear-like dot */}
              <div className="mt-4 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:bg-purple-400 group-hover:scale-110 transition-all duration-300" />
                <span className="text-[10px] font-mono text-stone-500 uppercase">Deployed / Production</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
