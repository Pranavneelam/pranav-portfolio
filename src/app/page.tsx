"use client";
import { useState, useEffect, useRef } from "react";
import { Shield, Activity, Terminal, ChevronDown, RefreshCw, Cpu, Code2, Database, Box, Brain, Network, TerminalSquare, Cloud, Flame, Globe } from "lucide-react";
import HologramCore from "../components/HologramCore";
import ProjectGrid from "../components/ProjectGrid";

export default function Home() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"ai-core" | "data-ops" | "dev-env">("ai-core");
  
  // Loss & Accuracy Chart States
  const [epoch, setEpoch] = useState(0);
  const [lossMetrics, setLossMetrics] = useState<{ loss: number; acc: number }[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const rawAuditSteps = [
    "> INITIALIZING INTELLIGENT SYSTEMS PIPELINE...",
    "> MAPPING MODEL MATRIX: TRANSFORMERS & PYTORCH TENSORS...",
    "> TUNING AGENT NODES VIA LANGCHAIN & LANGGRAPH PIPELINES CHECKED",
    "> RETRIEVING EMBEDDINGS VECTOR SEARCH PILLARS FROM FAISS...",
    "> DEPLOYING MICROSERVICE CONTAINER WORKSPACES VIA DOCKER & FASTAPI...",
    "> SYNC COMPLETED // SECURE EDGE AI INFRASTRUCTURE IS OPERATIONAL."
  ];

  // Handle Log Stream & Chart Simulation
  useEffect(() => {
    if (isAuditing) {
      setTerminalLogs([]);
      setEpoch(0);
      setLossMetrics([]);
      
      let currentLine = 0;
      const interval = setInterval(() => {
        if (currentLine < rawAuditSteps.length) {
          setTerminalLogs((prev) => [...prev, rawAuditSteps[currentLine]]);
          
          // Generate realistic decaying loss and rising accuracy per step
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

  // Render Canvas mini-graph
  useEffect(() => {
    if (canvasRef.current && lossMetrics.length > 0) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      
      const width = canvasRef.current.width;
      const height = canvasRef.current.height;
      ctx.clearRect(0, 0, width, height);

      // Draw Grid Lines
      ctx.strokeStyle = "rgba(6, 182, 212, 0.05)";
      ctx.lineWidth = 1;
      for (let i = 20; i < width; i += 30) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke();
      }
      for (let i = 15; i < height; i += 20) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke();
      }

      // Draw Loss Curve (Cyan)
      ctx.beginPath();
      ctx.strokeStyle = "#22d3ee";
      ctx.lineWidth = 2;
      lossMetrics.forEach((m, idx) => {
        const x = (idx / (rawAuditSteps.length - 1)) * (width - 20) + 10;
        const y = height - (m.loss * (height - 20)) - 10;
        if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Draw Accuracy Curve (Emerald)
      ctx.beginPath();
      ctx.strokeStyle = "#34d399";
      ctx.lineWidth = 1.5;
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
      { name: "Python", expert: true, icon: <Code2 size={13} className="text-cyan-400" /> },
      { name: "Hugging Face", expert: true, icon: <Brain size={13} className="text-amber-400" /> },
      { name: "PyTorch", expert: true, icon: <Flame size={13} className="text-orange-500" /> },
      { name: "LangChain", expert: true, icon: <Network size={13} className="text-emerald-400" /> },
      { name: "FAISS", expert: true, icon: <Box size={13} className="text-blue-400" /> },
      { name: "Scikit-Learn", expert: true, icon: <Cpu size={13} className="text-teal-400" /> },
      { name: "OpenAI API", expert: false, icon: <Cpu size={13} className="text-slate-400" /> },
      { name: "LangGraph", expert: false, icon: <Network size={13} className="text-slate-400" /> },
      { name: "TensorFlow", expert: false, icon: <Activity size={13} className="text-orange-400" /> },
      { name: "OpenCV (CV)", expert: false, icon: <Brain size={13} className="text-cyan-500" /> },
      { name: "Transformers (NLP)", expert: false, icon: <Brain size={13} className="text-violet-400" /> },
      { name: "LSTM (Time Series)", expert: false, icon: <Activity size={13} className="text-pink-400" /> },
    ],
    "data-ops": [
      { name: "SQL", expert: false, icon: <Database size={13} className="text-emerald-400" /> },
      { name: "MongoDB", expert: false, icon: <Database size={13} className="text-green-500" /> },
      { name: "Pandas", expert: false, icon: <Database size={13} className="text-indigo-400" /> },
      { name: "NumPy", expert: false, icon: <Cpu size={13} className="text-blue-500" /> },
      { name: "Apache Spark", expert: false, icon: <Cloud size={13} className="text-orange-400" /> },
      { name: "Kafka", expert: false, icon: <Network size={13} className="text-red-400" /> },
      { name: "Matplotlib", expert: false, icon: <Activity size={13} className="text-cyan-400" /> },
      { name: "Seaborn", expert: false, icon: <Activity size={13} className="text-teal-400" /> },
    ],
    "dev-env": [
      { name: "Docker", expert: true, icon: <Box size={13} className="text-sky-400" /> },
      { name: "FastAPI", expert: true, icon: <TerminalSquare size={13} className="text-teal-400" /> },
      { name: "AWS", expert: true, icon: <Cloud size={13} className="text-orange-500" /> },
      { name: "Git & GitHub", expert: true, icon: <Globe size={13} className="text-white" /> },
      { name: "Kubernetes", expert: false, icon: <Box size={13} className="text-blue-500" /> },
      { name: "VS Code", expert: false, icon: <TerminalSquare size={13} className="text-blue-400" /> },
      { name: "Jupyter / Colab", expert: false, icon: <Code2 size={13} className="text-amber-500" /> },
    ]
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full my-auto items-start gap-8 pt-6 pb-6">
          
          {/* Left Column: Vision Profile */}
          <div className="lg:col-span-4 flex flex-col gap-2 pointer-events-auto self-center">
            <div className="flex flex-col gap-1 text-[11px] font-bold tracking-wider text-cyan-500/80">
              <p className="flex items-center gap-1">&gt; SOURCE: VIDYA JYOTHI INSTITUTE OF TECHNOLOGY</p>
              <p className="animate-pulse">&gt; SYNCHRONIZING NEURAL RUNTIMES...</p>
            </div>
            
            <div className="mt-4">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                ARTIFICIAL<br />
                INTELLIGENCE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  ENGINEER
                </span>
              </h1>
              
              <div className="mt-2 text-cyan-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-2 bg-cyan-950/20 border border-cyan-500/10 px-2 py-1 rounded w-fit">
                <Cpu size={12} className="text-cyan-400 animate-pulse" />
                <span>AI_ENGINEERING_INTERN // VARIABLE</span>
              </div>

              <p className="text-xs text-slate-400/90 tracking-wide uppercase mt-4 max-w-sm font-sans leading-relaxed">
                Specialized in architecting complex Intelligent agent pipelines, Retrieval-Augmented Generation (RAG) frameworks, and optimizing distributed data training environments.
              </p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button 
                onClick={() => setIsAuditing(true)}
                className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold uppercase text-[11px] tracking-wider rounded border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:bg-transparent hover:text-cyan-400 transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                Execute Pipeline Audit
              </button>
            </div>
          </div>
          
          {/* Center Column: Portrait Frame */}
          <div className="lg:col-span-4 flex justify-center items-center relative group pointer-events-auto z-20 self-center">
            <div className="absolute -inset-2 border border-cyan-500/10 rounded-xl pointer-events-none group-hover:border-cyan-500/40 transition-all duration-500" />
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400 z-30" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyan-400 z-30" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-cyan-400 z-30" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-400 z-30" />
            
            <div className="w-full max-w-[290px] aspect-[4/5] relative rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.95)] group-hover:border-cyan-500/50 transition-all duration-700">
              <img 
                src="/profile.jpeg" 
                alt="Pranav Neelam" 
                className="w-full h-full object-cover grayscale opacity-75 contrast-115 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
            </div>
          </div>
          
          {/* Right Column: Multi-Tab Stack Diagnostic */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-slate-950/70 p-4 border border-slate-900 rounded-lg backdrop-blur-md pointer-events-auto shadow-[2px_4px_20px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center border-b border-slate-900 pb-2">
              <span className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider"><Activity size={12} /> Tech Matrix Console</span>
              <span className="text-[9px] text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-500/20 px-1.5 py-0.5 rounded animate-pulse">V2_OPTIMIZED</span>
            </div>

            {/* TAB SELECTORS */}
            <div className="grid grid-cols-3 gap-1 bg-slate-900/60 p-1 rounded border border-slate-800/60 text-[9px] font-bold tracking-wider uppercase">
              <button onClick={() => setActiveTab("ai-core")} className={`py-1.5 rounded transition-all cursor-pointer text-center ${activeTab === "ai-core" ? "bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-black" : "text-slate-500"}`}>AI & LLMs</button>
              <button onClick={() => setActiveTab("data-ops")} className={`py-1.5 rounded transition-all cursor-pointer text-center ${activeTab === "data-ops" ? "bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-black" : "text-slate-500"}`}>Data Infra</button>
              <button onClick={() => setActiveTab("dev-env")} className={`py-1.5 rounded transition-all cursor-pointer text-center ${activeTab === "dev-env" ? "bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-black" : "text-slate-500"}`}>MLOps & Cloud</button>
            </div>

            {/* LIVE STACK GRID */}
            <div className="grid grid-cols-1 gap-1.5 max-h-[220px] overflow-y-auto custom-scrollbar pr-1">
              {stack[activeTab].map((tech, idx) => (
                <div key={idx} className={`flex items-center justify-between p-2 rounded text-xs transition-all border ${tech.expert ? "bg-cyan-950/20 border-cyan-500/20 text-white font-bold shadow-[inset_0_0_8px_rgba(6,182,212,0.05)]" : "bg-slate-900/30 border-slate-900 text-slate-400"}`}>
                  <div className="flex items-center gap-2">{tech.icon}<span className="tracking-wide">{tech.name}</span></div>
                  {tech.expert && <span className="text-[8px] tracking-widest text-cyan-400 px-1 py-0.5 bg-cyan-950/60 rounded border border-cyan-400/30 font-black animate-pulse">CORE_EXPERT</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* UPGRADED INTERACTIVE TERMINAL AUDIT CONSOLE & VISUALIZERS */}
        {isAuditing && (
          <div className="w-full bg-slate-950 border border-cyan-500/30 rounded-lg p-4 mb-6 pointer-events-auto shadow-[0_0_25px_rgba(6,182,212,0.1)] animate-[fadeIn_0.3s_ease-out] grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Terminal Column */}
            <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-900 pb-4 lg:pb-0 lg:pr-4">
              <div className="flex justify-between items-center border-b border-slate-900 pb-2 mb-3 text-xs font-bold text-cyan-400">
                <span className="flex items-center gap-2"><Terminal size={14} className="animate-pulse" /> CORE DEPLOYMENT RUNTIMES</span>
              </div>
              <div className="h-36 overflow-y-auto text-[11px] font-mono space-y-1.5 text-slate-300 custom-scrollbar pr-2">
                {terminalLogs.map((log, index) => (
                  <div key={index} className={`flex gap-2 ${index === terminalLogs.length - 1 && terminalLogs.length < rawAuditSteps.length ? "text-cyan-400" : "text-emerald-400/90"}`}>
                    <span className="text-slate-600 select-none">[{new Date().toLocaleTimeString()}]</span>
                    <span>{log}</span>
                  </div>
                ))}
                {terminalLogs.length < rawAuditSteps.length && (
                  <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
                    <RefreshCw size={10} className="animate-spin" />
                    <span>COMPILING MODEL WEIGHT MATRIX...</span>
                  </div>
                )}
                <div ref={terminalEndRef} />
              </div>
            </div>

            {/* Live Model Training Curve Canvas Column */}
            <div className="lg:col-span-3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-900 pb-4 lg:pb-0 lg:pr-4">
              <div className="text-[10px] font-bold text-slate-400 tracking-wider mb-2 flex justify-between items-center">
                <span>// LIVE TRAINING OPTIMIZATION</span>
                <span className="text-cyan-400 font-mono">EPOCH: {epoch}/6</span>
              </div>
              <div className="relative bg-black/50 border border-slate-900 rounded p-1 flex justify-center items-center">
                <canvas ref={canvasRef} width={200} height={110} className="w-full h-28" />
                {lossMetrics.length > 0 && (
                  <div className="absolute bottom-2 left-2 flex gap-3 text-[9px] font-mono font-bold">
                    <span className="text-cyan-400">LOSS: {lossMetrics[lossMetrics.length - 1]?.loss.toFixed(4)}</span>
                    <span className="text-emerald-400">ACC: {lossMetrics[lossMetrics.length - 1]?.acc.toFixed(1)}%</span>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive RAG Flowchart Column */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="text-[10px] font-bold text-slate-400 tracking-wider mb-2 flex justify-between items-center">
                <span>// RAG PIPELINE ARCHITECTURE (FAISS)</span>
                <button onClick={() => setIsAuditing(false)} className="text-slate-500 hover:text-rose-400 p-0.5"><ChevronDown size={14} /></button>
              </div>
              <div className="flex flex-col gap-1 text-[9px] tracking-wide font-mono bg-slate-900/20 border border-slate-900 p-2 rounded h-28 justify-center">
                <div className={`p-1 rounded border transition-all text-center ${epoch >= 1 ? "bg-cyan-950/40 border-cyan-500/40 text-cyan-400 font-bold" : "border-slate-900 text-slate-600"}`}>
                  1. Patient Query Input Pipeline
                </div>
                <div className="text-center text-slate-700 font-bold leading-none">↓</div>
                <div className={`p-1 rounded border transition-all text-center ${epoch >= 4 ? "bg-blue-950/40 border-blue-500/40 text-blue-400 font-bold" : "border-slate-900 text-slate-600"}`}>
                  2. FAISS Index Dense Vector Lookup
                </div>
                <div className="text-center text-slate-700 font-bold leading-none">↓</div>
                <div className={`p-1 rounded border transition-all text-center ${epoch >= 6 ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-400 font-bold" : "border-slate-900 text-slate-600"}`}>
                  3. Context-Injected LLM Output
                </div>
              </div>
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
