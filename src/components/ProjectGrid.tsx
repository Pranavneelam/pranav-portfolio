"use client";
import { ExternalLink, FolderGit2, Binary, HeartPulse } from "lucide-react";

export default function ProjectGrid() {
  const projects = [
    {
      title: "Biometric Steganography using MPV",
      description: "An advanced security framework that injects encrypted biometric data packets into active video media streams via custom MPV processing layers, maintaining pure visual fidelity while enabling high-entropy hidden data retrieval.",
      tech: ["Python", "OpenCV", "Cryptography", "MPV Player API", "Binary Steganography"],
      metrics: "RETRIEVAL_ACCURACY // 100%",
      icon: <Binary className="text-cyan-400" size={20} />,
      github: "https://github.com/Pranavneelam",
      live: "#"
    },
    {
      title: "AI-Driven Healthcare Chatbot",
      description: "An intelligent medical triage agent leveraging Retrieval-Augmented Generation (RAG) and dense FAISS vector search pillars to cross-reference patient symptoms against trusted medical databases for secure, contextual diagnostics.",
      tech: ["Python", "FAISS", "LangChain", "FastAPI", "Hugging Face Transformers"],
      metrics: "LATENCY // <180ms",
      icon: <HeartPulse className="text-rose-400 animate-pulse" size={20} />,
      github: "https://github.com/Pranavneelam",
      live: "#"
    }
  ];

  return (
    <section className="w-full mt-10 pointer-events-auto">
      <div className="border-b border-slate-900 pb-2 mb-6 flex items-center justify-between">
        <h2 className="text-xs font-black tracking-widest text-slate-400 uppercase flex items-center gap-2">
          <FolderGit2 size={14} className="text-cyan-400" /> Active Deployment Matrix
        </h2>
        <span className="text-[9px] text-slate-600 font-bold tracking-widest uppercase">PROJ_COUNT // 02</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative bg-slate-950/60 border border-slate-900 rounded-lg p-5 backdrop-blur-md hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)] transition-all duration-500 flex flex-col justify-between"
          >
            {/* Ambient Corner Accents */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-800 group-hover:border-cyan-400 transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-800 group-hover:border-cyan-400 transition-colors" />

            <div>
              {/* Header Info */}
              <div className="flex justify-between items-start mb-3.5">
                <div className="p-2 bg-slate-900/40 rounded border border-slate-800/80 group-hover:border-cyan-500/20 group-hover:bg-cyan-950/10 transition-all">
                  {project.icon}
                </div>
                <span className="text-[9px] font-mono font-black tracking-wider text-cyan-500/70 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/10">
                  {project.metrics}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors tracking-wide uppercase">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400/90 tracking-wide font-sans mt-2.5 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Tags and Links */}
            <div className="mt-6 pt-4 border-t border-slate-900/60 group-hover:border-cyan-500/10 transition-colors">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800/60 group-hover:border-slate-800 group-hover:text-slate-300 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider pt-1">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg> 
                  Source_Code
                </a>
                <a 
                  href={project.live} 
                  className="flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  Live_Instance <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
