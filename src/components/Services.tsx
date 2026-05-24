import { motion } from "motion/react";
import { Sparkles, Layers, BrainCircuit, Cpu } from "lucide-react";
import { bentoServices } from "../data/portfolioData";

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers size={20} className="text-purple-400" />;
      case "BrainCircuit":
        return <BrainCircuit size={20} className="text-blue-400" />;
      case "Sparkles":
        return <Sparkles size={20} className="text-amber-400" />;
      case "Cpu":
        return <Cpu size={20} className="text-pink-400" />;
      default:
        return <Sparkles size={20} className="text-indigo-400" />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Professional Services Offered"
      className={`py-24 px-6 relative overflow-hidden ${
        darkMode ? "bg-[#0B0B0B]" : "bg-[#F7F7F5]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-16">
          <span className="text-purple-500 font-mono text-xs tracking-widest uppercase mb-1.5 flex items-center gap-2">
            <Sparkles size={12} /> BENTO_FUNCTIONS // 06/08
          </span>
          <h2 className={`text-3xl sm:text-4.5xl font-extrabold tracking-tight ${
            darkMode ? "text-white" : "text-black"
          }`}>
            Engineering Solutions
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2 max-w-lg">
            High-integrity design patterns and system development modules built for elite operations, startup launches, and enterprise-grade performance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoServices.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={service.id}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all group relative overflow-hidden ${
                service.gridSpan
              } ${
                darkMode
                  ? "bg-[#111112] border-[#222222] hover:border-[#38383a]"
                  : "bg-white border-gray-200/80 hover:border-gray-300 shadow-sm"
              }`}
            >
              {/* Back ambient radial glow on hover */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/3 rounded-bl-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon design */}
                <div className={`p-3 rounded-lg w-max mb-6 ${
                  darkMode ? "bg-black/40 border border-[#222222] text-white" : "bg-gray-50 border border-gray-100"
                }`}>
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className={`font-sans font-extrabold text-base sm:text-xl mb-3.5 leading-snug tracking-tight ${
                  darkMode ? "text-white" : "text-black"
                }`}>
                  {service.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 tracking-wide ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Guarantees Sublist */}
              <div className="mt-4 pt-5 border-t border-dashed border-[#222212]/30 dark:border-[#222222]">
                <span className="text-4xs font-mono text-gray-500 tracking-wider uppercase block mb-3">
                  System Architecture Guarantees
                </span>
                <div className="flex flex-col gap-2">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-3xs sm:text-2xs font-mono text-gray-400">
                      <span className="text-purple-400 font-bold shrink-0 mt-0.5">&raquo;</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
