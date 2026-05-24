import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const socialLinks = [
    { name: "Email", href: "mailto:eklavyas10@gmail.com", icon: <Mail size={14} /> },
    { name: "GitHub", href: "https://github.com/NightRishi106", icon: <Github size={14} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/eklavya-singh-92894b2a6/", icon: <Linkedin size={14} /> },
    { name: "X (Twitter)", href: "https://x.com/Eklavya1006", icon: <Twitter size={14} /> }
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Gateway"
      className="py-24 px-6 relative overflow-hidden bg-[#0B0B0B] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-stone-500 font-mono text-xs uppercase tracking-widest block mb-2">
            // Connection
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
          {/* Quick info pane */}
          <div className="md:col-span-5 flex flex-col justify-between gap-10">
            <div className="p-6 rounded-xl border border-neutral-800 bg-[#111111] flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider">
                  Status: Available
                </span>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                I am accepting strategic consulting engagements, tailored full-stack code designs, and intelligent AI groundings. Drop a line to start our collaboration.
              </p>

              <div className="border-t border-neutral-800/80 pt-4 flex flex-col gap-1.5 font-mono text-[10px] text-stone-500">
                <span>Inquiries: <a href="mailto:eklavyas10@gmail.com" className="text-neutral-300 hover:text-white transition-colors">eklavyas10@gmail.com</a></span>
                <span>Timezone: Globally distributed</span>
              </div>
            </div>

            {/* Links Block */}
            <div className="flex flex-col gap-3">
              <span className="text-stone-500 font-mono text-[10px] uppercase tracking-wider block">
                Social Channels
              </span>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((sock) => (
                  <a
                    key={sock.name}
                    href={sock.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg border border-neutral-800 bg-[#111111] text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                  >
                    {sock.icon}
                    <span>{sock.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Minimal Form Portal */}
          <div className="md:col-span-7 flex">
            <div className="p-6 sm:p-8 rounded-xl border border-neutral-800 bg-[#111111] w-full flex flex-col justify-between">
              <form id="contact-form" onSubmit={handleFormSubmit} className="flex flex-col gap-5 flex-1 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Richard Hendricks"
                      className="px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/40 text-xs text-white focus:outline-none focus:border-neutral-600 transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="richard@piedpiper.com"
                      className="px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/40 text-xs text-white focus:outline-none focus:border-neutral-600 transition-all placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project requirement in details..."
                    className="px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/40 text-xs text-white focus:outline-none focus:border-neutral-600 transition-all resize-none placeholder:text-neutral-600"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="mt-3 py-3 px-5 rounded-lg font-sans font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 disabled:opacity-50"
                >
                  {status === "idle" && (
                    <>
                      <span>Transmit Message</span>
                      <Send size={12} />
                    </>
                  )}
                  {status === "sending" && (
                    <span className="animate-pulse">Locking channels...</span>
                  )}
                  {status === "success" && (
                    <>
                      <span>Payload Transmitted</span>
                      <CheckCircle2 size={12} className="text-emerald-500" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Banner */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5 text-emerald-400 font-mono text-[10px] flex items-center gap-2"
                  >
                    <CheckCircle2 size={12} className="shrink-0" />
                    <span>Payload dispatched securely. I will respond within 24 standard hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
