import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { User, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Flame, ExternalLink, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-slate-100 dark:bg-black/90 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-600 dark:text-sky-300 text-xs font-mono tracking-widest uppercase mb-4">
            <User className="w-3.5 h-3.5" />
            Profile & Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-500">Hasindu Senarathna</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Data Scientist & AI Engineer operating out of SLTC and spearheading Nukebird Organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Info Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 p-0.5 shadow-lg shadow-sky-500/20">
                  <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[14px] flex items-center justify-center font-mono text-2xl font-bold text-sky-500 dark:text-sky-400">
                    HS
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-sm font-mono text-sky-600 dark:text-sky-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-sky-500 dark:text-sky-300" />
                    {PERSONAL_INFO.title} @ SLTC
                  </p>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                Active Researcher
              </div>
            </div>

            <div className="py-6 space-y-4 text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                I am a passionate <strong className="dark:text-white text-slate-900">Data Scientist and AI Engineer</strong> studying at <strong className="text-sky-600 dark:text-sky-300">{PERSONAL_INFO.institution}</strong>. My research and engineering focus spans across computer vision, PyTorch/TensorFlow deep neural networks, high-throughput Pandas analytics, and low-level Linux cybersecurity tooling.
              </p>
              <p>
                As the founder of <strong className="text-indigo-600 dark:text-indigo-300">{PERSONAL_INFO.organization} Organization</strong>, I lead open-source projects designed to bridge artificial intelligence with automated cybersecurity diagnostics and autonomous system architectures.
              </p>
            </div>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-gray-800 text-xs font-mono">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-black/40 border border-slate-200 dark:border-gray-800">
                <Mail className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
                <div className="truncate">
                  <span className="text-slate-500 dark:text-gray-500 block text-[10px] uppercase">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 dark:text-gray-200 hover:text-sky-500 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-black/40 border border-slate-200 dark:border-gray-800">
                <Phone className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-gray-500 block text-[10px] uppercase">Mobile Phone</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-800 dark:text-gray-200 hover:text-sky-500 transition-colors">
                    {PERSONAL_INFO.formattedPhone} ({PERSONAL_INFO.phone})
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-black/40 border border-slate-200 dark:border-gray-800 sm:col-span-2">
                <MapPin className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
                <div>
                  <span className="text-slate-500 dark:text-gray-500 block text-[10px] uppercase">Location Address</span>
                  <span className="text-slate-800 dark:text-gray-200">{PERSONAL_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Connections & Nukebird Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Social Cards */}
            <div className="p-6 rounded-2xl glass-panel space-y-4">
              <h4 className="text-sm font-mono tracking-wider text-sky-500 dark:text-sky-400 uppercase font-semibold flex items-center gap-2">
                <Globe className="w-4 h-4" /> Connect & Profiles
              </h4>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-500/30 hover:border-blue-400 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white block">LinkedIn Profile</span>
                    <span className="text-xs text-blue-600 dark:text-blue-300 font-mono">500+ Connections</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-500 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-gray-700 hover:border-sky-400 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-200 dark:bg-gray-800 text-slate-800 dark:text-gray-200 group-hover:bg-sky-500 group-hover:text-black transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white block">GitHub Profile</span>
                    <span className="text-xs text-slate-500 dark:text-gray-400 font-mono">@hasiya2004</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Nukebird Org Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-black text-white border border-indigo-500/40 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Flame className="w-5 h-5 animate-pulse" />
                </div>
                <h4 className="text-base font-mono font-bold text-white">
                  {PERSONAL_INFO.organization} Organization
                </h4>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed mb-4">
                Autonomous intelligence laboratory dedicated to pushing boundaries in cyber security diagnostics, high-dimensional neural network research, and system level tools.
              </p>

              <a
                href="#nukebird"
                className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 hover:text-indigo-200 underline"
              >
                Learn more about Nukebird projects &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
