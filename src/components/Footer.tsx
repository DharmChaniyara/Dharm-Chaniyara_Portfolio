import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-dark-950 border-t border-white/[0.06] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-bold text-white text-base">
              <span className="w-6 h-6 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan flex items-center justify-center font-mono text-xs">
                DC
              </span>
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-slate-400 mt-1 max-w-sm">
              Computer Science Undergraduate at GSFC University &bull; Aspiring AI/ML &amp; Software Developer
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-300">
            <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
            <a href="#experience" className="hover:text-brand-cyan transition-colors">Experience</a>
            <a href="#projects" className="hover:text-brand-cyan transition-colors">Projects</a>
            <a href="#skills" className="hover:text-brand-cyan transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-brand-cyan transition-colors">Achievements</a>
            <button onClick={onOpenResume} className="hover:text-brand-cyan transition-colors">Resume</button>
          </div>

          {/* Right Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 font-mono text-[11px]">
          <div>
            &copy; 2026 {PERSONAL_INFO.name}. All verified projects &amp; credentials.
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Built with React &bull; TypeScript &bull; Tailwind CSS &bull; Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
