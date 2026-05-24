import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mvzyqerq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Auto-dismiss the toast after 4 seconds
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("idle");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("An error occurred while sending message. Please try again.");
    }
  };

  const socialLinks = [
    { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=eklavyas10@gmail.com", icon: <Mail size={14} /> },
    { name: "GitHub", href: "https://github.com/NightRishi106", icon: <Github size={14} /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/eklavya-singh-92894b2a6/", icon: <Linkedin size={14} /> },
    { name: "X (Twitter)", href: "https://x.com", icon: <Twitter size={14} /> }
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
                <span>Inquiries: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=eklavyas10@gmail.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors">eklavyas10@gmail.com</a></span>
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
              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 w-full flex-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="form-name" className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-1.5">
                      Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/40 text-xs text-white focus:outline-none focus:border-neutral-600 transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-1.5">
                      Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/40 text-xs text-white focus:outline-none focus:border-neutral-600 transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-message" className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-800 bg-neutral-900/40 text-xs text-white focus:outline-none focus:border-neutral-600 transition-all resize-none placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-3 py-3 px-5 rounded-lg font-sans font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 disabled:opacity-50 inline-flex transition-colors"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* Success Floating Toast (Bottom Center, high z-index) */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 20, x: "-50%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 350 }}
                    className="fixed bottom-8 left-1/2 z-[9999] flex items-center gap-2.5 px-5 py-3 rounded-full border border-emerald-500/20 bg-[#112415] text-emerald-400 shadow-2xl shadow-emerald-950/40 backdrop-blur-md text-xs font-mono font-semibold"
                  >
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>✓ Message sent</span>
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
