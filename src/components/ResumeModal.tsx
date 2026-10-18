import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-white border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Curriculum Vitae &bull; {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                ATS-Optimized &bull; Generated from Verified Data &bull; 1-Page Format
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Dharm_Chaniyara_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Preview */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm bg-slate-50/40 font-sans">
          
          {/* Header */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <div className="text-sm font-semibold text-blue-600 mt-0.5">
                {PERSONAL_INFO.headline}
              </div>
              <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <span>{PERSONAL_INFO.location}</span>
                <span>&bull;</span>
                <span>{PERSONAL_INFO.email}</span>
                <span>&bull;</span>
                <span>github.com/DharmChaniyara</span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
              Open to Internships
            </span>
          </div>

          {/* Professional Summary */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Third-semester B.Tech Computer Science and Engineering student at GSFC University with practical experience in AI-assisted web development, full-stack application development, and Python programming. Completed a 1-month AI Web Development internship at Idealfolks, Rajkot. Proven ability to build practical software solutions including JobGuard AI (scam detector), Deal Intelligence Agent (Hack Baroda 2026 finalist), StudyShare campus resource hub, and collaborative IEEE projects. Eager to contribute to software engineering and AI-enabled product development.
            </p>
          </div>

          {/* Education */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Education</span>
            </h4>
            <div className="flex justify-between items-baseline flex-wrap gap-2">
              <span className="font-bold text-slate-900 text-sm">GSFC University</span>
              <span className="text-xs font-mono text-slate-500">2025 &ndash; 2029 (Currently 3rd Semester)</span>
            </div>
            <div className="text-xs text-blue-700 font-medium">Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</div>
            <div className="text-xs text-slate-600 pt-1">
              <strong>Relevant Coursework:</strong> Object-Oriented Programming (Java/C++), Data Structures, Web Technology, Database Systems, Computer Hardware Basics.
            </div>
          </div>

          {/* Experience */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Experience</span>
            </h4>
            {WORK_EXPERIENCE.map((exp, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <span className="font-bold text-slate-900 text-sm">{exp.role} &mdash; {exp.company}</span>
                  <span className="text-xs font-mono text-slate-500">{exp.verifiedPeriod} &bull; {exp.location}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>Selected Projects</span>
            </h4>
            <div className="space-y-3">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.id} className="space-y-1 border-b border-slate-100 last:border-0 pb-2.5 last:pb-0">
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <span className="font-bold text-slate-900 text-sm">{proj.name}</span>
                    <span className="text-xs font-mono text-blue-700 font-medium">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-600">{proj.solution}</p>
                  <div className="text-[11px] text-slate-500">
                    <strong>My Contribution:</strong> {proj.contribution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" />
              <span>Certifications &amp; Achievements</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-900">{ach.title}</div>
                  <div className="text-slate-500 text-[11px]">{ach.organization} &bull; {ach.date}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:block font-mono">
            File path: /resume/Dharm_Chaniyara_CV.pdf
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Dharm_Chaniyara_CV.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors shadow-sm"
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
