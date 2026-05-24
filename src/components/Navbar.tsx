import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({
  darkMode,
  toggleDarkMode,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href?: string) => {
    setMobileMenuOpen(false);
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b backdrop-blur-md bg-opacity-75 py-3 shadow-lg " +
            (darkMode
              ? "border-[#222222] bg-[#0B0B0B]/85"
              : "border-gray-200 bg-[#F7F7F5]/85")
          : "border-b border-transparent py-5 bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-sans font-bold tracking-tight text-lg group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              darkMode
                ? "bg-white text-black group-hover:bg-purple-500 group-hover:text-white"
                : "bg-black text-white group-hover:bg-purple-600"
            }`}
          >
            <Code size={16} />
          </div>
          <span
            className={`font-semibold tracking-wider font-mono lg:inline ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            EKLAVYA<span className="text-purple-500 animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wide rounded-lg transition-colors ${
                  darkMode ? "text-neutral-400 hover:text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Global Action Utility Controls */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle Hamburger */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${
              darkMode ? "text-white hover:bg-[#161618]" : "text-black hover:bg-gray-200"
            }`}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t ${
              darkMode ? "bg-[#0B0B0B] border-[#222222]" : "bg-[#F7F7F5] border-gray-200"
            } overflow-hidden`}
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  id={`mobile-link-${link.name.toLowerCase()}`}
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-left py-2 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${
                    darkMode
                      ? "text-neutral-300 hover:text-white hover:bg-[#161618]"
                      : "text-gray-700 hover:text-black hover:bg-gray-200"
                  }`}
                >
                  <span>{link.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
