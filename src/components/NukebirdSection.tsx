import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Flame, Shield, Cpu, Terminal, Github, ExternalLink, Zap, Lock, Code2 } from "lucide-react";

export function NukebirdSection() {
  return (
    <section id="nukebird" className="py-24 bg-black relative text-white overflow-hidden border-t border-indigo-900/30">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Org Banner */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-mono tracking-widest uppercase">
              <Flame className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              Nukebird Organization
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Autonomous AI & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-sky-400">
                Cybersecurity Hub
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded and architected by <strong className="text-white">Hasindu Senarathna</strong>, <strong className="text-indigo-300">Nukebird Org</strong> develops next-generation artificial intelligence algorithms, threat intelligence scanners, and systems research software.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold tracking-wider transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <Github className="w-4 h-4" />
                Visit Nukebird Repositories
              </a>
            </div>
          </div>

          {/* Right Column - Org Pillars & Modules */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border-indigo-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">NukeAI Neural Engines</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                PyTorch neural networks tailored for real-time sensor anomaly detection, deep reinforcement learning, and visual object classification.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border-indigo-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Threat Sentinel Labs</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Penetration testing utilities, Linux kernel eBPF packet inspection, and network security diagnostic tools.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border-indigo-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">High-Throughput Analytics</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Pandas and Rust multi-threaded data pipelines processing multi-gigabyte data matrices with low latency.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel glass-panel-hover border-indigo-500/20 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Open Knowledge Wiki</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Public research papers, code walkthroughs, and technical articles published directly on this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
