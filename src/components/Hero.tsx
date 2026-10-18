import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Award,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-slate-200/80 bg-slate-50/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Introduction & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-medium text-blue-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>3rd Sem B.Tech CSE @ GSFC University</span>
              <span className="text-blue-300">&bull;</span>
              <span>Open to Internships</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Headline */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-700 mb-5">
              Computer Science Student &bull; Aspiring AI/ML Engineer &amp; Software Developer
            </h2>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              I build practical software applications and explore AI-powered tools. 
              Grounded in foundational computer science at <span className="text-slate-900 font-medium">GSFC University</span>, 
              with hands-on front-end experience from an internship at <span className="text-slate-900 font-medium">IdeaFolks</span>, 
              and practical projects including <span className="text-slate-900 font-medium">JobGuard AI</span> (scam detection), 
              the <span className="text-slate-900 font-medium">Deal Intelligence Agent</span> (Hack Baroda 2026 finalist), 
              and <span className="text-slate-900 font-medium">StudyShare</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 active:scale-95 transition-all shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-300 transition-all active:scale-95 shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Download CV</span>
              </button>

              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm"
                  aria-label="View GitHub profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, Minimalist Profile Highlights Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                  Profile Snapshot
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Active Student
                </span>
              </div>

              <div className="space-y-4 text-sm">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Education</div>
                    <div className="font-semibold text-slate-900">GSFC University, Gujarat</div>
                    <div className="text-xs text-slate-600">B.Tech CSE &bull; 3rd Semester (2025–2029)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Industry Training</div>
                    <div className="font-semibold text-slate-900">IdeaFolks &bull; Rajkot</div>
                    <div className="text-xs text-slate-600">AI Web Developer Intern (June–July 2026)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Competition</div>
                    <div className="font-semibold text-slate-900">Hack Baroda 2026 Finalist</div>
                    <div className="text-xs text-slate-600">Offline Finalist with Team CODE BUSTERS</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Certification</div>
                    <div className="font-semibold text-slate-900">Python Essentials 2</div>
                    <div className="text-xs text-slate-600">Cisco Networking Academy (Oct 2026)</div>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Location: Vadodara / Rajkot, India</span>
                <a href="#about" className="text-blue-600 font-medium hover:underline">
                  Read background &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
