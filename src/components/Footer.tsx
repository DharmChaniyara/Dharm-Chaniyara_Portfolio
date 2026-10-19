import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinColoredIcon, GithubColoredIcon, GmailColoredIcon } from './BrandIcons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#EDE5DF] border-t border-[#2F4156]/20 text-[#567C8D] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2F4156]/15">
          
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 font-bold text-[#2F4156] text-base">
              <span className="w-7 h-7 bg-white border border-[#2F4156] text-[#2F4156] flex items-center justify-center font-mono text-xs font-bold shadow-[2px_2px_0_#2F4156]">
                DC
              </span>
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-[#2F4156]/70 mt-1 max-w-sm">
              Computer Science Undergraduate &bull; GSFC University &bull; Aspiring AI/ML &amp; Software Developer
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-[#2F4156]/80 font-semibold">
            <a href="#about" className="hover:text-[#2F4156] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#2F4156] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#2F4156] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#2F4156] transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-[#2F4156] transition-colors">Achievements</a>
            <button onClick={onOpenResume} className="hover:text-[#2F4156] transition-colors font-bold">Resume</button>
          </div>

          {/* Right Socials & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 edgy-card hover:bg-[#F5EFEB] transition-all"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinColoredIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 edgy-card hover:bg-[#F5EFEB] transition-all"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubColoredIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 edgy-card hover:bg-[#F5EFEB] transition-all"
              aria-label="Email"
              title="Email"
            >
              <GmailColoredIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#2F4156] text-white hover:bg-[#567C8D] transition-colors ml-1 border border-[#2F4156] shadow-[2px_2px_0_#2F4156] active:translate-x-0.5 active:translate-y-0.5"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#567C8D] font-mono text-[11px]">
          <div>
            &copy; 2026 {PERSONAL_INFO.name}. All verified projects &amp; records.
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#567C8D]" />
            <span>Precision Engineered &bull; React, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
