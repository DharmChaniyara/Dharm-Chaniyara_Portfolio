import React from 'react';
import { 
  Trophy, 
  Award, 
  FileCheck2, 
  ExternalLink, 
  Calendar, 
  CheckCircle,
  Building,
  Sparkles
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative bg-dark-950/80 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-mono text-brand-cyan mb-2">
            <span>// 05. CREDENTIALS &amp; RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Hackathons &amp; Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Verifiable milestones from student competitions, authorized Cisco certifications, and technical workshops.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="p-6 sm:p-7 rounded-2xl bg-dark-900/80 border border-white/[0.08] backdrop-blur-sm shadow-card hover:border-brand-cyan/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${
                    ach.type === 'Award / Finalist'
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                      : ach.type === 'Certification'
                      ? 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20'
                      : 'bg-brand-purple/10 text-brand-purple border-brand-purple/20'
                  }`}>
                    {ach.badgeText}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{ach.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors tracking-tight">
                  {ach.title}
                </h3>

                {/* Issuing Organization */}
                <div className="flex items-center gap-1.5 text-xs text-brand-blue font-medium mt-1 mb-3">
                  <Building className="w-3.5 h-3.5" />
                  <span>{ach.organization}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Action / Certificate Link */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Status: Verified Record
                </span>

                {ach.credentialUrl && (
                  <a
                    href={ach.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-white transition-colors"
                  >
                    <span>Inspect Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
