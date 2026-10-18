import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award,
  CheckCircle2,
  Printer
} from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-dark-900 border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-dark-950 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Curriculum Vitae &bull; Dharm Chaniyara
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                ATS-Optimized &bull; Generated from Verified Data &bull; PDF Version 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Dharm_Chaniyara_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-cyan text-dark-950 font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-glow-cyan"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.08] transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Preview */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm bg-dark-900/60 font-sans">
          
          {/* Paper View Header */}
          <div className="pb-5 border-b border-white/[0.1] text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <div className="text-sm font-semibold text-brand-cyan mt-0.5">
                {PERSONAL_INFO.headline}
              </div>
              <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <span>{PERSONAL_INFO.location}</span>
                <span>&bull;</span>
                <span>{PERSONAL_INFO.email}</span>
                <span>&bull;</span>
                <span>github.com/DharmChaniyara</span>
              </div>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Seeking 2026/2027 Internships
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cyan mb-2">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-dark-950/70 p-4 rounded-xl border border-white/[0.06]">
              Third-semester B.Tech Computer Science and Engineering student at GSFC University with practical experience in AI-assisted web development, full-stack application development, and Python programming. Completed a 1-month AI Web Development internship at Idealfolks, Rajkot. Proven ability to build practical software solutions including JobGuard AI (scam detector), Deal Intelligence Agent (Hack Baroda 2026 finalist), StudyShare campus resource hub, and collaborative IEEE projects. Eager to contribute to software engineering and AI-enabled product development.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue mb-2.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06] space-y-1">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <span className="font-bold text-white text-sm">GSFC University</span>
                <span className="text-xs font-mono text-slate-400">2025 – 2029 (Current: 3rd Semester)</span>
              </div>
              <div className="text-xs text-brand-cyan">Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</div>
              <div className="text-xs text-slate-400 pt-1">
                <strong>Coursework:</strong> Object-Oriented Programming (Java/C++), Data Structures, Web Technology, Database Systems, Computer Hardware.
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2.5 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </h4>
            {WORK_EXPERIENCE.map((exp, i) => (
              <div key={i} className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06] space-y-2">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <span className="font-bold text-white text-sm">{exp.role} &mdash; {exp.company}</span>
                  <span className="text-xs font-mono text-slate-400">{exp.verifiedPeriod} &bull; {exp.location}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-purple mb-2.5 flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              <span>Selected Projects</span>
            </h4>
            <div className="space-y-3">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-dark-950/70 border border-white/[0.06] space-y-1.5">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="font-bold text-white text-sm">{proj.name}</span>
                    <span className="text-xs font-mono text-brand-cyan">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.solution}</p>
                  <div className="text-[11px] text-slate-400">
                    <strong>My Contribution:</strong> {proj.contribution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certifications &amp; Achievements</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="p-3 rounded-lg bg-dark-950/60 border border-white/[0.04]">
                  <div className="font-bold text-white">{ach.title}</div>
                  <div className="text-slate-400 text-[11px]">{ach.organization} &bull; {ach.date}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-dark-950 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs text-slate-400 hidden sm:block font-mono">
            File target: /resume/Dharm_Chaniyara_CV.pdf
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-300"
            >
              Close
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Dharm_Chaniyara_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-brand-cyan text-dark-950 font-bold text-xs sm:text-sm hover:brightness-110 shadow-glow-cyan"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF File</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
