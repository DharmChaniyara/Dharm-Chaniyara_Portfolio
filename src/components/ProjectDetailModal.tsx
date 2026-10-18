import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Code2, 
  Cpu, 
  ArrowUpRight 
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-dark-900 border border-white/[0.12] rounded-2xl shadow-2xl overflow-y-auto flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 bg-dark-900/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="pr-6">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                {project.status}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.08] transition-all shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-dark-950 border border-white/[0.06]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-cyan text-dark-950 text-xs sm:text-sm font-bold hover:brightness-110 transition-all shadow-glow-cyan"
              >
                <span>Open Live Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs sm:text-sm font-semibold border border-white/[0.08] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            <div className="text-[11px] text-slate-400 ml-auto hidden sm:block font-mono">
              Press ESC to exit
            </div>
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider text-brand-cyan flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Addressed</span>
            </h4>
            <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06] text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </div>
          </div>

          {/* Solution & Implementation */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" />
              <span>Proposed Solution &amp; Approach</span>
            </h4>
            <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06] text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </div>
          </div>

          {/* Architecture Notes (if supported by evidence) */}
          {project.architectureNotes && (
            <div className="space-y-2">
              <h4 className="text-sm font-mono uppercase tracking-wider text-brand-purple flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>Architecture &amp; Data Flow</span>
              </h4>
              <div className="p-4 rounded-xl bg-dark-950 border border-white/[0.06] font-mono text-xs text-slate-300 overflow-x-auto">
                {project.architectureNotes}
              </div>
            </div>
          )}

          {/* Key Implemented Features */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Implemented Features</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-dark-950/60 border border-white/[0.04] text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dharm's Verifiable Contribution */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>My Verifiable Contribution &amp; Role</span>
            </h4>
            <div className="p-4 rounded-xl bg-dark-950/70 border border-amber-500/20 text-sm text-slate-300 leading-relaxed">
              {project.contribution}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              <span>Engineering Lessons &amp; Key Challenges</span>
            </h4>
            <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06] text-sm text-slate-400 leading-relaxed italic">
              "{project.lessonsLearned}"
            </div>
          </div>

          {/* Technology Choices */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technology Stack Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 p-4 bg-dark-900/95 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs sm:text-sm font-medium text-slate-300 transition-all"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
