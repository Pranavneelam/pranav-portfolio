"use client";
import { useState, useEffect, useRef } from "react";
import { Shield, Activity, Terminal, ChevronDown, RefreshCw, Cpu, Code2, Database, Box, Brain, Network, TerminalSquare, Cloud, Flame, Globe, FileText, Linkedin, Github } from "lucide-react";
import HologramCore from "../components/HologramCore";
import ProjectGrid from "../components/ProjectGrid";

export default function Home() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"ai-core" | "data-ops" | "dev-env">("ai-core");
  
  const [epoch, setEpoch] = useState(0);
  const [lossMetrics, setLossMetrics] = useState<{ loss: number; acc: number }[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const rawAuditSteps = [
    "> INITIALIZING INTELLIGENT SYSTEMS PIPELINE...",
    "> MAPPING MODEL MATRIX: TRANSFORMERS & PYTORCH TENSORS...",
    "> TUNING AGENT NODES VIA LANGCHAIN & LANGGRAPH...",
    "> RETRIEVING EMBEDDINGS VECTOR SEARCH PILLARS FROM FAISS...",
    "> DEPLOYING MICROSERVICE CONTAINER WORKSPACES VIA FASTAPI...",
    "> SYNC COMPLETED // SECURE EDGE AI INFRASTRUCTURE IS OPERATIONAL."
  ];

  useEffect(() => {
    if (isAuditing) {
      setTerminalLogs([]);
      setEpoch(0);
      setLossMetrics([]);
      
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < rawAuditSteps.length) {
          setTerminalLogs((prev) => [...prev, rawAuditSteps[currentLine]]);
          
          setLossMetrics((prev) => {
            const step = prev.length;
            const simulatedLoss = Math.max(0.08, 0.85 * Math.exp(-step * 0.45) + (Math.random() * 0.04 - 0.02));
            const simulatedAcc = Math.min(99.4, 72.5 + (step * 5.2) + (Math.random() * 1.5));
            return [...prev, { loss: simulatedLoss, acc: simulatedAcc }];
          });

          setEpoch((prev) => prev + 1);
          currentLine++;
        } else {
          clearInterval(interval);
        }
      }, 700);
      return () => clearInterval(interval);
    }
  }, [isAuditing]);

  useEffect(() => {
    if (canvasRef.current && lossMetrics.length > 0) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      
      const width = canvasRef.current.width;
      const height = canvasRef.current.height;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(99, 102, 241, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 20; i < width; i += 30) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke();
      }
      for (let i = 15; i < height; i += 20) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke();
      }

      ctx.beginPath();
      ctx.strokeStyle = "#6366f1";
      ctx.lineWidth = 2.5;
      lossMetrics.forEach((m, idx) => {
        const x = (idx / (rawAuditSteps.length - 1)) * (width - 20) + 10;
        const y = height - (m.loss * (height - 20)) - 10;
        if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 2;
      lossMetrics.forEach((m, idx) => {
        const x = (idx / (rawAuditSteps.length - 1)) * (width - 20) + 10;
        const y = height - ((m.acc / 100) * (height - 30)) - 15;
        if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }
  }, [lossMetrics]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  const stack = {
    "ai-core": [
      { name: "Python", expert: true, icon: <Code2 size={13} className="text-indigo-400" /> },
      { name: "Hugging Face", expert: true, icon: <Brain size={13} className="text-amber-400" /> },
      { name: "PyTorch", expert: true, icon: <Flame size={13} className="text-orange-400" /> },
      { name: "LangChain", expert: true, icon: <Network size={13} className="text-emerald-400" /> },
      { name: "FAISS", expert: true, icon: <Box size={13} className="text-blue-400" /> },
      { name: "Scikit-Learn", expert: true, icon: <Cpu size={13} className="text-teal-400" /> },
      { name: "OpenAI API", expert: false, icon: <Cpu size={13} className="text-slate-400" /> },
      { name: "LangGraph", expert: false, icon: <Network size={13} className="text-slate-400" /> },
      { name: "TensorFlow", expert: false, icon: <Activity size={13} className="text-orange-400" /> },
      { name: "OpenCV (CV)", expert: false, icon: <Brain size={13} className="text-indigo-400" /> },
      { name: "Transformers (NLP)", expert: false, icon: <Brain size={13} className="text-violet-400" /> },
      { name: "LSTM (Time Series)", expert: false, icon: <Activity size={13} className="text-pink-400" /> },
    ],
    "data-ops": [
      { name: "SQL", expert: false, icon: <Database size={13} className="text-emerald-400" /> },
      { name: "MongoDB", expert: false, icon: <Database size={13} className="text-green-400" /> },
      { name: "Pandas", expert: false, icon: <Database size={13} className="text-indigo-400" /> },
      { name: "NumPy", expert: false, icon: <Cpu size={13} className="text-blue-400" /> },
      { name: "Apache Spark", expert: false, icon: <Cloud size={13} className="text-orange-400" /> },
      { name: "Kafka", expert: false, icon: <Network size={13} className="text-red-400" /> },
      { name: "Matplotlib", expert: false, icon: <Activity size={13} className="text-indigo-400" /> },
      { name: "Seaborn", expert: false, icon: <Activity size={13} className="text-teal-400" /> },
    ],
    "dev-env": [
      { name: "Docker", expert: true, icon: <Box size={13} className="text-sky-400" /> },
      { name: "FastAPI", expert: true, icon: <TerminalSquare size={13} className="text-teal-400" /> },
      { name: "AWS", expert: true, icon: <Cloud size={13} className="text-orange-400" /> },
      { name: "Git & GitHub", expert: true, icon: <Globe size={13} className="text-white" /> },
      { name: "Kubernetes", expert: false, icon: <Box size={13} className="text-blue-400" /> },
      { name: "VS Code", expert: false, icon: <TerminalSquare size={13} className="text-blue-400" /> },
      { name: "Jupyter / Colab", expert: false, icon: <Code2 size={13} className="text-amber-400" /> },
    ]
  };

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black font-mono text-slate-300 select-none">
      <HologramCore />
      
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-4 md:p-8 bg-radial from-transparent via-black/40 to-black/90">
        
        {/* HEADER */}
        <header className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-indigo-500/20 pb-4 backdrop-blur-xs gap-4 pointer-events-auto">
          <div>
            <h1 className="text-xl md:text-2xl font-black tracking-widest text-white uppercase transition-all duration-300 hover:text-indigo-400">PRANAV NEELAM<span className="text-indigo-500 animate-pulse">.</span></h1>
            <p className="text-[10px] text-indigo-400 tracking-widest uppercase font-bold flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>ENGINEER_STATUS: ACTIVE // INTERN_AT_VARIABLE
            </p>
          </div>

          {/* SOCIALS & ACTIONS BAR */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a 
              href="/resume.pdf" 
              download="Pranav_Neelam_Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-black tracking-wider uppercase rounded transition-all shadow-[0_4px_12px_rgba(99,102,241,0.3)] cursor-pointer"
            >
              <FileText size={13} />
              <span>Download Resume</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/pranavneelam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-indigo-400 border border-zinc-800 text-[11px] font-bold tracking-wider uppercase rounded transition-all cursor-pointer"
            >
              <Linkedin size={13} />
              <span className="hidden md:inline">LinkedIn</span>
            </a>

            <a 
              href="https://github.com/Pranavneelam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-indigo-400 border border-zinc-800 text-[11px] font-bold tracking-wider uppercase rounded transition-all cursor-pointer"
            >
              <Github size={13} />
              <span className="hidden md:inline">GitHub</span>
            </a>
          </div>
        </header>

        {/* MAIN IDENTITY MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full my-auto items-start gap-8 pt-8 pb-8">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-2 pointer-events-auto self-center">
            <div className="flex flex-col gap-1 text-[11px] font-black tracking-wider text-indigo-400">
              <p className="flex items-center gap-1">&gt; SOURCE: VIDYA JYOTHI INSTITUTE OF TECHNOLOGY</p>
              <p className="text-emerald-400 font-bold">&gt; SYNCHRONIZING NEURAL RUNTIMES... READY</p>
            </div>
            
            <div className="mt-4">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                ARTIFICIAL<br />
                INTELLIGENCE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 font-extrabold drop-shadow-[0_2px_10px_rgba(99,102,241,0.2)]">
                  ENGINEER
                </span>
              </h1>
              
              <div className="mt-3 text-indigo-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-2 bg-indigo-950/40 border border-indigo-800/60 px-2.5 py-1 rounded w-fit">
                <Cpu size={12} className="text-indigo-400" />
                <span>AI_ENGINEERING_INTERN // VARIABLE</span>
              </div>

              <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase mt-5 max-w-sm font-sans leading-relaxed">
                Specialized in architecting complex Intelligent agent pipelines, Retrieval-Augmented Generation (RAG) frameworks, and optimizing distributed data training environments.
              </p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button 
                onClick={() => setIsAuditing(true)}
                className="px-5 py-2.5 bg-indigo-600 text-white font-black uppercase text-[11px] tracking-wider rounded border border-indigo-600 shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:bg-indigo-500 transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                Execute Pipeline Audit
              </button>
            </div>
          </div>
          
          {/* Center Column */}
          <div className="lg:col-span-4 flex justify-center items-center relative group pointer-events-auto z-20 self-center">
            <div className="absolute -inset-2 border border-indigo-500/10 rounded-xl pointer-events-none group-hover:border-indigo-500/20 transition-all duration-500" />
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-indigo-500 z-30" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-indigo-500 z-30" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-indigo-500 z-30" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-indigo-500 z-30" />
            
            <div className="w-full max-w-[290px] aspect-[4/5] relative rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_15px_50px_rgba(0,0,0,0.8)] group-hover:border-indigo-500/30 transition-all duration-700">
              <img 
                src="/profile.jpeg" 
                alt="Pranav Neelam" 
                className="w-full h-full object-cover grayscale opacity-80 contrast-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-zinc-950/80 p-4 border border-zinc-800/80 rounded-lg pointer-events-auto shadow-2xl">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
              <span className="flex items-center gap-1.5 text-[10px] uppercase font-black text-zinc-400 tracking-wider"><Activity size={12} className="text-indigo-400" /> Tech Matrix Console</span>
              <span className="text-[9px] text-indigo-400 font-black bg-indigo-950/50 border border-indigo-800/50 px-2 py-0.5 rounded">V2_DARK_MODE</span>
            </div>

            <div className="grid grid-cols-3 gap-1 bg-zinc-900/60 p-1 rounded border border-zinc-800 text-[9px] font-black tracking-wider uppercase">
              <button onClick={() => setActiveTab("ai-core")} className={`py-1.5 rounded transition-all cursor-pointer text-center ${activeTab === "ai-core" ? "bg-zinc-800 text-white border border-zinc-700 font-black" : "text-zinc-500"}`}>AI & LLMs</button>
              <button onClick={() => setActiveTab("data-ops")} className={`py-1.5 rounded transition-all cursor-pointer text-center ${activeTab === "data-ops" ? "bg-zinc-800 text-white border border-zinc-700 font-black" : "text-zinc-500"}`}>Data Infra</button>
              <button onClick={() => setActiveTab("dev-env")} className={`py-1.5 rounded transition-all cursor-pointer text-center ${activeTab === "dev-env" ? "bg-zinc-800 text-white border border-zinc-700 font-black" : "text-zinc-500"}`}>MLOps & Cloud</button>
            </div>

            <div className="grid grid-cols-1 gap-1.5 max-h-[220px] overflow-y-auto custom-scrollbar pr-1">
              {stack[activeTab].map((tech, idx) => (
                <div key={idx} className={`flex items-center justify-between p-2.5 rounded text-xs transition-all border ${tech.expert ? "bg-indigo-950/20 border-indigo-900/60 text-white font-bold" : "bg-zinc-900/30 border-zinc-800/60 text-zinc-400"}`}>
                  <div className="flex items-center gap-2">{tech.icon}<span className="tracking-wide font-semibold">{tech.name}</span></div>
                  {tech.expert && <span className="text-[8px] tracking-widest text-indigo-400 px-1.5 py-0.5 bg-indigo-950/60 rounded border border-indigo-800/40 font-black">CORE_EXPERT</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TERMINAL PANEL */}
        {isAuditing && (
          <div className="w-full bg-zinc-950/90 border border-zinc-800 rounded-lg p-4 mb-6 pointer-events-auto shadow-2xl animate-[fadeIn_0.3s_ease-out] grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800 pb-4 lg:pb-0 lg:pr-4">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-3 text-xs font-black text-indigo-400">
                <span className="flex items-center gap-2"><Terminal size={14} /> CORE DEPLOYMENT RUNTIMES</span>
              </div>
              <div className="h-36 overflow-y-auto text-[11px] font-mono space-y-1.5 text-zinc-300 custom-scrollbar pr-2">
                {terminalLogs.map((log, index) => (
                  <div key={index} className={`flex gap-2 ${index === terminalLogs.length - 1 && terminalLogs.length < rawAuditSteps.length ? "text-indigo-400 font-bold" : "text-zinc-400"}`}>
                    <span className="text-zinc-600 font-bold select-none">[{new Date().toLocaleTimeString()}]</span>
                    <span>{log}</span>
                  </div>
                ))}
                {terminalLogs.length < rawAuditSteps.length && (
                  <div className="flex items-center gap-2 text-indigo-400 font-bold animate-pulse">
                    <RefreshCw size={10} className="animate-spin" />
                    <span>COMPILING MODEL WEIGHT MATRIX...</span>
                  </div>
                )}
                <div ref={terminalEndRef} />
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-800 pb-4 lg:pb-0 lg:pr-4">
              <div className="text-[10px] font-black text-zinc-500 tracking-wider mb-2 flex justify-between items-center">
                <span>// LIVE TRAINING OPTIMIZATION</span>
                <span className="text-indigo-400">EPOCH: {epoch}/6</span>
              </div>
              <div className="relative bg-zinc-900/50 border border-zinc-800/80 rounded p-1 flex justify-center items-center">
                <canvas ref={canvasRef} width={200} height={110} className="w-full h-28" />
                {lossMetrics.length > 0 && (
                  <div className="absolute bottom-2 left-2 flex gap-3 text-[9px] font-mono font-black bg-black px-1.5 py-0.5 rounded border border-zinc-800">
                    <span className="text-indigo-400">LOSS: {lossMetrics[lossMetrics.length - 1]?.loss.toFixed(4)}</span>
                    <span className="text-emerald-400">ACC: {lossMetrics[lossMetrics.length - 1]?.acc.toFixed(1)}%</span>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="text-[10px] font-black text-zinc-500 tracking-wider mb-2 flex justify-between items-center">
                <span>// RAG PIPELINE ARCHITECTURE (FAISS)</span>
                <button onClick={() => setIsAuditing(false)} className="text-zinc-500 hover:text-rose-400 p-0.5"><ChevronDown size={14} /></button>
              </div>
              <div className="flex flex-col gap-1 text-[9px] tracking-wide font-mono bg-zinc-900/40 border border-zinc-800 p-2 rounded h-28 justify-center">
                <div className={`p-1 rounded border transition-all text-center ${epoch >= 1 ? "bg-indigo-600 border-indigo-600 text-white font-bold shadow-sm" : "border-zinc-800 text-zinc-500 bg-transparent"}`}>
                  1. Query Input Pipeline
                </div>
                <div className="text-center text-zinc-600 font-bold leading-none">↓</div>
                <div className={`p-1 rounded border transition-all text-center ${epoch >= 4 ? "bg-blue-600 border-blue-600 text-white font-bold shadow-sm" : "border-zinc-800 text-zinc-500 bg-transparent"}`}>
                  2. FAISS Index Dense Vector Lookup
                </div>
                <div className="text-center text-zinc-600 font-bold leading-none">↓</div>
                <div className={`p-1 rounded border transition-all text-center ${epoch >= 6 ? "bg-emerald-600 border-emerald-600 text-white font-bold shadow-sm" : "border-zinc-800 text-zinc-500 bg-transparent"}`}>
                  3. Context-Injected LLM Output
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT GRID MATRIX */}
        <ProjectGrid />

        {/* FOOTER */}
        <footer className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-zinc-900 pt-6 mt-12 text-[10px] text-zinc-500 font-bold pointer-events-auto">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 text-indigo-400 uppercase tracking-widest"><Shield size={12} /> SECURE_ID // PRANAV-NEELAM-2026</span>
          </div>
          <div className="tracking-widest text-zinc-400 font-black mt-2 sm:mt-0 uppercase">LOC: 17.3850° N, 78.4867° E // HYDERABAD, IN</div>
        </footer>
      </div>
    </main>
  );
}
