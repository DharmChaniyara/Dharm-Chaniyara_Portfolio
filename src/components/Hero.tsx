import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Award,
  Sparkles,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinColoredIcon, GithubColoredIcon } from './BrandIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#2F4156]/15 bg-[#F5EFEB] bg-edgy-grid overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Introduction & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill with Precision Edge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8D9E6]/70 border border-[#567C8D]/40 text-xs font-semibold text-[#2F4156] mb-6 shadow-edge-xs">
              <span className="w-2 h-2 rounded-full bg-[#567C8D] animate-pulse" />
              <span>3rd Sem B.Tech CSE @ GSFC University</span>
              <span className="text-[#567C8D]">&bull;</span>
              <span>Open to Internships</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2F4156] leading-[1.08] mb-3">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Headline */}
            <h2 className="text-lg sm:text-xl font-semibold text-[#567C8D] mb-5">
              Computer Science Student &bull; Aspiring AI/ML Engineer &amp; Software Developer
            </h2>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-[#2F4156]/85 leading-relaxed mb-8 max-w-2xl">
              I build practical software applications and explore AI-powered tools. 
              Grounded in foundational computer science at <span className="text-[#2F4156] font-bold">GSFC University</span>, 
              with hands-on front-end experience from an internship at <span className="text-[#2F4156] font-bold">IdeaFolks</span>, 
              and practical projects including <span className="text-[#2F4156] font-bold">JobGuard AI</span> (scam detection), 
              the <span className="text-[#2F4156] font-bold">Deal Intelligence Agent</span> (Hack Baroda 2026 finalist), 
              and <span className="text-[#2F4156] font-bold">StudyShare</span>.
            </p>

            {/* Action Buttons with Edgy / Precision Edges */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto edgy-btn-primary px-6 py-3 rounded-md font-semibold text-sm inline-flex items-center justify-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto edgy-btn-secondary px-5 py-3 rounded-md font-semibold text-sm inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#567C8D]" />
                <span>Download CV</span>
              </button>

              <div className="flex items-center gap-2.5 pt-2 sm:pt-0">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="edgy-btn-secondary p-2.5 rounded-md flex items-center justify-center group"
                  aria-label="Connect on LinkedIn"
                  title="LinkedIn Profile"
                >
                  <LinkedinColoredIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="edgy-btn-secondary p-2.5 rounded-md flex items-center justify-center group"
                  aria-label="View GitHub profile"
                  title="GitHub Profile"
                >
                  <GithubColoredIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Edgy Profile Highlights Card featuring Arch Photo */}
          <div className="lg:col-span-5">
            <div className="edgy-card rounded-xl p-6 sm:p-7 relative overflow-hidden">
              
              {/* Card Header with Arch Photo Preview & Status */}
              <div className="flex items-center gap-4 pb-4 mb-4 border-b border-[#2F4156]/12">
                <div className="w-14 h-18 rounded-t-full overflow-hidden border-2 border-white shadow-edge-xs bg-[#2F4156] shrink-0">
                  <img 
                    src="/images/dharm_arch_photo.png" 
                    alt="Dharm Chaniyara" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#567C8D]">
                    Profile Snapshot
                  </div>
                  <div className="text-sm font-bold text-[#2F4156] truncate">
                    Dharm Chaniyara
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#567C8D] mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#567C8D]" />
                    B.Tech CSE &bull; GSFC University
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#C8D9E6]/50 text-[#2F4156] shrink-0 mt-0.5 border border-[#2F4156]/10">
                    <GraduationCap className="w-4 h-4 text-[#2F4156]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#567C8D] font-medium">Education</div>
                    <div className="font-bold text-[#2F4156]">GSFC University, Gujarat</div>
                    <div className="text-xs text-[#2F4156]/75">B.Tech CSE &bull; 3rd Semester (2025–2029)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#C8D9E6]/50 text-[#2F4156] shrink-0 mt-0.5 border border-[#2F4156]/10">
                    <Briefcase className="w-4 h-4 text-[#2F4156]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#567C8D] font-medium">Industry Training</div>
                    <div className="font-bold text-[#2F4156]">IdeaFolks &bull; Rajkot</div>
                    <div className="text-xs text-[#2F4156]/75">AI Web Developer Intern (June–July 2026)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#C8D9E6]/50 text-[#2F4156] shrink-0 mt-0.5 border border-[#2F4156]/10">
                    <Trophy className="w-4 h-4 text-[#2F4156]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#567C8D] font-medium">Competition</div>
                    <div className="font-bold text-[#2F4156]">Hack Baroda 2026 Finalist</div>
                    <div className="text-xs text-[#2F4156]/75">Offline Finalist with Team CODE BUSTERS</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#C8D9E6]/50 text-[#2F4156] shrink-0 mt-0.5 border border-[#2F4156]/10">
                    <Award className="w-4 h-4 text-[#2F4156]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#567C8D] font-medium">Certification</div>
                    <div className="font-bold text-[#2F4156]">Python Essentials 2</div>
                    <div className="text-xs text-[#2F4156]/75">Cisco Networking Academy (Oct 2026)</div>
                  </div>
                </div>

              </div>

              <div className="mt-5 pt-3.5 border-t border-[#2F4156]/12 flex items-center justify-between text-xs text-[#567C8D]">
                <span>Vadodara, Gujarat &bull; Open across Gujarat</span>
                <a href="#about" className="text-[#2F4156] font-bold hover:underline flex items-center gap-1">
                  <span>Read background</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
