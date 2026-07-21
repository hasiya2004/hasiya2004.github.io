import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Terminal, Menu, X, Cpu, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  onOpenTerminal: () => void;
  activeSection: string;
}

export function Navbar({ onOpenTerminal, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Wiki / Articles", href: "#wiki", badge: "New" },
    { name: "Certificates", href: "#certificates" },
    { name: "Nukebird Org", href: "#nukebird" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-sky-500/20 py-3 shadow-lg shadow-sky-950/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/40 flex items-center justify-center text-sky-500 dark:text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-400 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-mono text-sm tracking-wider font-bold dark:text-white text-slate-900 flex items-center gap-1.5">
                HASINDU<span className="text-sky-500 dark:text-sky-400">.AI</span>
              </span>
              <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 block tracking-widest uppercase">
                {PERSONAL_INFO.organization} // SLTC
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors relative py-1 flex items-center gap-1.5"
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] bg-sky-500/20 text-sky-600 dark:text-sky-300 border border-sky-500/40 rounded">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Terminal Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-sky-400 border border-slate-300 dark:border-sky-500/30 hover:border-sky-400 transition-all cursor-pointer"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono bg-sky-500/10 dark:bg-sky-950/40 text-sky-600 dark:text-sky-300 border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/20 transition-all cursor-pointer"
              title="Launch NukeOS Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              <span>NukeOS CLI</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-slate-200 dark:hover:bg-gray-800/60 rounded-md transition-colors"
              title="GitHub Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-sky-400 border border-slate-300 dark:border-sky-500/30"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 dark:text-gray-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 rounded-xl glass-panel border border-sky-500/30 animate-fade-in-long flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-wider text-slate-800 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 py-2 border-b border-slate-200 dark:border-gray-800 flex justify-between items-center"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] bg-sky-500/20 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs font-mono bg-sky-500/10 dark:bg-sky-950 text-sky-600 dark:text-sky-300 border border-sky-500/40"
              >
                <Terminal className="w-4 h-4" />
                <span>Launch Terminal (CLI)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
