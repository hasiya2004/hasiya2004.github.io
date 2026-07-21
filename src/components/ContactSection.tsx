import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, MessageSquare, Globe2 } from "lucide-react";
import { WorldMap } from "./ui/world-map";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-100 dark:bg-slate-950 relative text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      {/* Radial glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-600 dark:text-sky-300 text-xs font-mono tracking-widest uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-500">Collaboration</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
            Reach out to Hasindu Senarathna for AI research partnerships, data science projects, cybersecurity inquiries, or Nukebird organization collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-panel space-y-6">
              <h3 className="text-lg font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-sky-500" /> Direct Contact Info
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/60 dark:bg-black/40 border border-slate-200 dark:border-gray-800 hover:border-sky-400 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-600 dark:text-sky-300 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest block">Email Address</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/60 dark:bg-black/40 border border-slate-200 dark:border-gray-800 hover:border-sky-400 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-600 dark:text-sky-300 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest block">Mobile Contact</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors">
                      {PERSONAL_INFO.formattedPhone} ({PERSONAL_INFO.phone})
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/60 dark:bg-black/40 border border-slate-200 dark:border-gray-800">
                  <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-600 dark:text-sky-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest block">Primary Address</span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-gray-200">
                      {PERSONAL_INFO.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="p-6 rounded-2xl glass-panel grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/30 hover:border-blue-400 text-center space-y-2 group transition-all"
              >
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-slate-900 dark:text-white">LinkedIn</span>
                <span className="block text-[10px] font-mono text-blue-600 dark:text-blue-300">500+ Connections</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-gray-800 hover:border-sky-400 text-center space-y-2 group transition-all"
              >
                <Github className="w-6 h-6 text-slate-800 dark:text-gray-300 mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-slate-900 dark:text-white">GitHub</span>
                <span className="block text-[10px] font-mono text-slate-500 dark:text-gray-400">@hasiya2004</span>
              </a>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel border border-sky-500/20">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send Hasindu a Direct Message</h3>
            <p className="text-xs text-slate-600 dark:text-gray-400 mb-6">
              Have a research inquiry or project proposal? Fill out the form below.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-3 animate-fade-in-long">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Transmitted!</h4>
                <p className="text-xs text-slate-700 dark:text-gray-300 font-mono">
                  Thank you for connecting. Hasindu Senarathna will review your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Alex Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-gray-800 focus:border-sky-400 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 uppercase mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@sltc.lk"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-gray-800 focus:border-sky-400 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 uppercase mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="AI Research Collaboration / Nukebird Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-gray-800 focus:border-sky-400 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 uppercase mb-1">Message Content *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message details..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-gray-800 focus:border-sky-400 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-mono text-xs font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Transmission
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const globalConnections = [
    {
      start: { lat: 7.8731, lng: 80.7718, label: "Sri Lanka (SLTC Lab)" },
      end: { lat: 37.3861, lng: -122.0839, label: "Silicon Valley" },
    },
    {
      start: { lat: 7.8731, lng: 80.7718, label: "Sri Lanka" },
      end: { lat: 51.5074, lng: -0.1278, label: "London" },
    },
    {
      start: { lat: 7.8731, lng: 80.7718, label: "Sri Lanka" },
      end: { lat: 50.1109, lng: 8.6821, label: "Frankfurt" },
    },
    {
      start: { lat: 7.8731, lng: 80.7718, label: "Sri Lanka" },
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
    },
    {
      start: { lat: 7.8731, lng: 80.7718, label: "Sri Lanka" },
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
    },
    {
      start: { lat: 7.8731, lng: 80.7718, label: "Sri Lanka" },
      end: { lat: -23.5505, lng: -46.6333, label: "Sao Paulo" },
    },
  ];

  return (
    <footer className="relative bg-slate-900 dark:bg-black border-t border-slate-300 dark:border-gray-900 text-xs font-mono text-slate-600 dark:text-gray-400 overflow-hidden transition-colors duration-300">
      {/* Animated World Map Footer Background */}
      <div className="relative py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-mono mb-2">
            <Globe2 className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "10s" }} />
            Global Research & Cyber Node Connectivity
          </div>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
            Connecting <span className="text-sky-500">Nukebird Org & SLTC</span> Globally
          </h4>
          <p className="text-xs text-slate-500 dark:text-gray-400 max-w-lg mx-auto mt-2">
            Real-time data stream links originating from Sri Lanka to AI research hubs worldwide.
          </p>
        </div>

        {/* Animated World Map SVG Component */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200 dark:border-sky-500/20 shadow-2xl bg-white/40 dark:bg-black/60 backdrop-blur-md">
          <WorldMap dots={globalConnections} lineColor="#0ea5e9" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div>
            <span className="text-slate-900 dark:text-white font-bold">{PERSONAL_INFO.name}</span> &copy; {new Date().getFullYear()} • Data Science & AI Engineering @ SLTC
          </div>

          <div className="flex items-center gap-4 text-sky-600 dark:text-sky-400">
            <span>{PERSONAL_INFO.organization} Org</span>
            <span>•</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
