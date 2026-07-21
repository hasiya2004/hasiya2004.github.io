import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { WikiSection } from "./components/WikiSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { NukebirdSection } from "./components/NukebirdSection";
import { ContactSection, Footer } from "./components/ContactSection";
import { TerminalModal } from "./components/TerminalModal";

export function AppContent() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white font-sans selection:bg-sky-500/30 selection:text-sky-400 transition-colors duration-300">
      {/* Sci-fi navigation header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        activeSection="hero"
      />

      {/* Hero Section with Three.js 3D Shader canvas */}
      <main>
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Profile & Biography Section */}
        <AboutSection />

        {/* Technical Engineering Skillset */}
        <SkillsSection />

        {/* Featured Projects & Systems */}
        <ProjectsSection />

        {/* Wiki / Knowledge Articles Hub */}
        <WikiSection />

        {/* Verified Academic & Professional Certificates */}
        <CertificatesSection />

        {/* Nukebird Organization Section */}
        <NukebirdSection />

        {/* Contact Form & Information */}
        <ContactSection />
      </main>

      {/* Footer with Animated World Map Background */}
      <Footer />

      {/* Interactive NukeOS CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
