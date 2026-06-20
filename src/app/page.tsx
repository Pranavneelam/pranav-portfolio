"use client";
import { useState, useEffect, useRef } from "react";
import { Shield, Activity, Terminal, ChevronDown, RefreshCw } from "lucide-react";
import HologramCore from "../components/HologramCore";
import ProjectGrid from "../components/ProjectGrid";

export default function Home() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const rawAuditSteps = [
    "> INITIALIZING BLACK-BOX SECURITY AUDIT SYSTEM...",
    "> CONNECTING TO STACK ENGINE VECTORS...",
    "> LOADING BINARY STEGANOGRAPHY CORE [MPV bindings ready]",
    "> EXTRACTING BIOMETRIC EMBEDDING PIXELS // OK",
    "> PARSING LOCALHOST SIMILARITY MATRIX MATRIX...",
    "> EVALUATING RETRIEVAL-AUGMENTED GENERATION STACK...",
    "> FAISS VECTOR STORAGE FLUID MAP // MATCH FOUND",
    "> COMPILING METRICS FROM VIDYA JYOTHI INSTITUTE OF TECHNOLOGY MODULE...",
    "> SECURITY VERIFICATION INTEGRITY: PASS (100%)",
    "> AUDIT EXECUTION SUCCESSFULLY STABILIZED."
  ];

  useEffect(() => {
    if (isAuditing) {
      setTerminalLogs([]);
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < rawAuditSteps.length) {
          setTerminalLogs((prev) => [...prev, rawAuditSteps[currentLine]]);
          currentLine++;
        } else {
          clearInterval(interval);
        }
      }, 600);
      return () => clearInterval(interval);
    }
  }, [isAuditing]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black font-mono text-slate-200 select-none">
      <HologramCore />
      <div className="absolute inset-0 z-5 bg-radial-gradient from-transparent via-black/60 to-black pointer-events-none" />
      
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-4 md:p-8">
        
        {/* HEADER */}
        <header className="w-full flex justify-between items-start border-b border-cyan-500/20 pb-4 backdrop-blur-xs pointer-events-auto">
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-widest text-white uppercase transition-all duration-300 hover:text-cyan-400">PRANAV NEELAM<span className="text-cyan-400 animate-pulse">.</span></h1>
            <p className="text-[10px] text-cyan-500/70 tracking-widest uppercase font-bold flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>ENGINEER_STATUS: ACTIVE // INTERN_AT_VARIABLE
            </p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-[10px] text-slate-500 tracking-wider">HOST // LOCALHOST:3000</p>
            <p className="text-[10px] text-cyan-600/80 tracking-widest">SYS_REV // 2026.06.20</p>
          </div>
        </header>

        {/* MAIN IDENTITY MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full my-auto items-center gap-8 pt-6 pb-6">
          
          {/* Left Text Column */}
          <div className="lg:col-span-4 flex flex-col gap-2 pointer-events-auto">
            <div className="flex flex-col gap-1 text-[11px] font-bold tracking-wider text-cyan-500/80">
              <p className="flex items-center gap-1">&gt; SOURCE: VIDYA JYOTHI INSTITUTE OF TECHNOLOGY</p>
              <p className="animate-pulse">&gt; INITIALIZING EXPERT SYSTEMS ARCHITECTURE...</p>
            </div>
            
            <div className="mt-4">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                COMPUTER<br />
                SCIENCE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  ENGINEER
                </span>
              </h1>
              
              <div className="mt-2 text-cyan-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-2 bg-cyan-950/20 border border-cyan-500/10 px-2 py-1 rounded w-fit">
                <Terminal size={12} className="animate-spin [animation-duration:4s]" />
                <span>SYS_ARCH // INTERN_LEVEL_STACK</span>
              </div>

              <p className="text-xs text-slate-400/90 tracking-wide uppercase mt-4 max-w-sm font-sans leading-relaxed">
                Specialized in Full-Stack development, Cloud Infrastructures, and optimizing production-grade Artificial Intelligence pipelines.
              </p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button 
                onClick={() => setIsAuditing(true)}
                className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold uppercase text-[11px] tracking-wider rounded border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:bg-transparent hover:text-cyan-400 transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                Execute Project Audit
              </button>
              <button className="px-4 py-2 bg-transparent text-slate-400 font-bold uppercase text-[11px] tracking-wider rounded border border-slate-800 hover:border-slate-500 hover:text-white transition-all duration-300">
                Download Manifest (.PDF)
              </button>
            </div>
          </div>
          
          {/* Center Column: Portrait Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative group pointer-events-auto z-20">
            <div className="absolute -inset-2 border border-cyan-500/10 rounded-xl pointer-events-none group-hover:border-cyan-500/40 transition-all duration-500" />
            
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 z-30" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 z-30" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-cyan-400 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-300 z-30" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-400 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 z-30" />
            
            <div className="w-full max-w-[320px] aspect-[4/5] relative rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.95)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] group-hover:border-cyan-500/50 transition-all duration-700 ease-out">
              <img 
                src="/profile.jpeg" 
                alt="Pranav Neelam" 
                className="w-full h-full object-cover grayscale opacity-75 contrast-115 brightness-90 group-hover:scale-102 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80 pointer-events-none" />
            </div>
          </div>
          
          {/* Right Column: Ledger Diagnostics */}
          <div className="lg:col-span-3 flex flex-col gap-4 bg-slate-950/40 p-5 border border-slate-900 rounded-lg backdrop-blur-md pointer-events-auto hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] transition-all duration-500 group">
            <div className="border-b border-slate-900 pb-2 flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest font-bold group-hover:border-cyan-500/20 transition-colors">
              <span className="flex items-center gap-1.5 text-slate-400 group-hover:text-cyan-400 transition-colors"><Activity size={12} /> Technical Ledger</span>
              <span className="text-[9px] text-cyan-500 font-black animate-pulse tracking-wide">LIVE_COMPILING</span>
            </div>
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-slate-600 block text-[9px] uppercase font-sans font-bold tracking-wider">Engine Languages</span>
                <span className="text-slate-300 font-bold font-mono tracking-wide">Python • SQL • Java • C • C++</span>
              </div>
              <div>
                <span className="text-slate-600 block text-[9px] uppercase font-sans font-bold tracking-wider">AI Systems & Architecture</span>
                <span className="text-cyan-200/90 font-medium">Retrieval-Augmented Generation (RAG) // FIASS Vector Frameworks</span>
              </div>
              <div>
                <span className="text-slate-600 block text-[9px] uppercase font-sans font-bold tracking-wider">Enterprise Domains</span>
                <span className="text-slate-400">Full-Stack Production, Big Data Analytics, Cloud Environments</span>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE TERMINAL AUDIT CONSOLE DRAWER */}
        {isAuditing && (
          <div className="w-full bg-slate-950 border border-cyan-500/30 rounded-lg p-4 mb-6 pointer-events-auto shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-500 animate-[fadeIn_0.3s_ease-out]">
            <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-3 text-xs font-bold text-cyan-400">
              <span className="flex items-center gap-2"><Terminal size={14} className="animate-pulse" /> LIVE STREAM CONSOLE WORKSPACE</span>
              <button 
                onClick={() => setIsAuditing(false)}
                className="text-slate-500 hover:text-rose-400 transition-colors p-1"
              >
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="h-32 overflow-y-auto text-[11px] font-mono space-y-1.5 text-slate-300 custom-scrollbar pr-2">
              {terminalLogs.map((log, index) => (
                <div key={index} className={`flex gap-2 ${index === terminalLogs.length - 1 && terminalLogs.length < rawAuditSteps.length ? "text-cyan-400" : "text-emerald-400/90"}`}>
                  <span className="text-slate-600 select-none">[{new Date().toLocaleTimeString()}]</span>
                  <span>{log}</span>
                </div>
              ))}
              {terminalLogs.length < rawAuditSteps.length && (
                <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
                  <RefreshCw size={10} className="animate-spin" />
                  <span>EXECUTING SCAN...</span>
                </div>
              )}
              <div ref={terminalEndRef} />
            </div>
          </div>
        )}

        {/* PROJECT MATRIX */}
        <ProjectGrid />

        {/* FOOTER METRICS */}
        <footer className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-slate-900 pt-6 mt-12 text-[10px] text-slate-600 pointer-events-auto">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 text-cyan-600/40 uppercase font-bold tracking-widest"><Shield size={12} /> SECURE_ID // PRANAV-NEELAM-2026</span>
          </div>
          <div className="tracking-widest text-cyan-700/50 font-bold mt-2 sm:mt-0 uppercase">LOC: 17.3850° N, 78.4867° E // HYDERABAD, IN</div>
        </footer>
      </div>
    </main>
  );
}
