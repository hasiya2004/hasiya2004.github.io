import React, { useState, useRef, useEffect } from "react";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "../data/portfolioData";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: "welcome",
      command: "nukeos --version",
      output: (
        <div className="space-y-1 text-sky-300">
          <p>NukeOS Cyber & AI Intelligence Terminal v3.4 [SLTC Build]</p>
          <p className="text-gray-400">Type <span className="text-emerald-400 font-bold">help</span> to list available commands.</p>
        </div>
      )
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-gray-300 font-mono">
            <p className="text-sky-400 font-bold">Available NukeOS Commands:</p>
            <p><span className="text-emerald-400 w-24 inline-block">bio</span> - Hasindu Senarathna's personal background & SLTC affiliation</p>
            <p><span className="text-emerald-400 w-24 inline-block">skills</span> - Full engineering matrix & technology stack</p>
            <p><span className="text-emerald-400 w-24 inline-block">nukebird</span> - Information about Nukebird Organization</p>
            <p><span className="text-emerald-400 w-24 inline-block">contact</span> - Email, Mobile Phone, Address, LinkedIn & GitHub links</p>
            <p><span className="text-emerald-400 w-24 inline-block">wiki</span> - Published articles & research papers</p>
            <p><span className="text-emerald-400 w-24 inline-block">clear</span> - Clear terminal window buffer</p>
            <p><span className="text-emerald-400 w-24 inline-block">exit</span> - Close terminal window</p>
          </div>
        );
        break;

      case "bio":
        output = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-sky-300 font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.title})</p>
            <p>Institution: {PERSONAL_INFO.institution}</p>
            <p>Organization: {PERSONAL_INFO.organization}</p>
            <p className="text-gray-400 mt-2">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <p className="text-sky-400 font-bold">{cat.title}:</p>
                <p className="text-gray-300 font-mono">
                  {cat.skills.map((s) => `${s.name} (${s.level}%)`).join(", ")}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "nukebird":
        output = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-indigo-400 font-bold">Nukebird Organization</p>
            <p>Founder & Chief Architect: Hasindu Senarathna</p>
            <p>Focus: Autonomous AI Models, Threat Intelligence, High-Performance Systems</p>
            <p className="text-sky-400">GitHub: {PERSONAL_INFO.github}</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-gray-300 font-mono">
            <p><span className="text-gray-500">Email:</span> {PERSONAL_INFO.email}</p>
            <p><span className="text-gray-500">Phone:</span> {PERSONAL_INFO.formattedPhone} ({PERSONAL_INFO.phone})</p>
            <p><span className="text-gray-500">Address:</span> {PERSONAL_INFO.address}</p>
            <p><span className="text-gray-500">LinkedIn:</span> {PERSONAL_INFO.linkedin}</p>
            <p><span className="text-gray-500">GitHub:</span> {PERSONAL_INFO.github}</p>
          </div>
        );
        break;

      case "wiki":
        output = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="text-sky-400 font-bold">Published Wiki Articles:</p>
            <p>1. Anomalous Matter & Deep Shader Mathematics in WebGL</p>
            <p>2. High-Throughput Feature Extraction with Pandas & PyTorch</p>
            <p>3. Offensive Cyber Security: Penetration Testing & Ethical Hacking</p>
            <p>4. Nukebird Organization Mission: Autonomous AI Systems</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        setInputVal("");
        return;

      default:
        output = (
          <p className="text-xs text-red-400 font-mono">
            Command not recognized: <span className="underline">{cmd}</span>. Type <span className="text-emerald-400">help</span> for assistance.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      { id: Date.now().toString(), command: inputVal, output }
    ]);
    setInputVal("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-long">
      <div className="w-full max-w-3xl h-[550px] rounded-2xl border border-sky-500/40 bg-slate-950 shadow-2xl flex flex-col overflow-hidden font-mono">
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs text-gray-400 ml-2 font-bold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
              hasindu@nukeos:~ (bash)
            </span>
          </div>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content Buffer */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-sky-400">
                <span className="text-emerald-400 font-bold">hasindu@sltc:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-sky-500/20">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900 border-t border-gray-800 flex items-center gap-2">
          <span className="text-emerald-400 text-xs font-bold">hasindu@sltc:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'skills', 'bio', 'contact', 'wiki', 'nukebird')..."
            className="flex-1 bg-transparent text-xs text-white focus:outline-none placeholder-gray-600 font-mono"
            autoFocus
          />
          <button type="submit" className="p-1 rounded bg-sky-500/20 text-sky-300 hover:bg-sky-500 hover:text-black transition-colors">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
