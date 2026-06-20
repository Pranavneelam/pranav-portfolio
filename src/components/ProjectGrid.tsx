import { Code2, ExternalLink, Terminal } from "lucide-react";

const projects = [
  {
    id: "PROJ-01",
    title: "Biometric Steganography Module",
    stack: "C++ / MPV Core / Data Hiding Algorithms",
    status: "STABLE",
    desc: "Advanced security application implementing covert pixel-level biometric data embedding within media streams using custom MPV media engine bindings."
  },
  {
    id: "PROJ-02",
    title: "Enterprise RAG Pipeline",
    stack: "Python / FAISS / Vector Indexing",
    status: "OPTIMIZED",
    desc: "High-performance Retrieval-Augmented Generation indexing pipeline designed for localized system document ingestion and accelerated similarity mapping."
  }
];

export default function ProjectGrid() {
  return (
    <div className="w-full pointer-events-auto mt-16 border-t border-slate-900 pt-12">
      <div className="flex items-center gap-2 text-cyan-500 text-xs font-bold tracking-widest uppercase mb-6">
        <Terminal size={14} /> &gt; COMPILING_ACTIVE_SANDBOX_REPOSITORIES...
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-slate-800 bg-slate-950/40 p-5 rounded-lg backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="flex justify-between items-start border-b border-slate-900 pb-3 mb-3">
              <div>
                <span className="text-[10px] text-cyan-600 font-bold block tracking-widest">{project.id}</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              </div>
              <span className="text-[9px] px-2 py-0.5 bg-cyan-950/50 border border-cyan-800 text-cyan-400 rounded-sm font-bold tracking-wider">
                {project.status}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">{project.desc}</p>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-slate-500 flex items-center gap-1"><Code2 size={12} /> {project.stack}</span>
              <span className="text-cyan-400 flex items-center gap-1 cursor-pointer hover:underline opacity-80 group-hover:opacity-100">
                AUDIT <ExternalLink size={10} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
