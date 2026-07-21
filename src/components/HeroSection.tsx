import React from "react";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ArrowDown, Terminal, BookOpen, Sparkles, Shield, Cpu } from "lucide-react";

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export function HeroSection({ onOpenTerminal }: HeroSectionProps) {
  return (
    <div className="relative">
      <AnomalousMatterHero
        title={`SLTC LABS // ${PERSONAL_INFO.organization} ORG ARCHITECTURE`}
        subtitle={PERSONAL_INFO.name}
        description={`${PERSONAL_INFO.title} at SLTC & Founder of ${PERSONAL_INFO.organization} Organization. Architecting autonomous machine learning models, high-performance data processing pipelines, and resilient Linux security software.`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-mono tracking-wider font-semibold bg-sky-500 hover:bg-sky-400 text-black transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Explore Projects
          </a>

          <a
            href="#wiki"
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-mono tracking-wider text-sky-300 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            Browse Wiki Articles
          </a>

          <button
            onClick={onOpenTerminal}
            className="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-mono tracking-wider text-gray-300 bg-black/60 hover:bg-gray-900 border border-gray-700 hover:border-sky-400/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            NukeOS CLI
          </button>
        </div>
      </AnomalousMatterHero>

      {/* Badges Floating Row below 3D canvas */}
      <div className="relative z-20 -mt-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl glass-panel border border-sky-500/20 shadow-2xl backdrop-blur-xl">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3 rounded-xl bg-black/40 border border-sky-500/10 hover:border-sky-500/30 transition-all">
              <span className="block text-2xl md:text-3xl font-extrabold font-mono text-sky-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] font-mono tracking-wider text-gray-400 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
