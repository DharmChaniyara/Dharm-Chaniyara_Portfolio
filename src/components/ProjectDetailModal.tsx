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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#2F4156]/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#F5EFEB] border-2 border-[#2F4156] shadow-[8px_8px_0_#2F4156] overflow-y-auto flex flex-col text-[#2F4156]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 bg-[#F5EFEB]/95 backdrop-blur-md border-b border-[#2F4156]/15">
          <div className="pr-6">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-[#C8D9E6]/50 text-[#2F4156] border border-[#567C8D]/40">
                {project.status}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-[#567C8D]/15 text-[#2F4156] border border-[#567C8D]/30">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2F4156] tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#2F4156]/80 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white border border-[#2F4156] text-[#2F4156] hover:bg-[#2F4156] hover:text-white transition-colors shrink-0 shadow-[2px_2px_0_#2F4156]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-3 bg-white border border-[#2F4156]/15">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="edgy-btn-primary px-4 py-2 text-xs sm:text-sm font-bold inline-flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </a>
            )}
            <div className="text-[11px] text-[#567C8D] ml-auto hidden sm:block font-mono">
              Press ESC to close
            </div>
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#567C8D]" />
              <span>Problem Addressed</span>
            </h4>
            <div className="p-4 bg-white border border-[#2F4156]/15 text-sm text-[#2F4156]/85 leading-relaxed">
              {project.problem}
            </div>
          </div>

          {/* Solution & Implementation */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-[#567C8D]" />
              <span>Proposed Solution &amp; Approach</span>
            </h4>
            <div className="p-4 bg-white border border-[#2F4156]/15 text-sm text-[#2F4156]/85 leading-relaxed">
              {project.solution}
            </div>
          </div>

          {/* Architecture Notes (if supported by evidence) */}
          {project.architectureNotes && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#567C8D]" />
                <span>Architecture &amp; Data Flow</span>
              </h4>
              <div className="p-4 bg-white border border-[#2F4156]/15 font-mono text-xs text-[#2F4156] overflow-x-auto">
                {project.architectureNotes}
              </div>
            </div>
          )}

          {/* Key Implemented Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#567C8D]" />
              <span>Key Implemented Features</span>
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {project.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-3 bg-white border border-[#2F4156]/15 text-xs sm:text-sm text-[#2F4156]/85"
                >
                  <span className="w-1.5 h-1.5 bg-[#567C8D] mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dharm's Verifiable Contribution */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#567C8D]" />
              <span>My Contribution &amp; Role</span>
            </h4>
            <div className="p-4 bg-[#C8D9E6]/25 border border-[#567C8D]/30 text-sm text-[#2F4156] leading-relaxed">
              {project.contribution}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#567C8D]" />
              <span>Key Engineering Lessons</span>
            </h4>
            <div className="p-4 bg-white border border-[#2F4156]/15 text-sm text-[#2F4156]/80 leading-relaxed italic">
              &quot;{project.lessonsLearned}&quot;
            </div>
          </div>

          {/* Technology Choices */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#567C8D] font-bold">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono font-semibold bg-[#C8D9E6]/35 border border-[#567C8D]/30 text-[#2F4156]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 p-4 bg-[#EDE5DF] border-t border-[#2F4156]/15 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="edgy-btn-secondary px-4 py-2 text-xs sm:text-sm font-bold"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
