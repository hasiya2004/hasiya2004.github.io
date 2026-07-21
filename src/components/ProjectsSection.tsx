import React, { useState } from "react";
import { PROJECTS, Project } from "../data/portfolioData";
import { Sparkles, Github, ExternalLink, Code2, Layers, Cpu, Activity, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "AI/ML", "Data Science", "Full Stack", "Mobile"];

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-slate-950 relative text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-400">Projects & Systems</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Real-world AI models, cybersecurity intrusion detectors, and enterprise software systems built by Hasindu Senarathna.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-sky-500 text-black font-semibold shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                  : "bg-slate-900 text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden group border border-sky-500/20"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-sky-500/30 text-[10px] font-mono font-bold text-sky-300">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono font-bold text-emerald-300">
                      ★ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400 mt-1">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-xs text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics if present */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-black/50 border border-gray-800">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <span className="block text-sm font-bold font-mono text-sky-400">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono text-gray-500 uppercase">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-gray-300 border border-gray-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                    <a
                      href={project.githubUrl || "https://github.com/hasiya2004"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code Repository
                    </a>

                    <span className="text-xs font-mono text-gray-500 flex items-center gap-1 group-hover:text-sky-300">
                      Inspect System <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
