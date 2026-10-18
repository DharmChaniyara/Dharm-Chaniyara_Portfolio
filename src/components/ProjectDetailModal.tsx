import React, { useEffect } from 'react';
import { 
  X, 
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-xl overflow-y-auto flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="pr-6">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
                {project.status}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-300 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            <div className="text-[11px] text-slate-400 ml-auto hidden sm:block font-mono">
              Press ESC to close
            </div>
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <span>Problem Addressed</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
              {project.problem}
            </div>
          </div>

          {/* Solution & Implementation */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span>Proposed Solution &amp; Approach</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
              {project.solution}
            </div>
          </div>

          {/* Architecture Notes (if supported by evidence) */}
          {project.architectureNotes && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Architecture &amp; Data Flow</span>
              </h4>
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs text-slate-800 overflow-x-auto">
                {project.architectureNotes}
              </div>
            </div>
          )}

          {/* Key Implemented Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Key Implemented Features</span>
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dharm's Verifiable Contribution */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>My Contribution &amp; Role</span>
            </h4>
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-sm text-slate-700 leading-relaxed">
              {project.contribution}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-slate-600" />
              <span>Key Engineering Lessons</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600 leading-relaxed italic">
              "{project.lessonsLearned}"
            </div>
          </div>

          {/* Technology Choices */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 border border-slate-200 text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-xs sm:text-sm font-medium text-slate-700 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
