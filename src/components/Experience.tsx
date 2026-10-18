import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const exp = WORK_EXPERIENCE[0];

  return (
    <section id="experience" className="py-20 relative bg-dark-900/40 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan mb-2">
            <span>// 02. INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Internship Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Verified professional industry training with hands-on web engineering and modern AI development tools.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="relative">
          
          {/* Subtle timeline vertical accent */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-blue to-transparent opacity-30" />

          <div className="md:pl-16 relative">
            
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-6 -top-1 w-5 h-5 rounded-full bg-dark-950 border-2 border-brand-cyan items-center justify-center -translate-x-1/2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
            </div>

            {/* Main Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-white/[0.08] backdrop-blur-sm shadow-card hover:border-brand-cyan/30 transition-all">
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Certificate on Record</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-base text-brand-cyan font-medium mt-0.5">
                    {exp.company} &bull; <span className="text-slate-300 font-normal">Web Development Division</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 bg-dark-950 px-3 py-1.5 rounded-lg border border-white/[0.06]">
                    <Calendar className="w-4 h-4 text-brand-cyan" />
                    <span>{exp.verifiedPeriod}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-dark-950 px-3 py-1.5 rounded-lg border border-white/[0.06]">
                    <MapPin className="w-4 h-4 text-brand-cyan" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description & Key Focus */}
              <div className="mt-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Practical Learnings &amp; Responsibilities:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark-950/60 border border-white/[0.04]">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Tools Used:</span>
                  {exp.technologies.map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Verification Action */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-brand-cyan" />
                    <span>Authorized by Founder <strong>Mr. Hardik Mandir</strong></span>
                  </div>

                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold transition-all"
                  >
                    <span>View Internship Certificate (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
