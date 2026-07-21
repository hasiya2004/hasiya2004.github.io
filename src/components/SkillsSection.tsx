import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Cpu, Terminal, Database, Server, Layers, ShieldAlert, Zap, Globe, Smartphone, Code2, Activity, Box, FileCode } from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Terminal": return <Terminal className="w-4 h-4 text-sky-400" />;
      case "Database": return <Database className="w-4 h-4 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-indigo-400" />;
      case "Server": return <Server className="w-4 h-4 text-emerald-400" />;
      case "ShieldAlert": return <ShieldAlert className="w-4 h-4 text-red-400" />;
      case "Zap": return <Zap className="w-4 h-4 text-amber-400" />;
      case "Layers": return <Layers className="w-4 h-4 text-purple-400" />;
      case "Globe": return <Globe className="w-4 h-4 text-blue-400" />;
      case "Smartphone": return <Smartphone className="w-4 h-4 text-teal-400" />;
      case "Code2": return <Code2 className="w-4 h-4 text-orange-400" />;
      case "FileCode": return <FileCode className="w-4 h-4 text-blue-300" />;
      case "Box": return <Box className="w-4 h-4 text-sky-300" />;
      default: return <Activity className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden text-white">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Engineering Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Skillset & Tools</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Multi-disciplinary expertise across AI & Data Science, Linux Systems, Cybersecurity, Microservices, and Mobile engineering.
          </p>
        </div>

        {/* Skill Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all cursor-pointer border ${
                activeTab === idx
                  ? "bg-sky-500/20 text-sky-300 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] font-semibold"
                  : "bg-slate-900/60 text-gray-400 border-gray-800 hover:border-gray-700 hover:text-gray-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Grid for Selected Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-sky-500/20 group-hover:border-sky-400 transition-colors">
                    {getIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      {skill.tag}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-sky-400 px-2 py-1 rounded bg-sky-950/60 border border-sky-500/30">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-gray-800">
                <div
                  className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* All Skill Badges Cloud */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-gray-800 text-center">
          <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
            Complete Technologies & Languages Portfolio
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Linux", "Hacking Tools", "Python", "Java", "Pandas", "Spring Boot",
              "React", "React Native", "HTML5", "CSS3", "JavaScript", "Rust",
              "Flutter", "C#", "C#.NET", "PyTorch", "TensorFlow", "OpenCV",
              "Nmap", "Metasploit", "Wireshark", "SQL", "Docker", "Git"
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-sky-950/40 text-sky-300 border border-sky-500/20 hover:border-sky-400 hover:bg-sky-500/10 transition-all"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
